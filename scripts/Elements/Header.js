export default function createHeaderEl(indexPath, testimoniesPath) {
    const headerEl = document.querySelector(".header");

    const logoLinkEl = document.createElement("a");
    logoLinkEl.classList.add("header__link", "header__logo");
    logoLinkEl.innerText = "DAD JOKES ANONYMOUS";
    logoLinkEl.href = `${indexPath}/index.html`;

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
    itemLinkA.href = `${indexPath}/index.html`;

    const itemElB = document.createElement("li");
    itemElB.classList.add("nav__item");

    const itemLinkB = document.createElement("a");
    itemLinkB.classList.add("nav__link");
    itemLinkB.innerText = "Testimonies";
    itemLinkB.href = `${testimoniesPath}/testimonies.html`;

    navEl.appendChild(listEl);

    listEl.appendChild(itemElA);
    listEl.appendChild(itemElB);

    itemElA.appendChild(itemLinkA);

    itemElB.appendChild(itemLinkB);
}
