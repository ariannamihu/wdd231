import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(parkData){
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = parkData.url;
    disclaimer.innerHTML = parkData.fullName;
  
    document.querySelector(".header-img").src = parkData.images[0].url;
    document.querySelector(".park-header__subtitle").innerHTML = parkData.states;
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);
  }

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
  setHeaderInfo(parkData);
  setFooter(parkData);
}