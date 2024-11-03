import { fetchImages } from "./js/pixabay-api";
import { renderImages, showNoResultsMessage, clearGallery } from "./js/render-functions";
// import "css-loader";

const loader = document.querySelector('.loader');

const form = document.querySelector(".form");

form.addEventListener("submit", onSearch);

async function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.query.value.trim();

  if (!searchQuery) {
    iziToast.error({ title: "Error", message: "Please enter a search term." });
    return;
  }

  clearGallery();
  toggleLoader(true);

  try {
    const data = await fetchImages(searchQuery);
    if (data.hits.length === 0) {
      showNoResultsMessage();
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    iziToast.error({ title: "Error", message: "Something went wrong. Please try again!" });
  } finally {
    toggleLoader(false);
  }
}

function toggleLoader(isVisible) {
  loader.style.display = isVisible ? "block" : "none";
}
