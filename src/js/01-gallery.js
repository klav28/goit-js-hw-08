// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const markupGallery = (images) => {
    return images.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" style="display: block"/>
        </a>`
    }).join(" ");
}

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = markupGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {captions: true, captionDelay:250, captionsData:"alt"});

lightbox.on("shown.simplelightbox", window.addEventListener("keydown", handleKeydown));

lightbox.on("closed.simplelightbox", window.removeEventListener("keydown", handleKeydown));

function handleKeydown(ev) {
    if (ev.code === 'Escape') {
        lightbox.close();
       }
}
