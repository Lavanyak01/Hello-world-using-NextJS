import fetch from "node-fetch";
import styles from '../styles/Home.module.css';

function helloWorld({serverMessage}) {
  return (
    <div className={styles.content}>
      <h1>Hello World</h1>
      <h2>Message from server : {serverMessage}</h2>
    </div>
  )
}

export default helloWorld

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/`);
  const data = await response.json();

  return {
    props: {
      serverMessage: data,
    },
  }
}