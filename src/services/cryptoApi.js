const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY ="x-cg-pro-api-key=CG-2ESyEwgAyRLJcxe3ckgik8Ue"

const getCoinList = (page) => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&per_page=20&page=${page}&${API_KEY}`;
};

export { getCoinList };
