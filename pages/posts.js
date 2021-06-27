import styles from "../styles/Home.module.css";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

const Post = ({ data }) => {
  const state = useSelector((state) => {
    console.log("inside useselector", state.posts);
    return state.posts;
  });

  const dispatch = useDispatch();
  const changeState = () => {
    dispatch({ type: "CHANGE_POST_STATE" });
  };
  return (
    <section>
      <h2>This is example with fetch@server side and update@client side</h2>

      <p>Index State Value : {state.number}</p>
      <button onClick={changeState}>Change State</button>

      <br />
      <div className={styles.grid}>
        <p>Posts Length : {state.posts.length}</p>
        {state.posts &&
          state.posts.map((item) => {
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
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(`After fetch data : ${data.length}`);
  // Pass data to the page via props
  return { props: { data } };
}
export default Post;
