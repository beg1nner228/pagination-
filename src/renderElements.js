const gallery = document.querySelector('#gallery');

export function renderImages(data) {
    const images = data?.hits || [];
    const markup = images.map(({webformatURL, tags}) => {
      return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card h-100 shadow-sm">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" class="card-img-top gallery-img" />
            <div class="card-body p-2">
              <p class="card-text small text-truncate mb-0">${tags}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
    gallery.insertAdjacentHTML("beforeend", markup);
  }