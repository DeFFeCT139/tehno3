import ButtonBlack from "../../UI UX/button/buttonBlak";
import img from '../../../image/svg/image-PhotoRoom 1.svg'

function MainKons() {
    return (
      <div id="kons" className="main-kons main-block-padding">
        <div className="conteiner">
            <div className="main-inner">
                <div className="main-kons-text">
                    <div className="main-kons-content-left-title id-block">Бесплатная<br/> консультация</div>
                </div>
                <div className="main-kons-content"> 
                    <div className="main-kons-content-left">
                        <div className="main-kons-content-left-title id-none">Бесплатная консультация</div>
                        <div className="main-kons-content-left-desc">Если у вас разбегаются глаза и вы не можете определиться, то мы поможем вам подобрать услугу и сориентировать по цене</div>
                        <div className="main-kons-content-left-btn id-none"> 
                            <ButtonBlack text={'Записаться на консультацию'}/>
                        </div>
                    </div>
                    <div className="main-kons-content-right">
                        <img src={img} alt="" className="main-kons-content-right-image" />
                    </div>
                </div>
                <div className="main-kons-btn id-block">
                    <div className="main-kons-content-left-btn"> 
                        <ButtonBlack text={'Записаться на консультацию'}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainKons;