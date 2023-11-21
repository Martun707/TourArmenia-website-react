import about from "../../img/about.jpg";
import d1 from "../../img/1.jpg"
import d2 from "../../img/2.jpg"
import d3 from "../../img/3.jpg"
import d4 from "../../img/4.jpg"
import d5 from "../../img/5.jpg"
import d6 from "../../img/6.jpg"


function Myinfo(){
    return(
        <>
            <div className="myinfocolor">Travel</div>
            <br/>
            <br/>
            <br/>
            <br/>

            <section className="holiday">
                <div className="holiday_img">
                    <img src={about}/>
                </div>

                <div className="holiday_text">
                    <h5>ՄԵՐ ՄԱՍԻՆ</h5>
                    <h2>TourArmenia</h2>
                    <p>TourArmenia տուրիստական ընկերությունը հիմադրվել է 2023 թվականին:
                        Ընկերության հիմադիր տնօրենն է Լիանա Սահակյանը: Ընկերությունը մասնագիտացած է արտագնա տուրիզմի ոլորտում:
                        Մեզ մոտ կարող եք գտնել ձեզ հարմար ցանկացած ճանապարհորդություն: Մեր հիմնական և առաջնային նպատակն է`
                        մեր հաճախորդների համար կազմակերպել բարձրակարգ և ապահով հանգիստ։ Ընկերության 1 տարվա փորձի և
                        ոլորտի առաջատարներից մեկը լինելու հանգամանքը մեզ ավելի է պարտավորեցնում լինել ավելի հետևողական
                        հաճախորդի նկատմամբ
                    </p>
                    <a href="#" className="btn">ՄԱՆՐԱՄԱՍՆ</a>
                </div>
            </section>

            <section className="tour">
                <div className="center_text">
                    <h2>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</h2>
                </div>

                <div className="tour_content">
                    <div className="box">
                        <img src={d1} />
                        <h4>ՎԻԶԱՆԵՐԻ ԱՋԱԿՑՈՒՄ</h4>
                    </div>

                    <div className="box">
                        <img src={d4} />
                        <h4>ԿԱԶՄԱԿԵՐՊՈՒՄ ԵՆՔ ՉԿՐԿՆՎՈՂ ԵՒ ԱՄԵՆԱՄԱՏՉԵԼԻ ՏՈՒՐ ՓԱԹԵԹՆԵՐ</h4>
                    </div>

                    <div className="box">
                        <img src={d2} />
                        <h4>ՀԱՐՍԱՆԻՔՆԵՐԻ ԿԱԶՄԱԿԵՐՊՈՒՄ</h4>
                    </div>
                    <div className="box">
                        <img src={d3} />
                        <h4>ԱՎԻԱՏՈՄՍԵՐ ԲՈԼՈՐ ՈՒՂՂՈՒԹՅՈՒՆՆԵՐՈՎ</h4>
                    </div>
                    <div className="box">
                        <img src={d5} />
                        <h4>ԱՍԻԱԿԱՆ ԵՐԿՆԵՐՈՒՄ ԱՊԱՀՈՎ ՇՐՋԱԳԱՅՈՒԹՅՈՒՆ</h4>
                    </div>
                    <div className="box">
                        <img src={d6} />
                        <h4>ԳՐԵԹԵ ԲՈԼՈՐ ԷԿԶՈՏԻԿ ԵՐԿՐՆԵՐՈՒՄ ՀՅՈՒՐԱՆՈՑՆԵՐԻ ԱՄՐԱԳՐՈՒՄ</h4>
                    </div>
                </div>


            </section>
        </>
    )
}
export default Myinfo