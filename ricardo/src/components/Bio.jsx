import React from 'react';
import './Bio.css';

import Container from 'react-bootstrap/Container';

function Bio() {
  return (
    <Container className='bio-cont'>
      <h3>Biografía</h3>
      <Container className='bio-text'>
        <p>
          <span>Ricardo Avila </span> guitarrista, compositor e ing de sonido.
          Con una formación variada como guitariista y en el sonido , en el 2009
          hace una especialización en la guitarra flamenca en el conservatorio
          de flamenco de Madrid. Posteriormente se especializa en la guitarra
          jazz siguiedo diferentes formaciones en España, Cuba y Francia.{' '}
        </p>
        <p>
          {' '}
          Igualemente titular de un bachelor en producción de audio, licencia de
          musicología en Paris VIII y un master en informática musical. Ricardo
          se especializa en la composición contemporánea, electroacústica y
          acusmática. Pudiendo presentar diversas composiciones y creaciones
          sonoras en diferentes auditorios en Francia, España y America Latina.
        </p>
      </Container>
    </Container>
  );
}

export default Bio;
