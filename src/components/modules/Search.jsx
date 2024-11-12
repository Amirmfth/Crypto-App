// Hooks
import { useEffect, useState } from "react";
// Libraries
import { RotatingLines } from "react-loader-spinner";
// httpReg
import { searchCoin } from "../../services/cryptoApi";
// CSS
import styles from "./Search.module.css";

function Search({ currencyState: { currency, setCurrency } }) {
  // States
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Effects
  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }
    const search = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();

        if (json.coins) {
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
        setIsLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    search();

    return () => controller.abort();
  }, [text]);
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {
        (!!coins.length || isLoading) && ( <div className={styles.searchResult}>
            {isLoading && (
              <RotatingLines
                width="50px"
                height="50px"
                strokeWidth="2"
                strokeColor="#3874ff"
              />
            )}
            <ul>
              {coins.map((coin) => (
                <li key={coin.id}>
                  <img src={coin.thumb} alt={coin.name} />
                  <p>{coin.name}</p>
                </li>
              ))}
            </ul>
          </div>)
      }

     
    </div>
  );
}

export default Search;
