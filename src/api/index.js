const KEY = "?client_id=47K75D2zwE_quO34auqFyBUUEM8LTjKR595WvZ3r6eI";
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async (page) => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await response.json();

  if (response.state > 400) {
    throw new Error(data.error);
  }
  return data;
};

export {fetchImages}