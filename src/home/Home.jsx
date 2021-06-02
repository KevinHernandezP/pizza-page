import '../home/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from "./img/3.png";
import { Button } from 'bootstrap';
import chees from "./img/queso.png";
import imagendos from "./img/folleto.jpg";
import tres from "./img/3.png";
import Cards from '../cards/Cards';
import { Search, Cart, Bag } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBag, faPlus } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <div className="">

      <div className="container  ">
        <div className="row"  >
          <div className=" col-md-6  py-3">
            <img src={imagen} className="imagen"></img>

          </div>
          <div className="col-md-6 info text-left m-auto ">
            <h1 className="font-weight-bold py-1">PIZZA HARD</h1>
            <h3 className="pizza py-3">PEPPERONI,CHEES</h3>
            <p>This is kiwifruit: originally called “yang tao”, “melonette” or Chinese
            gooseberry. Cultivated in its fuzzy variety from Chinese imports, the fruit proved popular
                 </p>
            <div className="iteams py-2">
              <a class="btn btn-danger btn-custom" href="#" role="button">Order<FontAwesomeIcon icon={faShoppingBag} className="ml-2 iconoos"></FontAwesomeIcon></a>
              <h3 className="font-weight-bold precio">$10.99</h3>
            </div>
          </div>



        </div>

      </div>


      <section>

        <Cards></Cards>


      </section>



    </div>
  );
}

export default Home;
