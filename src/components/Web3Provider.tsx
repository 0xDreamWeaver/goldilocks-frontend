import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import { useTheme } from 'next-themes'
import React from 'react'
import { createConfig, http, WagmiProvider } from 'wagmi'
import { berachain, berachainTestnet, berachainTestnetbArtio } from 'wagmi/chains'

import { APP_NAME } from '@/lib/consts'

const config = createConfig(
	getDefaultConfig({
		chains: [berachain, berachainTestnet, berachainTestnetbArtio],
		transports: {
			[berachain.id]: http(`https://berachain-rpc.publicnode.com`),
			[berachainTestnet.id]: http(`https://berachain-testnet-rpc.publicnode.com`),
			[berachainTestnetbArtio.id]: http(`https://berachain-testnet-rpc.publicnode.com`),
		},

		walletConnectProjectId: process.env.WALLET_CONNECT_ID || '',
		appName: APP_NAME,
		appDescription: 'Goldilocks',
		appUrl: 'https://goldilocksdao.io',
		appIcon: 'https://goldilocksdao.io/logo.png',
	})
)

const queryClient = new QueryClient()

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
	const { resolvedTheme } = useTheme()

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
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
			</QueryClientProvider>
		</WagmiProvider>
	)
}

export default Web3Provider
