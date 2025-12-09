import './style.css'
import { fetchImages, incrementPage } from './getImages.js';
import { renderImages } from './renderElements.js';

const loadMoreBtn = document.querySelector('#load-more-btn');

const onLoadMoreBtnClick = async () => {
  loadMoreBtn.disabled = true;
  try {
    incrementPage();
    const data = await fetchImages('cats');
    renderImages(data);
  } catch (err) {
    console.error('Load more error:', err);
  } finally {
    loadMoreBtn.disabled = false;
  }
}

loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
