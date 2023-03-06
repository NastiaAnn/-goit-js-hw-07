import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");

// creation of gallery markup
const makeGalleryCard = ({ preview, original, description }) =>
  `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;

const galleryMarkup = galleryItems
  .map((data) => makeGalleryCard(data))
  .join("");

galleryContainerEl.innerHTML = galleryMarkup;

// listener + default+ tag examination

galleryContainerEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalImgUrl = event.target.dataset.source;
  // console.log(originalImgUrl);

  createbasicLightBoxGallery(originalImgUrl);
});
// LightBoxGallery +
function createbasicLightBoxGallery(originalImgUrl) {
  var modal;

  modal = basicLightbox.create(
    `<img width="1280" height="600" src="${originalImgUrl}">`,
    {
      onShow: function () {
        document.addEventListener("keydown", onKeydown);
      },
      onClose: function () {
        document.removeEventListener("keydown", onKeydown);
      },
    }
  );

  modal.show();

  function onKeydown(event) {
    // console.log(event);
    if (event.key === "Escape") {
      modal.close();
    }
  }
}

// console.log(galleryItems);
