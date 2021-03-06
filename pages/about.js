import { useDispatch, useSelector } from "react-redux";

function About({ data }) {
  const state = useSelector((state) => {
    return state.about;
  });

  const dispatch = useDispatch();
  const changeState = () => {
    dispatch({ type: "CHANGE_ABOUT_STATE" });
  };
  return (
    <div>
      <p>Index State Value : {state.aboutState}</p>
      <button onClick={changeState}>Change State</button>

      <span>{data.color}</span>
      <span>{data.string}</span>
      <input type="checkbox" checked={data.boolean} />
      <button onClick={test}>About</button>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://mocki.io/v1/1978eae3-985d-4626-b889-c9d44dda8ddd`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
function test() {
  alert("hello");
}
export default About;
