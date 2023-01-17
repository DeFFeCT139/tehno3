import img1 from '../../../image/svg/Icon (4).svg'
import img2 from '../../../image/svg/Icon (5).svg'
import img3 from '../../../image/svg/Icon (6).svg'
import img4 from '../../../image/svg/Icon (7).svg'
import img5 from '../../../image/svg/Icon (8).svg'
import img6 from '../../../image/svg/Icon (9).svg'
import ButtonBlack from '../../UI UX/button/buttonBlak'

function MainSkills() {
    return (
      <div className="main-skills main-block-padding">
        <div className="conteiner">
            <div className="main-inner">
                <div className="main-skills-content">
                    <div className="main-skills-content-title">Услуги</div>
                    <div className="main-skills-content-desc">Имея большой опыт, мы предоставляем широкий спектр услуг от малых и средних бизнесов до крупных предприятий</div>
                    <div className="main-skills-content-card-items">
                        <div className="main-skills-content-card-item">
                            <div className="main-skills-content-card-item-img">
                                <img src={img1} alt="" className="main-skills-content-card-item-image" />
                            </div>
                            <div className="main-skills-content-card-item-title">Аналатика данных</div>
                            <div className="main-skills-content-card-item-desc"> Решения с применением алгоритмов ML</div>
                        </div>
                        <div className="main-skills-content-card-item">
                            <div className="main-skills-content-card-item-img">
                                <img src={img2} alt="" className="main-skills-content-card-item-image" />
                            </div>
                            <div className="main-skills-content-card-item-title">Стандарты</div>
                            <div className="main-skills-content-card-item-desc"> Золотой, серебряный и бронзовый стандарты</div>
                        </div>
                        <div className="main-skills-content-card-item">
                            <div className="main-skills-content-card-item-img">
                                <img src={img3} alt="" className="main-skills-content-card-item-image" />
                            </div>
                            <div className="main-skills-content-card-item-title">Парсинг</div>
                            <div className="main-skills-content-card-item-desc"> Парсинг данных любой сложноси</div>
                        </div>
                        <div className="main-skills-content-card-item">
                            <div className="main-skills-content-card-item-img">
                                <img src={img4} alt="" className="main-skills-content-card-item-image" />
                            </div>
                            <div className="main-skills-content-card-item-title">Боты</div>
                            <div className="main-skills-content-card-item-desc"> Разработка и создание ботов для любой платформы</div>
                        </div>
                        <div className="main-skills-content-card-item">
                            <div className="main-skills-content-card-item-img">
                                <img src={img5} alt="" className="main-skills-content-card-item-image" />
                            </div>
                            <div className="main-skills-content-card-item-title">Cайты</div>
                            <div className="main-skills-content-card-item-desc">Разработка сайтов любой сложности</div>
                        </div>
                        <div className="main-skills-content-card-item">
                            <div className="main-skills-content-card-item-img">
                                <img src={img6} alt="" className="main-skills-content-card-item-image" />
                            </div>
                            <div className="main-skills-content-card-item-title">Поддержка продуктов</div>
                            <div className="main-skills-content-card-item-desc">Техническая и консультативная поддержка любых ПО</div>
                        </div>
                    </div>
                    <div className="main-skills-content-btn">
                        <ButtonBlack color={'black'} text={'Все услуги'}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainSkills;