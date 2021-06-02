import '../toolbar/toolbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Search,Cart } from 'react-bootstrap-icons';

function Toolbar() {
    return (
        <div className="">
        
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home" className="text-dark logo">PizzaHoot</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav"  >
                    <Nav className="ml-auto textonav">
                        <Nav.Link href="#features" className="text-dark " style={{ marginRight: 10 }}>Home </Nav.Link>
                        <Nav.Link href="#pricing" className="text-dark " style={{ marginRight: 10 }}>Menu</Nav.Link>
                        <Nav.Link href="#pricing" className="text-dark" style={{ marginRight: 10 }}>Blog</Nav.Link>
                        <Nav.Link href="#pricing" className="text-dark" style={{ marginRight: 10 }}>Locations</Nav.Link>
                        <Nav.Link href="#pricing" className="text-dark" style={{ marginRight: 10 }}>Contact Us</Nav.Link>
                        <Nav.Link href="#pricing" className="text-dark" style={{ marginRight: 10 }}>   <Cart color="dark" size={24} className="icono"/></Nav.Link>
                        <Nav.Link href="#pricing" className="text-dark" style={{ marginRight: 10 }}>   <Search color="dark" size={24}/></Nav.Link>


                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
}

export default Toolbar;
