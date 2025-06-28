import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1>FoodApp</h1>
        <img src={"/foodapp_QR.png"} alt="" />
        <ol>
            <li>Installez l'application Expo sur votre smartphone</li>
            <li>Appuyez sur "Scan QR Code</li>
            <li>Scannez le QR Code</li>
            <li>Testez l'application !!</li>
        </ol>
    </main>
    </div>
  );
}

export default Home;
