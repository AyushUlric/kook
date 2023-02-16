import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src="./logo.jpg" width={80} alt=""/>
            <h1 className="font-bold text-xl"> Kook Sportswear</h1>
            <div className="links mr-[4rem] font-semibold">
                <Link to="/">Home</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;