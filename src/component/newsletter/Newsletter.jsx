function Newsletter(){
    return(
        <>
            <section className="newsletter">
                <div className="newsletter_content">
                    <div className="newsletter_text">
                        <h3>Գրանցվե՛ք և ստացե՛ք առաջարկներ</h3>
                        <br/>
                        <p>Եղե՛ք տեղեկացված ակցիաներից և նորություններից </p>
                    </div>

                    <form action="">
                        <input type="email" placeholder="Enter your email..." required/>
                        <input type="submit" value="ԲԱԺԱՆՈՐԴԱԳՐՎԵԼ " className="btn"/>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Newsletter