import React from "react";
export default function Card({ name, description, img, github, site }) {
  return (
    <article className="w-72 h-[580px] shadow-xl bg-white mx-auto mb-3 relative">
      <div className="w-full h-64 bg-amber-100 flex mb-9">
        <img
          src={img}
          alt="preview del proyecto"
          className="object-contain mx-auto"
        />
      </div>
      <h3 className="mb-6 text-center font-bold text-2xl">{name}</h3>
      <p className="w-4/5 mx-auto font-normal text-sm mb-6">{description}</p>
      <div className="flex flex-row justify-around absolute bottom-2 w-full">
        {github && (
          <button className="p-2 bg-black w-24 text-white rounded hover:bg-black/80">
            <a href={github} target="_blank">
              Github
            </a>
          </button>
        )}
        {site && (
          <button className="p-2  w-24 border-2 border-black rounded hover:bg-slate-50">
            <a href={site} target="_blank">
              Sitio
            </a>
          </button>
        )}
      </div>
    </article>
  );
}
