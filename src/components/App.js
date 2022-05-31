//import logo from '../shared/images/logo.svg';
//import Timer from './Timer/Timer';
//import Coin from './Coins/Coin';
//import Crypto from './Crypto/Crypto';
//import Charthome from './Chart/Charthome';
import './App.css';
//import Animation from './Animating/Animation';
//import Numbers from './PureComponets/Numbers';
//import Calculator from './Calculator/Calculator';
import Registro from './registro/registro';
import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';

function App() {
  return (
    <div className="App">
      <Header title="Registro" url="https://www.youtube.com/watch?v=H6LLfczz8hM"/>
        <Content>
          <Registro/>
        </Content>
      <Footer />
    </div>
  );
}

export default App;
