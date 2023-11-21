import h1 from "../../img/h1.jpg";

function Holiday(){
    return(
        <>
            <section className="holiday">
                <div className="holiday_img">
                    <img src={h1}/>
                </div>

                <div className="holiday_text">
                    <h5>ՀԱՏՈՒԿ ԱՌԱՋԱՐԿՆԵՐ</h5>
                    <h2>ԱՐՏԱԳՆԱ ՏՈՒՐԵՐ ԱՄԲՈՂՋ ԱՇԽԱՐՀՈՎ</h2>
                    <p>Չգիտե՞ք ուր գնալ: Գտեք ձեր հաջորդ ուղևորության լավագույն տուրերը մեր հատուկ առաջարկների ցանկում:
                        Օգտվե՛ք Fun Travel-ի զարմանալի հատուկ առաջարկներից: Հաճախ զննեք ընկերության այս եզակի առաջարկները,
                        որպեսզի բաց չթողնեք ձեր սիրելի շրջագայությունը:
                    </p>
                    <a href="#" className="btn">ՄԱՆՐԱՄԱՍՆ</a>
                </div>
            </section>
        </>
    )
}
export default Holiday