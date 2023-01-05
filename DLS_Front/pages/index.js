import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DLS Games</title>
        <meta name="description" content="Created by Ryan" />
      </Head>
      <div className="home">
        <h2>This is the home page</h2>
        <h3>This is a mock website for DLS Games</h3>
      </div>
    </div>
  );
}
