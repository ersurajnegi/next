import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
const Post = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  return (
    <section>
      <h2>This is Dynamic route page explame with fetch@server</h2>
      <div>
        Query Param :<span>Post: {id}</span>
        <br />
        <span>{Math.random()}</span>
      </div>
      <br />
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>{data.title}</h3>
        </div>
      </div>
    </section>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default Post;
