import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import {Link} from "react-router-dom";


function NavBar(){
    return(
        <>
            <header>
                <a href="#" className="logo">Tour<span>Armenia</span></a>
                <ul className="navbar">
                    <li>
                        <Link to={"/"}>ԳԼԽԱՎՈՐ</Link>
                    </li>
                    <li>
                        <Link to={"/travel"}>ՏՈՒՐԵՐ</Link>
                    </li>
                    <li>
                        <Link to={"/myinfo"}>ՄԵՐ ՄԱՍԻՆ</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>ԿԱՊ</Link>
                    </li>
                </ul>
                <div className="h_right">

                    <a href="#"><InstagramIcon /></a>
                    <a href="#"><TwitterIcon /></a>
                    <a href="#"><FacebookIcon /></a>
                    <div className="bx bx_menu"></div>

                </div>
            </header>

        </>
    )
}
export default NavBar