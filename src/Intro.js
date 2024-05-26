export default function Intro(props) {
  return (
    <>
      <h1>{props.fullName}</h1>
      <p>{props.description}</p>
    </>
  );
}
