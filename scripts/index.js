async function getPictures() {
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
        mainDiv.appendChild(imgEl);
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

const mainDiv = document.querySelector(".main");

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

let player;

function onYouTubeIframeAPIReady() {
    console.log("YouTube API is ready.");
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
    // event.target.playVideo();
    console.log("Player is ready.");
}
