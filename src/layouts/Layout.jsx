// CSS
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <span>Amirmfth</span> | Get live and detailed info on Crypto Market
        </p>
      </header>
      {children}
      <footer className={styles.footer}><p>Developed by Amir with ❤️</p></footer>
    </>
  );
}

export default Layout;
