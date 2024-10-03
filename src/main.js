import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';

const userForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-btn');

const loader = () => document.querySelector("span").classList.toggle("loader");

const warn = () => iziToast.show({
    message: 'Please fill a field',
    backgroundColor: 'red',
    color: 'white',
});

const mistake = () => iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
    backgroundColor: 'red',
    color: 'white',
});

const finishHits = () => iziToast.show({
    message: "We're sorry, but you've reached the end of search results.",
    backgroundColor: "yellow",
    color: "white",
});

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

let userQuery = '';
let currentPage = 1;

const handleImages = async (event) => {
    event.preventDefault();
    userQuery = event.currentTarget.elements.query.value.toLowerCase().trim();
    if (!userQuery) return warn();
    gallery.innerHTML = "";
    loadBtn.style.display = "none";
    currentPage = 1;
    loader();
    try {
        const json = await fetchImages(userQuery, currentPage);
        if (!json.hits.length) return mistake();
        gallery.insertAdjacentHTML('beforeend', renderImages(json.hits).join(''));
        lightbox.refresh();
        currentPage++;
        loadBtn.style.display = json.totalHits > json.hits.length ? "block" : "none";
    }
    catch (error) {
        console.log(error);
    }
    finally {
        loader();
        userForm.reset();
    };
};

const loadImages = async (event) => {
    if (!userQuery) return warn();
    loader();
    try {
        const json = await fetchImages(userQuery, currentPage);
        gallery.insertAdjacentHTML('beforeend', renderImages(json.hits).join(''));
        currentPage++;
        lightbox.refresh();
        window.scrollBy({
            top: 200 * 2,
            behavior: "smooth",
        });
        if (gallery.children.length >= json.totalHits) {
            loadBtn.style.display = "none";
            return finishHits();
        } else {
            loadBtn.style.display = "block";
        }
            
    }
    catch (error) {
        console.log(error);
    }
    finally {
        loader();
    };
};

userForm.addEventListener('submit', handleImages);
loadBtn.addEventListener('click', loadImages);