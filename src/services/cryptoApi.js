const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-2ESyEwgAyRLJcxe3ckgik8Ue";

const getCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&per_page=20&page=${page}&x-cg-pro-api-key=${API_KEY}`;
const searchCoin = (query) =>
  `${BASE_URL}/search?query=${query}&x-cg-pro-api-key=${API_KEY}`;

export { getCoinList ,searchCoin };
