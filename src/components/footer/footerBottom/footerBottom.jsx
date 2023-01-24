import phone from '../../../image/svg/Icon phone.svg'
import mail from '../../../image/svg/Icon mail.svg'
import mail2 from '../../../image/svg/Icon Email.svg'
import tg from '../../../image/svg/Icon tg (1).svg'
import tg2 from '../../../image/svg/Icon Tg.svg'
import map from '../../../image/svg/Icon location.svg'
import vk from '../../../image/svg/Icon VK.svg'
import mapCart from '../../../image/png,jpg/image 6.png'



function FooterBottom() {
    return (
        <div className="footer-bottom">
            <div className="conteiner">
                <div className="main-inner">
                    <div className="footer-bottom-content">
                        <div className="footer-bottom-content-left">
                            <div className="footer-bottom-content-left-title">Контакты</div>
                            <div className="footer-bottom-content-left-desc">
                                <div className="footer-bottom-content-left-desc-item">
                                    <div className="footer-bottom-content-left-desc-item-img">
                                        <img src={phone} alt="" className="footer-bottom-content-left-desc-item-image" />
                                    </div>
                                    <div className="footer-bottom-content-left-desc-item-text">+7 (964) 634 55-53</div>
                                </div>
                                <div className="footer-bottom-content-left-desc-item">
                                    <div className="footer-bottom-content-left-desc-item-img">
                                        <img src={map} alt="" className="footer-bottom-content-left-desc-item-image" />
                                    </div>
                                    <div className="footer-bottom-content-left-desc-item-text">г. Москва,  ПР-КТ МИРА, Д. 102, К. 1, ПОМЕЩ. 3/7, ОФИС 59</div>
                                </div>
                                <div className="footer-bottom-content-left-desc-item">
                                    <div className="footer-bottom-content-left-desc-item-img">
                                        <img src={tg} alt="" className="footer-bottom-content-left-desc-item-image" />
                                    </div>
                                    <div className="footer-bottom-content-left-desc-item-text">@tehnosoft</div>
                                </div>
                                <div className="footer-bottom-content-left-desc-item">
                                    <div className="footer-bottom-content-left-desc-item-img">
                                        <img src={mail} alt="" className="footer-bottom-content-left-desc-item-image" />
                                    </div>
                                    <div className="footer-bottom-content-left-desc-item-text">GLEB.KAK2@YANDEX.RU</div>
                                </div>
                            </div>
                            <div className="footer-bottom-content-left-links">
                                <a href="https://vk.com/tecnosoft" className="footer-bottom-content-left-link">
                                    <img src={vk} alt="" className="footer-bottom-content-left-link-image" />
                                </a>
                                <a href="https://t.me/+rMczAlcjpahhZGM6" className="footer-bottom-content-left-link">
                                    <img src={tg2} alt="" className="footer-bottom-content-left-link-image" />
                                </a>
                            </div>
                        </div>
                        <div className="footer-bottom-content-right">
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeacd56e09fb649d7011c60bd7e97d8c07e0b20bd9399da3aaec3820d2330c50d&amp;source=constructor" width="522" height="392" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default FooterBottom;