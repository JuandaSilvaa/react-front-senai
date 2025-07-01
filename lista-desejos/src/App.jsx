import styles from "./App.module.css";
import { Card } from "./components/Card/Card";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
      <CardGrid/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
