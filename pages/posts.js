import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Post = ({ data }) => {
  const router = useRouter();
  const { pid } = router.query;
  const [posts, setData] = useState(data);
  return (
    <section>
      <h2>This is example with fetch@server side and update@client side</h2>
      <div>
        Query Param :<span>Post: {pid}</span>
        <br />
        <span>{Math.random()}</span>
        <button onClick={getData}>Add a new Item</button>
      </div>
      <br />
      <div className={styles.grid}>
        {posts &&
          posts.map((item) => {
            return (
              <div className={styles.card} key={item.id}>
                <Link href={`/post/${item.id}`}>
                  <a>{item.title} &rarr;</a>
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );

  function getData() {
    const test = {
      title: "capticate prime test",
      id: 1,
    };
    const post = [test, ...posts];
    debugger;
    setData(post);
  }
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default Post;
