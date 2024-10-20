/* let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "1080", // Adjust as needed
        width: "1920", // Adjust as needed
        videoId: "__DApLNFJlw",
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: "__DApLNFJlw",
            controls: 0,
            mute: 1,
        },
        events: {
            onReady: onPlayerReady,
        },
    });
}

function onPlayerReady(event) {
    console.log("Player is ready.");
} */

// ====================================

async function getPictures(parentEl) {
    try {
        const response = await axios.get(
            "https://cors-anywhere.herokuapp.com/https://thispersondoesnotexist.com/",
            {
                responseType: "blob",
            }
        );

        const imgUrl = URL.createObjectURL(response.data);

        const imgEl = document.createElement("img");
        imgEl.classList.add("testimony__image");
        imgEl.src = imgUrl;
        parentEl.appendChild(imgEl);
    } catch (error) {
        console.error(error);
    }
}

// getPictures();

async function getJoke() {
    try {
        const response = await axios.get("https://icanhazdadjoke.com/", {
            headers: {
                accept: "application/json",
            },
        });

        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

// getJoke();

// ====================================
// MAIN PAGE W/ VIDEO
const headerEl = document.querySelector(".header");

const mainEl = document.querySelector(".main");

function createHeaderEl() {
    const logoLinkEl = document.createElement("a");
    logoLinkEl.classList.add("header__link", "header__logo");
    logoLinkEl.innerText = "DAD JOKES ANONYMOUS";
    logoLinkEl.href = "./index.html";

    const navEl = document.createElement("nav");
    navEl.classList.add("nav");

    headerEl.appendChild(logoLinkEl);
    headerEl.appendChild(navEl);

    const listEl = document.createElement("ul");
    listEl.classList.add("nav__list");

    const itemElA = document.createElement("li");
    itemElA.classList.add("nav__item");

    const itemLinkA = document.createElement("a");
    itemLinkA.classList.add("nav__link");
    itemLinkA.innerText = "Home";
    itemLinkA.href = "./index.html";

    const itemElB = document.createElement("li");
    itemElB.classList.add("nav__item");

    const itemLinkB = document.createElement("a");
    itemLinkB.classList.add("nav__link");
    itemLinkB.innerText = "Testimonies";
    itemLinkB.href = "./pages/testimonies.html";

    navEl.appendChild(listEl);

    listEl.appendChild(itemElA);
    listEl.appendChild(itemElB);

    itemElA.appendChild(itemLinkA);

    itemElB.appendChild(itemLinkB);
}

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

    const btnEl = document.createElement("button");
    btnEl.classList.add("main__btn");
    btnEl.innerHTML = "LEARN MORE";
    btnEl.setAttribute("type", "button");

    mainEl.appendChild(videoEl);
    mainEl.appendChild(btnEl);

    videoEl.appendChild(srcEl);
}

/* function createVideoElements() {
    const playerDivEl = document.createElement("div");
    playerDivEl.classList.add("main__player");
    playerDivEl.id = "player";

    const divEl = document.createElement("div");
    divEl.classList.add("main__btn-container");

    const btnEl = document.createElement("button");
    btnEl.classList.add("main__btn");
    btnEl.innerHTML = "&#11167";
    btnEl.setAttribute("type", "button");

    mainDiv.appendChild(playerDivEl);
    mainDiv.appendChild(divEl);

    divEl.appendChild(btnEl);
} */

function renderElements() {
    headerEl.replaceChildren();
    mainEl.replaceChildren();

    createHeaderEl();
    createVideoEl();
}

renderElements();
// ====================================
const btnEl = document.querySelector(".main__btn");

btnEl.addEventListener("click", async () => {
    const iframeEl = document.querySelector("iframe");
    iframeEl.classList.add("main--hide");
    divEl.classList.add("main--hide");
    btnEl.classList.add("main--hide");

    const imgDivEl = document.createElement("div");
    imgDivEl.classList.add("main__img-container");

    const textDivEl = document.createElement("div");
    textDivEl.classList.add("main__text-container");

    mainDiv.appendChild(imgDivEl);
    mainDiv.appendChild(textDivEl);

    getPictures(imgDivEl);
});

// ====================================
