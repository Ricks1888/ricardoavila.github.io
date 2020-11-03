import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './Compos.css';
import Waveform from './Waveform';
import PlayList from './PlayList';

const tracks = [
  {
    id: 0,
    title: (
      <div className='song1'>
        <h3>Komanali01</h3>
        <h4>Pour Violoncelle Solo</h4>
        <h5>2019</h5>
      </div>
    ),
    url: 'https://ricardosite.imfast.io/music/Komanali01_1.MP3',
  },
  {
    id: 1,
    title: (
      <div className='song2'>
        <h3>Guitarre Plastique</h3>
        <br />
        <h4>Pour Guitare Electroacustique et Objets plastiques</h4>
        <br />
        <h5>2017</h5>
      </div>
    ),
    url: 'https://ricardosite.imfast.io/music/Guitare%20plastique%20mix.mp3',
  },
  {
    id: 2,
    title: (
      <div className='song3'>
        <h3>Altl'z</h3>
        <br />
        <h4>Pour Flutes Prehispaniques et Electronique en temps reel</h4>
        <br />
        <h5>2018</h5>
      </div>
    ),
    url: 'https://ricardosite.imfast.io/music/Altz%20Ricardo%20Avila.mp3',
  },
  {
    id: 3,
    title: (
      <div className='song4'>
        <h3>Declaracion de Odio</h3>
        <br />
        <h4>Electroacustique pure</h4>
        <br />
        <h5>2020</h5>
      </div>
    ),
    url:
      'https://ricardosite.imfast.io/music/Declaracion%20de%20Odio%20Ricardo%20AVILA_1.MP3',
  },
  {
    id: 4,
    title: (
      <div className='song5'>
        <h3>Statisch</h3>
        <br />
        <h4>Electroacustique pure</h4>
        <br />
        <h5>2019</h5>
      </div>
    ),
    url: 'https://ricardosite.imfast.io/music/Statisch.mp3',
  },
  {
    id: 5,
    title: (
      <div className='song6'>
        <h3>Altl'z</h3>
        <br />
        <h4>Pour Flutes Prehispaniques et Electronique en temps reel</h4>
        <br />
        <h5>2019</h5>
      </div>
    ),
    url: 'https://ricardosite.imfast.io/music/Altz%20Ricardo%20Avila.mp3',
  },
];

function Compos() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <Container className='container1'>
      <h2 className='titulo-compos'>Composiciones</h2>
      <Container className='container2'>
        <Waveform className='card1' url={selectedTrack.url} />
      </Container>

      <Container>
        <PlayList
          tracks={tracks}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
      </Container>
    </Container>
  );
}

export default Compos;
