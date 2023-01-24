import { Swiper, SwiperSlide } from 'swiper/react';
import {Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { useState } from 'react';
import { useEffect } from 'react';

function MainTeam() {
    let raezmer = 3
    const [raz, setRaz] = useState(raezmer)
    useEffect(()=>{
        setRaz(raezmer = document.getElementById('swoper').offsetWidth/ 340)
    })
    return (
      <div id='team' className="main-team main-block-padding">
        <div className="conteiner">
            <div className="main-inner">
                <div className="main-team-content">
                    <div className="main-team-content-title">Команда</div>
                    <Swiper
                    id='swoper'
                    modules={[Mousewheel]}
                    mousewheel
                    spaceBetween={5}
                    slidesPerView={raz}
                    >
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture one">
                                    
                                </div>
                                <p className="name-client"> Глеб Чепрасов
                                    <span>Генеральный директор
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture two">
                                    
                                </div>
                                <p className="name-client"> Анастасия Чепрасова
                                    <span>Директор по Документации и Информационной безопасности
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture free">
                                    
                                </div>
                                <p className="name-client"> Евгений Устинов
                                    <span>Директор отдела разработки WEB решений 
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture for">
                                
                                </div>
                                <p className="name-client"> Николай Кондратенко
                                    <span>Технический Директор
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture five">
                                
                                </div>
                                <p className="name-client">Андрей Волков
                                    <span>Директор отдела разработки Технических и Образовательных решений
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainTeam;