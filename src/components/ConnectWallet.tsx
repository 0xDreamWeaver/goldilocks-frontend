import { ConnectKitButton } from 'connectkit'
import { FC } from 'react'
import { useAccount } from 'wagmi'

type Visibility = 'always' | 'connected' | 'not_connected'

const ConnectWallet: FC<{ show?: Visibility }> = ({ show = 'always' }) => {
	const { isConnected } = useAccount()

	if ((show == 'connected' && !isConnected) || (show == 'not_connected' && isConnected)) return null

	return <ConnectKitButton />
}

export default ConnectWallet
