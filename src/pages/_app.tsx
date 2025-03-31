import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import React, { ReactElement, useEffect, useRef, useState } from 'react'

import Web3Provider from '@/components/Web3Provider'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider attribute="class">
			<Web3Provider>
				<Component {...pageProps} />
			</Web3Provider>
		</ThemeProvider>
	)
}

export default App
