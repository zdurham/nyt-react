import axios from "axios";

const API = {
  // collect articles
  getArticles: function(searchTerm) {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3b2b65e618f34ee48918c42b1f9efcc6&q=${searchTerm}?sort=newest`)
  },

  saveArticle: function(articleData) {
    return axios.post('/api/articles/', articleData)
  }
};

export default API


