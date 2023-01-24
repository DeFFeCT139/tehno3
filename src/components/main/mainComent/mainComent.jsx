import img from '../../../image/png,jpg/artworks-ezU1CEBfyjPPHebr-AuLWFA-t500x500.jpg'
import img2 from '../../../image/png,jpg/avatars-000068889999-domjd6-t500x500.jpg'
import img3 from '../../../image/png,jpg/78289844.jpg'

function MainComent() {
    return (
      <div id='reviews' className="main-coment main-block-padding">
        <div className="conteiner">
            <div className="main-inner">
                <div className="main-coment-content">
                    <div className="main-coment-content-card-items">
                        <div className="main-coment-content-card-item">
                            <div className="main-coment-content-card-item-img">
                                <img src={img} alt="" className="main-coment-content-card-item-image" />
                            </div>
                            <div className="main-coment-content-card-item-title">Петровская Вероника</div>
                            <div className="main-coment-content-card-item-desc">Я из сферы продаж, и, как и многие, сталкиваюсь с проблемой современной связи с клиентами, мне сделали телеграмм бота для записи на приемы. Всё сразу обсудили и цена порадовала. Советую.</div>
                        </div>
                        <div className="main-coment-content-card-item">
                            <div className="main-coment-content-card-item-img">
                                <img src={img2} alt="" className="main-coment-content-card-item-image" />
                            </div>
                            <div className="main-coment-content-card-item-title">Святослав Коршунов</div>
                            <div className="main-coment-content-card-item-desc">Сделали хорошего бота в телеграмм. Мне стало легче и удобнее работать. Бот работает без ошибок, со стороны пользователя тоже все выглядит симпатично.</div>
                        </div>
                        <div className="main-coment-content-card-item">
                            <div className="main-coment-content-card-item-img">
                                <img src={img3} alt="" className="main-coment-content-card-item-image" />
                            </div>
                            <div className="main-coment-content-card-item-title">Игорь Андреев</div>
                            <div className="main-coment-content-card-item-desc">Нашел эту компанию, оставил заявку и со мной связались. Нужен был сайт, но идей не было, предложили несколько вариантов. Сайт получился хороший, но ставлю 4 звезды, потому что связывались со мной долго</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainComent;