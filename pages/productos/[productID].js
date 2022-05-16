import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Producto({ productID, title }) {
  return (
    <div>
      <Head>
        <title>{title} - La ferretera de las telecomunicaciones</title>
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
          <h1 className={styles.title}>{title}</h1>
          <p>ID de producto: {productID}</p>
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      productID: params.productID,
      title: `Producto ${params.productID}`,
    },
  };
}

export async function getStaticPaths() {
  const paths = [...new Array(5)].map((i, index) => {
    return {
      params: {
        productID: `${index + 1}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
