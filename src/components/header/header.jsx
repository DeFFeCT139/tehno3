import logo from '../../image/svg/logo.svg'
import ButtonW from '../UI UX/button/buttonW';
import img from '../../image/png,jpg/statistik.png'

function Header() {
    return (
      <div className="header">
        <div className="header-conteiner">
            <div className="header-inner">
                <div className="header-top">
                    <div className="header-top-logo">
                        <img src={logo} alt="" className="header-top-logo-img" />
                    </div>
                    <div className="header-top-links">
                        <a href="/" className="header-top-link">Услуги</a>
                        <a href="/" className="header-top-link">Команда</a>
                        <a href="/" className="header-top-link">Консультация</a>
                        <a href="/" className="header-top-link">Отзывы</a>
                        <a href="/" className="header-top-link">+7(999) 999 99-99</a>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-content">
                        <div className="header-bottom-content-left">
                            <div className="header-bootom-content-left-desc">Разработка продукта с полного 0</div>
                            <div className="header-bootom-content-left-title">МТК ТехноСофт</div>
                            <div className="header-bootom-content-left-desc">Проффесиональные услуги в области IT любой сложности</div>
                            <div className="header-bootom-content-left-btn">
                                <ButtonW text={'Оставить заявку'}/>
                            </div>
                        </div>
                        <div className="header-bottom-content-right">
                            <img src={img} alt="" className="header-bottom-content-right-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;