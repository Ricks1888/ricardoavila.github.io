import React from 'react';
import Typewriter from 'typewriter-effect';
import Container from 'react-bootstrap/Container';
import './Hero.css';
import Circulo from './Circulo';

function Hero() {
  return (
    <div>
      <Container className='container1'>
        <h1 className='titulo'>Ricardo Avila</h1>
        <Circulo></Circulo>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(5500);
          }}
          options={{
            strings: [
              'Compositor',
              'Ingeniero de Sonido',
              'Productor',
              'Guitarrista',
            ],
            autoStart: true,
            loop: true,
            delay: 90,
            deleteSpeed: 10,
          }}
        />
      </Container>
    </div>
  );
}

export default Hero;
