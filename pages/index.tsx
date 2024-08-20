import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Verdde</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hju6dgk.css" />
      </Head>
      <div className="wrapper">
        <figure>
          <img src="https://cdn.glitch.global/7f2ed5cd-b85b-4c16-9571-1ad36768dace/verdde.png?v=1715087697425" />
        </figure>
        <section className="text">
          <span className="intro">Buoris, vad roligt att du hittat hit!<br /></span>
          Kom tillbaka igen under höstsommaren för mer innehåll.<br />
          Tills dess finns vi på <a href="https://www.instagram.com/verddekonst">@verddekonst</a> och <a href="mailto:info@verdde.net">info@verdde.net</a></section>
      </div>
    </>
  );
}
