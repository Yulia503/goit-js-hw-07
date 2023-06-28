

import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);
// const itemsMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems));
gallery.addEventListener('click', onImgClick)


function createMarkupItems(arr) {
    
    return arr.map(({ preview, original, description }) => `
 <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
     data-source = "${original}"
        alt="${description}" 
    />
  </a>
</li>
    `)
        .join('')
}


//*-----------------------------------------

function onImgClick(evt) {
    evt.preventDefault();
     const fullImg = evt.target.closest('.gallery__image')
    
if (!fullImg) {
return;
}
const originalFullImg = evt.target.dataset.source;
    const instance = basicLightbox.create(
      
        `<img src="${originalFullImg}" />`,
        {
            onShow: (instance) => {
                document.addEventListener('keydown', clickESCbtn)
            },
            onClose: (instance) => {
                document.removeEventListener('keydown', clickESCbtn)
            },
        }
    )

        instance.show(); 

        
        function clickESCbtn(evt) {
  if (evt.code === 'Escape') 
  instance.close();
}
}
