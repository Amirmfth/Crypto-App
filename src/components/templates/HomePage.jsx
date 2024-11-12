//Hooks
import { useEffect, useState } from "react";
//Components
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
//Services
import { getCoinList } from "../../services/cryptoApi";
import Search from "../modules/Search";

function HomePage() {
  //States
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  //Effects
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(getCoinList(page, currency));
        const json = await response.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        alert(error.message)
      }
    };
    getData();

    return () => {
      setIsLoading(true);
    };
  }, [page, currency]);
  return (
    <div>
      <Search currencyState={{ currency, setCurrency }} />
      <TableCoin coins={coins} isLoading={isLoading} currency={currency} />
      <Pagination pageState={{ page, setPage }} />
    </div>
  );
}

export default HomePage;
