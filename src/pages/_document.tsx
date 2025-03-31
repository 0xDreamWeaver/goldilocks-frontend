import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Replace with your own typekit key
          <link rel="stylesheet" href="https://use.typekit.net/XXXXX.css" /> */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				{/* Replace with your own fontawesome bundle
          <Script src="https://kit.fontawesome.com/XXXXXXX.js" crossOrigin="anonymous"></Script> */}
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Prompt:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body style={{ backgroundColor: '#000000' }}>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
