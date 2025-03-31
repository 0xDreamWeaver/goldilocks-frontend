import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import { useTheme } from 'next-themes'
import React from 'react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, arbitrumGoerli, base, goerli, localhost, mainnet } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { APP_NAME } from '@/lib/consts'

// @todo Replace these with real keys
const ETH_KEY = ''
const ARBI_KEY = ''

const { publicClient, chains } = configureChains(
	[arbitrum, arbitrumGoerli, localhost, mainnet, goerli],
	[
		// First try alchemy ETH
		alchemyProvider({
			apiKey: ETH_KEY,
		}),
		// Then try alchemy ARBITRUM
		alchemyProvider({
			apiKey: ARBI_KEY,
		}),
		// Then default to public provider
		publicProvider(),
	]
)

const client = createConfig(
	getDefaultConfig({
		// @todo Replace with a real Wallet Connect project ID
		walletConnectProjectId: '',
		appName: APP_NAME,
		chains: [arbitrum, arbitrumGoerli, localhost, mainnet, goerli, base],
		autoConnect: true,
		alchemyId: ETH_KEY,
		publicClient,
		// alchemyId: process.env.ALCHEMY_KEY,
	})
)

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
	const { resolvedTheme } = useTheme()

	return (
		<WagmiConfig config={client}>
			<ConnectKitProvider
				theme="midnight"
				mode="auto"
				customTheme={{
					'--ck-connectbutton-color': '#a1a1aa',
					'--ck-connectbutton-hover-color': '#ffffff',
					'--ck-connectbutton-border-radius': '0px',
					'--ck-connectbutton-box-shadow': '0',
					'--ck-connectbutton-background': 'rgba(0,0,0,0)',
					'--ck-connectbutton-hover-background': 'rgba(0,0,0,0)',
					'--ck-connectbutton-active-color': 'rgb(34 197 94)',
					'--ck-connectbutton-active-background': 'rgba(0,0,0,0)',
					'--ck-border-radius': '0px',
					'--ck-font-family': '"interstate-mono", monospace',
					'--ck-body-background': '#0a100d',
					'--ck-accent-color': '#222222',
					'--ck-accent-text-color': '#ffe7bc',
					'--ck-primary-button-border-radius': '0px',
					'--ck-secondary-button-border-radius': '0px',
				}}
			>
				{children}
			</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
