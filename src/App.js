import './App.css';
import Test from './components/Test';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import Weather from './components/Weather';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" >
      <Header />
      <Weather />
      <Footer />
    </div>

  );
}

export default App;
