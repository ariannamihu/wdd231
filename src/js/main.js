import { getParkData } from "./parkService.mjs";

const parkData = getParkData();
const first_img_link = parkData.images[0].url;

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;


function parkInfoTemplate(info) {
    return `<a href="/" class="park-header__title">${info.name}</a>
    <p class="park-header__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
  }

 document.getElementsByClassName(header-img).src = first_img_link;
 document.querySelector(".park-header__subtitle").innerHTML = parkData.info.states;
