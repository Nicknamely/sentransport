import './App.css'
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    < div className="App">
      < Header />
      < main className=" contenu ">
        <p > Bienvenue ! Cette application vous aide a trouver
          votre ligne de bus a Dakar . </p >
      </ main >
      <Footer />
    </ div >
  );
}
export default App;
