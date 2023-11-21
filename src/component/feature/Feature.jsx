import nap1 from "../../img/nap1.png";
import nap2 from "../../img/nap2.jpg";
import nap3 from "../../img/nap3.jpg";
import nap4 from "../../img/nap4.jpg";

function Feature(){
    return(
        <>
            <section className="feature">
                <div className="feature_content">
                    <div className="row">
                        <div className="row_img">
                            <img src={nap1} />
                        </div>
                        <h4>Արկածային</h4>
                    </div>

                    <div className="row">
                        <div className="row_img">
                            <img src={nap2} />
                        </div>
                        <h4>Թեժ տուրեր</h4>
                    </div>

                    <div className="row">
                        <div className="row_img">
                            <img src={nap3} />
                        </div>
                        <h4>Կռուիզներ</h4>
                    </div>

                    <div className="row">
                        <div className="row_img">
                            <img src={nap4} />
                        </div>
                        <h4>Լողափեր</h4>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Feature