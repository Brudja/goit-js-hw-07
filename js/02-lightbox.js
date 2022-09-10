import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);



const elGallery = document.querySelector(".gallery");
const markup = createMarkup(galleryItems)

elGallery.insertAdjacentHTML("beforeend", markup);


// разметка
function createMarkup(items){
return items.map(item => {
    return`
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </div>`;
}).join("");
};


const lightbox = new SimpleLightbox(".gallery a", {

    captionsData: "alt",
    captionDelay: 250,
});
console.log(lightbox)
