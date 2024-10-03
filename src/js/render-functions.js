export const renderImages = array => array.map(({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
}) => `<li class="gallery-item">
<a href="${largeImageURL}">
<img src="${webformatURL}" class="img" alt="${tags}" />
</a>
<div class="img-info">
    <div>
    <p class="img-info-amounts">Likes</p>
    <p class="img-info-amounts">${likes}</p>
  </div>
  <div>
    <p class="img-info-amounts">Views</p>
    <p class="img-info-amounts">${views}</p>
  </div>
  <div>
      <p class="img-info-amounts">Comments</p>
      <p class="img-info-amounts">${comments}</p>
  </div>
  <div>
      <p class="img-info-amounts">Downloads</p>
      <p class="img-info-amounts">${downloads}</p>
  </div>
</div>
</li>`);