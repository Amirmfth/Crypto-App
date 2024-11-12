//Libraries
import { RotatingLines } from "react-loader-spinner";
//SVG
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
// CSS
import styles from "./TableCoin.module.css";

function TableCoin({ coins, isLoading, currency }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow key={coin.id} coin={coin} currency={currency} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    image,
    symbol,
    id,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  },
  currency,
}) => {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt={id} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency === "usd"
          ? "$"
          : currency === "eur"
          ? "€"
          : currency === "jpy"
          ? "¥"
          : null}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        {" "}
        <img src={price_change > 0 ? chartUp : chartDown} alt="chart" />
      </td>
    </tr>
  );
};
