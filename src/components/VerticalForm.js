import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
const VerticalForm = ({ children, onSubmit }) => {
    return (_jsx("form", { noValidate: true, onSubmit: onSubmit, children: Array.isArray(children)
            ? children.map((child) => {
                return child.props && child.props.name
                    ? React.createElement(child.type, {
                        ...{
                            ...child.props,
                            key: child.props.name,
                        },
                    })
                    : child;
            })
            : children }));
};
export default VerticalForm;
