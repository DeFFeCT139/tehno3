import logo from '../../../image/svg/logo.svg'
import menu from '../../../image/svg/Property 1=ative menu.svg'
import ButtonW from '../../UI UX/button/buttonW';

function TopMenu() {
    const closeMenu = () => document.getElementById('topMenu').classList.remove('menu-active')

    return (
      <div id='topMenu'  className="top-menu">
        <div className="top-menu-conteiner">
          <div className="top-menu-header">
            <div className="top-menu-header-logo">
                <img src={logo} alt="" className="header-top-logo-img" />
            </div>
            <div className="top-menu-header-btn">
                <img onClick={closeMenu} src={menu} alt="" className="header-top-logo-img" />
            </div>
          </div>
          <div className="top-menu-inner">
            <div className="top-menu-inner-links">
              <a href="/" className="top-menu-inner-link">Услуги</a>
              <a href="/" className="top-menu-inner-link">Команда</a>
              <a href="/" className="top-menu-inner-link">Консультация</a>
              <a href="/" className="top-menu-inner-link">Отзывы</a>
              <a href="/" className="top-menu-inner-link">+7(999) 999 99-99</a>
            </div>
            <div className="top-menu-inner-btn">
                <ButtonW text={'Оставить заявку'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TopMenu;