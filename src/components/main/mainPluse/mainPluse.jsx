import img1 from '../../../image/svg/Icon.svg'
import img2 from '../../../image/svg/Icon (1).svg'
import img3 from '../../../image/svg/Icon (2).svg'
import img4 from '../../../image/svg/Icon (3).svg'

function MainPluse() {
    return (
      <div className="main-pluse main-block-padding">
        <div className="conteiner">
            <div className="main-inner">
                <div className="main-pluse-card-items">
                    <div className="main-pluse-card-item">
                        <div className="main-pluse-card-item-img">
                            <img src={img1} alt="" className="main-pluse-card-image" />
                        </div>
                        <div className="main-pluse-card-item-title">ВЫГОДНО</div>
                        <div className="main-pluse-card-item-desc">Найдем самое выгодное решение</div>
                    </div>
                    <div className="main-pluse-card-item">
                        <div className="main-pluse-card-item-img">
                            <img src={img2} alt="" className="main-pluse-card-image" />
                        </div>
                        <div className="main-pluse-card-item-title">В СРОК</div>
                        <div className="main-pluse-card-item-desc">Выполнение всего плана работ в оговоренные сроки</div>
                    </div>
                    <div className="main-pluse-card-item">
                        <div className="main-pluse-card-item-img">
                            <img src={img3} alt="" className="main-pluse-card-image" />
                        </div>
                        <div className="main-pluse-card-item-title">ГАРАНТИЯ</div>
                        <div className="main-pluse-card-item-desc">Предоставление гарантии на весь спектр услуг</div>
                    </div>
                    <div className="main-pluse-card-item">
                        <div className="main-pluse-card-item-img">
                            <img src={img4} alt="" className="main-pluse-card-image" />
                        </div>
                        <div className="main-pluse-card-item-title">КАЧЕСТВЕННО</div>
                        <div className="main-pluse-card-item-desc">Мы нанимаем только квалифицированных специалистов</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainPluse;