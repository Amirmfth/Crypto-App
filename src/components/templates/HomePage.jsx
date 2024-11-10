//Hooks
import { useEffect, useState } from "react";
//Components
import TableCoin from "../modules/TableCoin";
//Services
import { getCoinList } from "../../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(getCoinList());
      const json = await response.json();
      setCoins(json);
    };
    getData();
  }, []);
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
