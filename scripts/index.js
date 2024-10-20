import createHeaderEl from "./Elements/Header.js";

const headerEl = document.querySelector(".header");
const mainEl = document.querySelector(".main");

function createVideoEl() {
    const videoEl = document.createElement("video");
    videoEl.classList.add("main__video");
    videoEl.setAttribute("loop", "");
    videoEl.setAttribute("muted", "");
    videoEl.setAttribute("autoplay", "");
    videoEl.setAttribute("preload", "auto");

    const srcEl = document.createElement("source");
    srcEl.classList.add("main__video-src");
    srcEl.setAttribute("src", "./assets/dad-jokes-survivor.mp4");
    srcEl.setAttribute("type", "video/mp4");

    const btnEl = document.createElement("a");
    btnEl.classList.add("main__btn");
    btnEl.innerHTML = "LEARN MORE";
    btnEl.href = "./pages/testimonies.html";

    mainEl.appendChild(videoEl);
    mainEl.appendChild(btnEl);

    videoEl.appendChild(srcEl);
}

function renderElements() {
    headerEl.replaceChildren();
    mainEl.replaceChildren();

    createHeaderEl(".", "./pages");
    createVideoEl();
}

renderElements();
