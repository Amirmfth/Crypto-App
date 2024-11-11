// CSS
import styles from "./Pagination.module.css";

function Pagination({ pageState: { page, setPage } }) {
  // Handler
  const prevHandler = () => {
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    setPage((page) => page + 1);
  };
  return (
    <div className={styles.pagination}>
      <button onClick={prevHandler} disabled={page <= 1 ? true : false}>
        previous
      </button>
      <p className={page === 1 ? styles.selected : null}>1</p>
      <p className={page === 2 ? styles.selected : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={styles.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page === 9 ? styles.selected : null}>9</p>
      <p className={page === 10 ? styles.selected : null}>10</p>
      <button onClick={nextHandler} disabled={page >= 10 ? true : false}>
        next
      </button>
    </div>
  );
}

export default Pagination;
