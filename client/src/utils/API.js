import axios from "axios";

const API = {
  // article functions
  getArticles: function(searchTerm) {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3b2b65e618f34ee48918c42b1f9efcc6&q=${searchTerm}?sort=newest`)
  },

  saveArticle: function(articleData) {
    return axios.post('/api/articles/', articleData)
  },

  getSavedArticles: function() {
    return axios.get('/api/articles')
  },

  removeSavedArticle: function(id) {
    return axios.post(`/api/articles/${id}`)
  },
};

export default API ;


