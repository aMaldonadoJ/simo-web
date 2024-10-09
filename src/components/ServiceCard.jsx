import React from 'react';
import { arrowRight, arrowRightGray, arrowRightPurple } from "../assets";

const ServiceCard = ({ title, description, icon, url }) => {
  return (
    <div
      className="bg-gray-100 rounded-2xl  flex flex-col w-[450px] justify-between h-[600px] cursor-pointer overflow-hidden group"
      style={{ width: 'clamp(400px, 25vw, 450px)', height: 'clamp(475px, 30vw, 600px)' }}
      onClick={() => window.location.href = url}>

      <div className="overflow-hidden">
        <img
          src={icon}
          alt={title}
          className="w-[450px] h-[250px] object-cover rounded-t-2xl bg-slate-200 transform transition-transform duration-1000 group-hover:scale-110"
          style={{ width: 'clamp(400px, 25vw, 660px)', height: 'clamp(150px, 12vw, 600px)' }}
        />
      </div>

      <div
        className="mt-0 ">
        <h3 className="px-8 text-2xl font-urbanist font-semibold mb-4 group-hover:text-purpleSimo">{title}</h3>
        <p className="text-gray-600 px-8 font-nunito text-lg mb-5"
          style={{ width: 'clamp(400px, 25vw, 450px)', height: 'clamp(80px, 30vw, 50px)' }}>{description}</p>
      </div>

      <div
        className="px-8 flex flex-row items-center mb-5 py-3 ">
        <button className="flex items-center justify-center mr-3">
             
              {/* Contenedor para los íconos */}
              <div className="relative w-6 h-6">
                        {/* Icono gris por defecto */}
                        <img
                            src={arrowRightGray}
                            alt="Icono gris"
                            className="absolute w-6 h-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0 z-10"
                        />

                        {/* Icono morado en hover */}
                        <img
                            src={arrowRightPurple}
                            alt="Icono morado"
                            className="absolute w-6 h-6 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"
                        />
                        </div>

        </button>
        <span className="font-nunito font-semibold text-xl md:text-lg text-gray-700 group-hover:text-purpleSimo">Conoce más</span>
      </div>
    </div>
  );
};

export default ServiceCard;

