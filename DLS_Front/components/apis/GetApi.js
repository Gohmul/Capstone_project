export default async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
