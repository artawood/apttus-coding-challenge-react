import axios from "axios";

export default {
  getRepos: query => {
    return axios.get("https://api.github.com/search/repositories", {
      params: {
        q: query
      }
    });
  }
};
