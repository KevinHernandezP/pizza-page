import "../cards/Cards.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import tres from "./img/3.png";
import dos from "./img/2.png";
import cinco from "./img/5.png";
import { Search, Cart, Bag } from 'react-bootstrap-icons';

function Cards() {
    return (
        <div className="">

            <section>
                <div className="container ">
                    <div className="row m-5 justify-content-center ">

                        <div className="col-md-3 contenido m-2">
                            <img src={tres} className="ima"></img>
                            <h3 className="text-white font-weight-bold">Vegariana</h3>
                            <span className="text-white">9.99$</span>

                        </div>
                        <div className="col-md-3 contenido m-2">
                            <img src={cinco} className="ima"></img>
                            <h3 className="text-white font-weight-bold">Hawai</h3>
                            <span className="text-white">8.99$</span>

                        </div>
                        <div className="col-md-3 contenido m-2">
                            <img src={dos} className="ima"></img>
                            <h3 className="text-white font-weight-bold">Mexicana</h3>
                            <span className="text-white">8.99$</span>

                        </div>


                    </div>

                </div>
            </section>

        </div>
    );
}

export default Cards;