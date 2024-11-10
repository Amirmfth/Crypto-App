//Hooks
import { useEffect, useState } from "react";
//Components
import TableCoin from "../modules/TableCoin";
//Services
import { getCoinList } from "../../services/cryptoApi";

function HomePage() {
    //States
  const [coins, setCoins] = useState([]);
  const [isLoading , setIsLoading] = useState(true)


  //Effects
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(getCoinList());
      const json = await response.json();
      setCoins(json);
      setIsLoading(false)
    };
    getData();
  }, []);
  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
