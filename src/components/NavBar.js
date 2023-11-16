import { Link, NavLink } from "react-router-dom";
export default function NavBar(){


    return(
        <>
            {/* <a href="/home">Home</a> | <a href="/contact">Contact Us</a> */}
            {/* <Link to="/home">Home</Link> | 

            <Link to="/contact">Contact us</Link> */}

            <NavLink to="/home">Home</NavLink> | 

            <NavLink to="/contact">Contact us</NavLink> |
            <NavLink to="/countries">Countries</NavLink> 


        </>
    );
}