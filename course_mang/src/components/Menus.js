import react from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () =>{
    return (
        
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/booking_servicing" action>add course</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact Us</Link>
            </ListGroup>
        
    )
}

export default Menus;