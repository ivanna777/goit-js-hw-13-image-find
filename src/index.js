import ApiService from "./apiService";
import pictureTpl from "../src/picture.hbs";
import "../src/styles.css"

const inputRef = document.querySelector('.js-input');
const galleryRef = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.btn');

const apiService = new ApiService();

inputRef.addEventListener('input', onSearch);
loadMoreBtn.addEventListener('click', fetchPictures);
loadMoreBtn.addEventListener('click', scroll);

function onSearch(e) {
  e.preventDefault();

  apiService.query = inputRef.value;

  apiService.resetPage();
  clearPicturesContainer();
  fetchPictures();
}

function fetchPictures() {
    apiService.fetchPictures().then(pictures => {
    pictureMarkup(pictures);
  });
}

function pictureMarkup(pictures) {
    galleryRef.insertAdjacentHTML('beforeend', pictureTpl(pictures));
}

function clearPicturesContainer() {
    galleryRef.innerHTML = '';
}

function scroll() {
    const totalHeight = (galleryRef.clientHeight) + 80;
    console.log(galleryRef.clientHeight)

    setTimeout(() => {
        window.scrollTo(0, totalHeight);
    }, 2000)
}

