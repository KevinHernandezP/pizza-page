import "./MenuThree.css";
import imagen from "./components/3.png"
import imagentres from "./components/13.png"
import imagencuatro from "./components/12.png"
import { Search, Cart, Bag, Plus } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBag, faPlus } from '@fortawesome/free-solid-svg-icons';
<i class="fas fa-shopping-bag"></i>
function MenuThree() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 text-center m-auto">
                        <h3 className="text-danger ">Trending</h3>
                        <h2 className="fw-bold">Our Customers' Top Picks</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>

                    </div>



                </div>
            </div>
            <div className="container m-auto">
                <div className="row ">


                    <div className="card card-custom m-auto">
                        <img src={imagen}></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="cartexd-t">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body row m-auto ">
                            <a className="btn btn-danger btn-customs">Order<FontAwesomeIcon icon={faShoppingBag} className="ml-3 iconoos"></FontAwesomeIcon></a>
                            <a className="btn btn-warning btn-customs text-white">Custom<FontAwesomeIcon icon={faPlus} className="ml-3 iconoos"></FontAwesomeIcon></a>

                        </div>


                    </div>
                    <div className="card card-custom m-auto">
                        <img src={imagentres}></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="cartexd-t">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body row m-auto">
                            <a className="btn btn-danger btn-customs">Order<FontAwesomeIcon icon={faShoppingBag} className="ml-3 iconoos"></FontAwesomeIcon></a>
                            <a className="btn btn-warning btn-customs text-white">Custom<FontAwesomeIcon icon={faPlus} className="ml-3 iconoos"></FontAwesomeIcon></a>

                        </div>

                    </div>
                    <div className="card card-custom  m-auto">
                        <img src={imagencuatro}></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="cartexd-t">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body row m-auto">
                            <a className="btn btn-danger btn-customs">Order<FontAwesomeIcon icon={faShoppingBag} className="ml-3 iconoos"></FontAwesomeIcon></a>
                            <a className="btn btn-warning btn-customs text-white">Custom<FontAwesomeIcon icon={faPlus} className="ml-3 iconoos"></FontAwesomeIcon></a>

                        </div>

                    </div>

                </div>

            </div>



        </div>

    );
}

export default MenuThree;