import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './toolbar/Toolbar';
import Home from './home/Home';
import Cards from "./cards/Cards";
import Menu from './menuOne/Menu';
import MenuTwo from './menuTwo/MenuTwo';
import MenuThree from './menuThree/MenuThree';
import Footer from './footer/Footer';
function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <Home></Home>
      <Menu></Menu>
      <MenuTwo></MenuTwo>
      <MenuThree></MenuThree>
      <Footer></Footer>
   
    </div>
  );
}

export default App;
