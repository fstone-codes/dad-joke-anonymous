import createHeaderEl from "./Elements/Header.js";

async function getPictures(parentEl) {
    try {
        const response = await axios.get(
            "https://cors-anywhere.herokuapp.com/https://thispersondoesnotexist.com/",
            {
                responseType: "blob",
            }
        );

        const imgUrl = URL.createObjectURL(response.data);

        const divEl = document.createElement("div");
        divEl.classList.add("main__image-container");

        const imgEl = document.createElement("img");
        imgEl.classList.add("main__image");
        imgEl.src = imgUrl;

        mainEl.appendChild(divEl);
        divEl.appendChild(imgEl);
    } catch (error) {
        console.error(error);
    }
}

getPictures();

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

getJoke();

// ====================================

const headerEl = document.querySelector(".header");
const mainEl = document.querySelector(".main");

function renderElements() {
    headerEl.replaceChildren();
    mainEl.replaceChildren();

    createHeaderEl("..", ".");
}

renderElements();
