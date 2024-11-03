// render-functions.js
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const galleryElement = document.querySelector(".gallery");

export function renderImages(images) {
  galleryElement.innerHTML = images.map(createImageCardMarkup).join("");
  new SimpleLightbox('.gallery a').refresh();
}

function createImageCardMarkup(image) {
  return `
    <a href="${image.largeImageURL}" class="gallery_item">
      <img src="${image.webformatURL}" alt="${image.tags}" class="gallery_image" width="380"/>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${image.likes}</p>
        <p class="info-item"><b>Views:</b> ${image.views}</p>
        <p class="info-item"><b>Comments:</b> ${image.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </a>
  `;
}

export function showNoResultsMessage() {
  iziToast.error({ title: "Error", message: "Sorry, there are no images matching your search query. Please try again!" });
}

export function clearGallery() {
  galleryElement.innerHTML = "";
}
