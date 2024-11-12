//Hooks
import { useEffect, useState } from "react";
//Components
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";
//Services
import { getCoinList } from "../../services/cryptoApi";

function HomePage() {
  //States
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  //Effects
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(getCoinList(page, currency));
        const json = await response.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        alert(error)
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
      <TableCoin coins={coins} isLoading={isLoading} currency={currency} setChart={setChart} />
      <Pagination pageState={{ page, setPage }} />
      {!!chart && <Chart chartState={{chart , setChart}} />}
      
    </div>
  );
}

export default HomePage;
