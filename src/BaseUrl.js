import axios from 'axios';

const axiosInstance = axios.create({

  //server api

  // baseURL: 'http://hybrid.srishticampus.in:4003/local_news_aggregator_api', 

//local api

  baseURL: 'http://localhost:4004/localnews_api', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance