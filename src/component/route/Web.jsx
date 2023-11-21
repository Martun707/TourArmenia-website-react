import {Route, Routes} from "react-router-dom";
import Home from "../index";
import Travel from "../paje/Travel";
import Myinfo from "../paje/Myinfo";
import Contact from "../paje/Contact";

export default function  WebRouter(){
    return(
        <>
            <Routes path="/">
                <Route path="/" element={<Home />}/>
                <Route path="/travel" element={<Travel />}/>
                <Route path="/myinfo" element={<Myinfo />}/>
                <Route path="/contact" element={<Contact />}/>

            </Routes>
        </>
    )
}