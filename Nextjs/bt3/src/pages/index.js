import axios from "axios";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import moment from 'moment'
export const getStaticProps = async () => {
  const res = await axios.get(
    "https://api.covid19api.com/total/country/vietnam"
  );
  const data = await res.data;
  await data.map((item) => {
    item.Date = moment(item.Date).format("DD-MM-YYYY");
    return item;
  });
  return {
    props: { dataCovid: data },
  };
};
export default function Home({ dataCovid }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{ textAlign: "center" }}>VietNam's COVID-19 information</h1>
      <main className={styles.main}>
        <table border={1}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Confirmed</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {dataCovid.map((item) => (
              <tr>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Recovered}</td>
                <td>{item.Deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}