import React, { ReactNode } from 'react'

const VerticalForm = ({ children, onSubmit }: { children: ReactNode, onSubmit: any }) => {

	return (
		<form noValidate onSubmit={onSubmit}>
			{Array.isArray(children)
				? children.map((child) => {
						return child.props && child.props.name
							? React.createElement(child.type, {
									...{
										...child.props,
										key: child.props.name,
									},
							  })
							: child
				  })
				: children}
		</form>
	)
}

export default VerticalForm
