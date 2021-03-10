const KEY = "?client_id=47K75D2zwE_quO34auqFyBUUEM8LTjKR595WvZ3r6eI";
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async (page) => {
  const response = await fetch(`${URL}${KEY}&per_page=2&page=${page}`);
  const data = await response.json();

  if (response.state > 400) {
    throw new Error(data.error);
  }
  return data;
};

const fetchImageStats = async (id) => {
  const response = await fetch(`${URL}/${id}/statistics/${KEY}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchImages, fetchImageStats };
