import './App.css';
import Bio from './components/Bio';
import Compos from './components/Compos';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';




const brand = { name: "RA", to: "/" };

export default function App() {
 

  return (
    <div className="App">
        <Navbar brand={brand}></Navbar>


          <Hero></Hero>
          <section id='compost'>
          <Compos></Compos>
</section>
          <section id='bio'>
          <Bio></Bio>

</section>
          <section id='contacto'>
          <Footer></Footer>
</section>
          
         
     
  
   
    </div>
  );
}
