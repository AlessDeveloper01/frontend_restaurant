import { Suspense } from 'react'

const loading = () => <div />

interface DefaultLayoutProps {
	children?: React.ReactNode
}

const DefaultLayout = (props: DefaultLayoutProps) => {
	const children = props['children'] || null

	return (
		<>
			<Suspense fallback={loading()}>{children}</Suspense>
		</>
	)
}

export default DefaultLayout
