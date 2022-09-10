import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);



const elGallery = document.querySelector(".gallery");
const markup = createMarkup(galleryItems)

elGallery.insertAdjacentHTML("beforeend", markup);
elGallery.addEventListener("click", ListenerClikGallery);


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
// console.log(createMarkup(galleryItems))

// Слушатель

function ListenerClikGallery(event){
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")){
        return;    
    };
    console.log(event.target.dataset.source)
const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)
instance.show()
// instance.close()

    };
