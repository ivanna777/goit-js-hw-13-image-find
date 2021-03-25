export default class ApiService {
    constructor() {
      this.searchPicture = '';
      this.page = 1;
    }
  
    fetchPictures() {
      const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchPicture}&page=${this.page}&per_page=12&key=20828965-4298cb7d6f87f653ca708a263`;

      return fetch(url)
        .then(response => response.json())
        .then(pictures => {
          this.incrementPage();
          return pictures.hits;
        });
    }
  
    incrementPage() {
      this.page += 1;
    }
  
    resetPage() {
      this.page = 1;
    }
  
    get query() {
      return this.searchPicture;
    }
  
    set query(newQuery) {
      this.searchPicture = newQuery;
    }
  }

