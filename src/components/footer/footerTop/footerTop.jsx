import ButtonW from "../../UI UX/button/buttonW";

function FooterTop() {
    return (
        <div className="footer-top">
            <div className="conteiner">
                <div className="main-inner">
                    <div className="footer-top-content">
                        <div className="footer-top-title">Все еще думаете? <br/>Попробуйте.</div>
                        <div className="footer-top-btn">
                            <ButtonW text={'Оставить заявку'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default FooterTop;