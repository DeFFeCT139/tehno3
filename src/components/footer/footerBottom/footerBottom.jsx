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
                                    <div className="footer-bottom-content-left-desc-item-text">+7(999) 999 99-99</div>
                                </div>
                                <div className="footer-bottom-content-left-desc-item">
                                    <div className="footer-bottom-content-left-desc-item-img">
                                        <img src={map} alt="" className="footer-bottom-content-left-desc-item-image" />
                                    </div>
                                    <div className="footer-bottom-content-left-desc-item-text">г. Москва, Хлебозаводский пр-д, 7, стр. 10</div>
                                </div>
                                <div className="footer-bottom-content-left-desc-item">
                                    <div className="footer-bottom-content-left-desc-item-img">
                                        <img src={tg} alt="" className="footer-bottom-content-left-desc-item-image" />
                                    </div>
                                    <div className="footer-bottom-content-left-desc-item-text">@Cokol999</div>
                                </div>
                                <div className="footer-bottom-content-left-desc-item">
                                    <div className="footer-bottom-content-left-desc-item-img">
                                        <img src={mail} alt="" className="footer-bottom-content-left-desc-item-image" />
                                    </div>
                                    <div className="footer-bottom-content-left-desc-item-text">mail@rambler.ru</div>
                                </div>
                            </div>
                            <div className="footer-bottom-content-left-links">
                                <a href="" className="footer-bottom-content-left-link">
                                    <img src={vk} alt="" className="footer-bottom-content-left-link-image" />
                                </a>
                                <a href="" className="footer-bottom-content-left-link">
                                    <img src={tg2} alt="" className="footer-bottom-content-left-link-image" />
                                </a>
                                <a href="" className="footer-bottom-content-left-link">
                                    <img src={mail2} alt="" className="footer-bottom-content-left-link-image" />
                                </a>
                            </div>
                        </div>
                        <div className="footer-bottom-content-right">
                            <img src={mapCart} alt="" className='map'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default FooterBottom;