/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Script src="../selection.js" strategy="afterInteractive" />
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold" id="title">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a id="home" className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a id="sell" className="mr-6 text-pink-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a id="my" className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a id="dashboard" className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp
