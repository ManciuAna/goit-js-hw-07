import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const itemsUl = document.querySelector(".gallery");
galleryItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");
    listItem.innerHTML =
        `
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
   `;
    itemsUl.append(listItem);
});

itemsUl.addEventListener("click", openImageInModal);

function openImageInModal(event) {
    event.preventDefault();
    const lightBox = new SimpleLightbox(".gallery a", {
        captionPosition: "bottom",
        captionsData: "alt",
        captionDelay: 250,
    });
}
