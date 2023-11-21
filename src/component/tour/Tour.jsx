import t1 from "../../img/t1.jpg";
import t2 from "../../img/t2.jpg";
import t3 from "../../img/t3.jpg";

function Tour(){
    return(
        <>
            <section className="tour">
                <div className="center_text">
                    <h2>Հանրաճանաչ շրջագայություններ</h2>
                </div>

                <div className="tour_content">
                    <div className="box">
                        <img src={t1} />
                        <h6>$900</h6>
                        <h4>ԴՈՒԲԱՅ</h4>
                    </div>

                    <div className="box">
                        <img src={t2} />
                        <h6>1200$</h6>
                        <h4>Վիետնամ</h4>
                    </div>

                    <div className="box">
                        <img src={t3} />
                        <h6>900$</h6>
                        <h4>Մալդիվներ</h4>
                    </div>
                </div>

                <div className="center_btn">
                    <a href="#" className="btn">Տեսնել բոլորը</a>
                </div>
            </section>
        </>
    )
}
export default Tour