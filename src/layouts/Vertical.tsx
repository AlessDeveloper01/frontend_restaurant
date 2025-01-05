import React, { ReactNode, Suspense } from 'react'

import { Preloader } from '@/components'

const Topbar = React.lazy(() => import('./Topbar'))
const LeftSideBar = React.lazy(() => import('./LeftSideBar'))
const Footer = React.lazy(() => import('./Footer'))

const loading = () => <div />

interface VerticalLayoutProps {
	children?: ReactNode
}

const VerticalLayout = ({ children }: VerticalLayoutProps) => {
    return (
		<>
			<Suspense fallback={loading()}>
				<div className="flex wrapper">
					{
						<Suspense fallback={loading()}>
							<LeftSideBar hideUserProfile={true} isCondensed={true} isLight={false} />
						</Suspense>
					}

					<div className="page-content">
						<Suspense fallback={loading()}>
							<Topbar />
						</Suspense>

						<main className="p-6">
							<Suspense fallback={<Preloader />}>{children}</Suspense>
						</main>

						<Footer />
					</div>
				</div>
			</Suspense>
		</>
	)
}

export default VerticalLayout
