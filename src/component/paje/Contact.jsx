
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
function Contact(){
    return(
        <>
            <div className="contactcolor">Travel</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <section className="contact">
                    <div className="content">
                        <h2>ԿԱՊ ՄԵԶ ՀԵՏ</h2>
                        <p>Հարցերի կամ առաջարկների դեպքում կարող եք զանգահարել կամ գրել մեզ:
                            Մեր մասնագետները սիրով կպատասխանեն Ձեր հարցերին:</p>
                    </div>
                    <div className="container">
                        <div className="contactInfo">
                            <div className="box">
                                <div className="icon"><LocationOnOutlinedIcon /></div>
                                <div className="text">
                                    <h3>ՀԱՍՑԵ</h3>
                                    <p>Armenia</p>
                                </div>
                            </div>

                            <div className="box">
                                <div className="icon"><PhoneIcon /></div>
                                <div className="text">
                                    <h3>ՀԵՌԱԽՈՍԱՀԱՄԱՐ</h3>
                                    <p>+(374)-77-17-47-92</p>
                                </div>
                            </div>

                            <div className="box">
                                <div className="icon"><EmailIcon /></div>
                                <div className="text">
                                    <h3>ԳՐԵՔ ՄԵԶ</h3>
                                    <p>rafayelyan777@mail.ru</p>
                                </div>
                            </div>
                        </div>
                        <div className="contactForm">
                            <form>
                                <h2>Send Message</h2>
                                <div className="inputBox">
                                    <input type="text" name="" required="required"/>
                                    <span>Անուն</span>
                                </div>
                                <div className="inputBox">
                                    <input type="text" name="" required="required"/>
                                    <span>E-mail</span>
                                </div>

                                <div className="inputBox">
                                    <textarea required="required"></textarea>
                                    <span>Ուղարկել հաղորդագրություն...</span>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" name="" value="Send "/>
                                </div>
                            </form>
                        </div>
                    </div>


            </section>
        </>
    )
}
export default Contact