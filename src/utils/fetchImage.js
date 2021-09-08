function fetchImages(nameImg) {
  const URL = 'https://pixabay.com/api';
  const KEY = '22579303-973b9b71134c76d3c38c0933d';

  return fetch(
    `${URL}/?q=${nameImg}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export default fetchImages;