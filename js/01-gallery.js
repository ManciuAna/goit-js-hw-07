import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryUl= document.querySelector(".gallery");
console.log(galleryUl);

galleryItems.forEach((galleryItem) => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");
    listItem.innerHTML = `
    <a class="gallery__link" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}"
    alt="${galleryItem.description}"/>
    </a>
    `;
    galleryUl.append(listItem);
});

const instance = basicLightbox.create(
    `
        <img width="1400" height="900" src="">
    `,
    {
        onShow: () => {
document.addEventListener("keydown", closeModal);
},
onClose: () => {
document.removeEventListener("keydown", closeModal);
},
    }
);

galleryUl.addEventListener("click", openImageInModal);

function openImageInModal(event) {
event.preventDefault();
const clickedOn = event.target;

if (clickedOn.nodeName !== "IMG") {
return;
}
instance.element().querySelector("img").src = clickedOn.dataset.source;

instance.show();
}

function closeModal(event) {
if (event.code === "Escape") {
instance.close();
}
}
