import "./Menu.css";
import imagen from "./components/foto.jpg";
import { Search,Cart } from 'react-bootstrap-icons';


function Menu() {
    return (
        <div>

            <div className="container  ">
            <div className="row"  >
                <div className=" col-md-6 float-left py-3">
                <img src={imagen} className="imagenss"></img>

                </div>
                <div className="col-md-6 info text-left m-auto ">
                <h5 className="text-danger">Sir Slice's Heritage</h5>
                <h2 className="tittle">Serving Pizzas By The Slice Since 1987</h2>
                            <p className="subtittle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                 <div className="iteams py-2">
                 <a class="btn btn-danger btn-custom" href="#" role="button">Check Our Menu</a>
                 </div>
                </div>
             
                

            </div>

        </div>
            

        </div>

    );
}

export default Menu;