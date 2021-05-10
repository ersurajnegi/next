import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

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
