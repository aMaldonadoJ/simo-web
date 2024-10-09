import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import StudyCard from './StudyCard';
import 'swiper/css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const StudyCarousel = ({ }) => {

    const studies = [
        { date: "Febrero 19", title:"Resumen ejecutivo: Visión de Futuro para el sector agroalimentario y forestal", image:"./src/assets/cnaVisionFuturoPortada.jpg" },
        { date: "Febrero 15", title:"Encuesta | Sheinbaum aventaja 35 puntos a Gálvez rumbo al arranque de campañas", image:"./src/assets/claudiaSheinbaumPortada.jpg" },
        { date: "Noviembre 2023", title:"Índice Global de Impunidad Ambiental Latinoamérica", image:"./src/assets/igiAmbientalPortada.png" },
        { date: "Octubre 2021", title:"La vía rápida hacia nuevas competencias", image:"./src/assets/estudiantesPortada.jpg" },
        { date: "Julio 2021", title:"Portafolio: Medio Ambiente y energía Simo", image:"./src/assets/energiaPortada.jpg" },
        { date: "Mayo 2021", title:"Encuesta de opinión pública en Mérida, Yucatán", image:"./src/assets/meridaPortada.jpg" },
      ];

  const handleMouseEnter = (swiper) => {
    swiper.autoplay.stop();
  };

  const handleMouseLeave = (swiper) => {
    swiper.autoplay.start();
  };

  return (
    <div className="container w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        spaceBetween={40} // Aumentar el espacio entre slides
        slidesPerView={4} // Mostrar 1 slide por vista (ajustable en breakpoints)
        centeredSlides={false}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,          // Rotación leve para efecto 3D
          stretch: 0,        // Estiramiento negativo para separar más las tarjetas
          depth: 0,          // Profundidad del efecto 3D
          modifier: 0,         // Modificador del tamaño de las tarjetas no enfocadas
          slideShadows: false, // Sin sombras
          scale: 1,          // Escala para las tarjetas no enfocadas
        }}
        loop={true}
        speed={700}
        autoplay={{
          delay: 2500,           // Duración de la tarjeta antes de cambiar
          disableOnInteraction: false, // No pausar al interactuar
        }}
        breakpoints={{
          1700: {
            slidesPerView: 4,   // Mostrar 2 slides por vista en pantallas grandes
            coverflowEffect: {
              stretch: -5,      // Ajuste del estiramiento en pantallas grandes
            },
          },
          1200: {
            slidesPerView: 3,   // Mostrar 1 slide por vista en pantallas más pequeñas
            coverflowEffect: {
              stretch: -100,    // Ajuste del estiramiento en dispositivos pequeños
            },
          },
          768: {
            slidesPerView: 2,   // Mostrar 1 slide por vista en pantallas más pequeñas
          },
          425: {
            slidesPerView: 1,   // Mostrar 1 slide por vista en pantallas más pequeñas
          },

        }}
        onSwiper={(swiper) => {
          // Pasar la instancia de swiper a los eventos de mouse
          swiper.el.addEventListener('mouseenter', () => handleMouseEnter(swiper));
          swiper.el.addEventListener('mouseleave', () => handleMouseLeave(swiper));
        }}
      >
        {studies.map((study, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center"  // Centrar la tarjeta dentro del SwiperSlide
            style={{ height: '100%', width: '100%' }}      // Asegurar que ocupen todo el espacio disponible
          >
            <StudyCard
              date={study.date}
              title={study.title}
              image={study.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudyCarousel;

