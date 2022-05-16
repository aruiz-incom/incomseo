import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div>
      <Head>
        <title>Sobre INCOM - La ferretera de las telecomunicaciones</title>
        <meta
          name="description"
          content="La historia detras de INCOM - La ferretera de las telecomunicaciones"
        />
        <meta
          property="og:title"
          content="Sobre INCOM - La ferretera de las telecomunicaciones"
        />
        <meta
          property="og:description"
          content="La historia detras de INCOM - La ferretera de las telecomunicaciones"
        />
        <meta property="og:url" content="https://www.incom.mx/" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            INCOM - La ferretera de las telecomunicaciones
          </h1>
        </main>
      </div>
    </div>
  );
}
