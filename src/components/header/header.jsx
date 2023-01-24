import logo from '../../image/svg/logo.svg'
import ButtonW from '../UI UX/button/buttonW';
import img from '../../image/png,jpg/statistik.png'
import menu from '../../image/svg/Property 1=normal menu.svg'

function Header() {
    const openMenu = () => document.getElementById('topMenu').classList.add('menu-active')
    
    return (
      <div className="header">
        <div className="header-conteiner">
            <div className="header-inner">
                <div className="header-top">
                    <a href='/' className="header-top-logo">
                        <img src={logo} alt="" className="header-top-logo-img" />
                    </a>
                    <div className="header-top-links">
                        <a href="#services" className="header-top-link">Услуги</a>
                        <a href="#team" className="header-top-link">Команда</a>
                        <a href="#kons" className="header-top-link">Консультация</a>
                        <a href="#reviews" className="header-top-link">Отзывы</a>
                        <a href="" className="header-top-link">+7 (964) 634 55-53</a>
                        <div className="header-top-link-podl"></div>
                        <div className="header-top-btn-menu-btn">
                            <img onClick={openMenu} src={menu} alt="" className="header-top-menu-img" />
                        </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;