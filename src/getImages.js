const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "53527826-b2df1196f2ee896f2c8fe4b14";
let page = 1;
let perPage = 12;

export function incrementPage() {
  page += 1;
}

export async function fetchImages(query){
  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    return console.error('Error fetching images:', error);
  }
}


