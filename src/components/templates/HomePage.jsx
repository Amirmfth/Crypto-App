//Hooks
import { useEffect, useState } from "react";
//Components
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
//Services
import { getCoinList } from "../../services/cryptoApi";

function HomePage() {
  //States
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  //Effects
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(getCoinList(page));
        const json = await response.json();
        setCoins(json);
        setIsLoading(false);
      };
      getData();
    } catch (error) {
      console.log(error);
      return;
    }

    return () => {
      setIsLoading(true);
    };
  }, [page]);
  return (
    <div>
      <Pagination pageState={{ page, setPage }} />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
