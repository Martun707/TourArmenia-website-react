import Feature from "./feature/Feature";
import Holiday from "./holiday/Holiday";
import Tour from "./tour/Tour";
import Culture from "./culture/Culture";
import Newsletter from "./newsletter/Newsletter";
import Carusel from "./home/Carusel";

function Home(){
    return(
        <>
            <Carusel />
            <Feature />
            <Holiday />
            <Tour />
            <Culture />
            <Newsletter />
        </>
    )
}
export default Home