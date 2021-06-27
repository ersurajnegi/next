import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";

export default function Home() {
  const state = useSelector((state) => {
    return state.index;
  });

  const dispatch = useDispatch();
  const changeState = () => {
    dispatch({ type: "CHANGE_INDEX_STATE" });
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>Index State Value : {state.indexState}</p>
        <button onClick={changeState}>Change State</button>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/about">
              <a>Route with dynamic data &rarr;</a>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href={`/posts`}>
              <a>
                Dynamic Route with data fetch at server and can be updated at
                client &rarr;
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
