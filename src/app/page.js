import Head from 'next/head'

export default function SixxHxRx() {
  return (
    <>
      <Head>
        <title>Sixx Cloud – Teu Site Profissional</title>
        <meta name="description" content="A plataforma SixxCloud para hospedagem e soluções tecnológicas." />
        <meta property="og:title" content="Sixx Cloud – Teu Site Profissional" />
        <meta property="og:description" content="A plataforma SixxCloud para hospedagem e soluções tecnológicas." />
        <meta property="og:image" content="https://files.catbox.moe/bo4gra.jpeg" />
        <meta property="og:url" content="https://sixxcloud.vercel.app" />
      </Head>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0
      }}>
        <h1>SixxHxRx</h1>
      </div>
    </>
  );
}