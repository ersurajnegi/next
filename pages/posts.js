import { wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Post = ({ data }) => {
  const router = useRouter();
  const state = useSelector((state) => {
    return state.posts;
  });

  const dispatch = useDispatch();
  const changeState = () => {
    dispatch({ type: "CHANGE_POST_STATE" });
  };

  const redirectToPostPage = (id) => {
    dispatch({ type: "CHANGE_POSTID_STATE", payload: id });
    router.push(`/post/${id}`);
  };
  console.log("Posts Value : ", state.posts);
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
                {/* <Link href={`/post/${item.id}`}> */}
                <a onClick={() => redirectToPostPage(item.id)}> {item.title} &rarr;</a>
                {/* </Link> */}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, respos, ...etc }) => {
      // Fetch data from external API
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json();

      store.dispatch({ type: "FILLE_POST_ARRAY", payload: data });
    }
);

export default Post;
