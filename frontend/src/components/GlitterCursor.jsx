import React, { useEffect, useState } from 'react';
import './GlitterCursor.css';

const GlitterCursor = () => {
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    let particleId = 0;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create new particle
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        life: 100,
        color: Math.random() > 0.5 ? '#B76E79' : '#D4AF37'
      };

      setParticles(prev => [...prev, newParticle].slice(-30));
    };

    const animate = () => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            life: p.life - 2,
            rotation: p.rotation + 5
          }))
          .filter(p => p.life > 0)
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="glitter-cursor"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
      
      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="glitter-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.life / 100,
            transform: `rotate(${particle.rotation}deg) scale(${particle.life / 100})`,
            background: `linear-gradient(45deg, ${particle.color}, transparent)`,
            boxShadow: `0 0 ${particle.size}px ${particle.color}`
          }}
        />
      ))}
    </>
  );
};

export default GlitterCursor;