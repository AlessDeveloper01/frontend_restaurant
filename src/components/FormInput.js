import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
/* Password Input */
const PasswordInput = ({ name, placeholder, refCallback, errors, register, className }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: showPassword ? 'text' : 'password', placeholder: placeholder, name: name, id: name, ref: (r) => {
                        if (refCallback)
                            refCallback(r);
                    }, className: `${className} ${errors && errors[name] ? 'border-red-500 text-red-700 -me-px' : ''}`, ...(register ? register(name) : {}), autoComplete: name }), _jsx("span", { className: "px-3 py-1 border rounded-e-md -ms-px dark:border-white/10", onClick: () => {
                        setShowPassword(!showPassword);
                    }, children: _jsx("i", { className: `${showPassword ? 'ri-eye-close-line' : 'ri-eye-line'} text-lg` }) })] }) }));
};
const FormInput = ({ label, type, name, placeholder, register, errors, className, labelClassName, labelContainerClassName, containerClass, refCallback, children, rows, ...otherProps }) => {
    const Tag = type === 'textarea' ? 'textarea' : type === 'select' ? 'select' : 'input';
    return (_jsx(_Fragment, { children: type === 'hidden' ? (_jsx("input", { type: type, name: name, ...(register ? register(name) : {}), ...otherProps })) : (_jsx(_Fragment, { children: type === 'password' ? (_jsx(_Fragment, { children: _jsxs("div", { className: containerClass ?? '', children: [label && (_jsxs("div", { className: labelContainerClassName ?? '', children: [_jsx("label", { className: labelClassName ?? '', htmlFor: name, children: label }), children] })), _jsx(PasswordInput, { name: name, placeholder: placeholder, refCallback: refCallback, errors: errors, register: register, className: className }), errors && errors[name] && (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3", children: _jsx("i", { className: "mgc_warning_fill text-xl text-red-500" }) }), _jsxs("p", { className: "text-xs text-red-600 mt-2", children: [" ", errors[name]['message']] })] }))] }) })) : (_jsx(_Fragment, { children: type === 'textarea' ? (_jsx(_Fragment, { children: _jsxs("div", { className: `${containerClass ?? ''} relative`, children: [label ? (_jsx("label", { className: labelClassName ?? '', htmlFor: name, children: label })) : null, _jsx(Tag, { placeholder: placeholder, name: name, id: name, rows: rows, ref: (r) => {
                                    if (refCallback)
                                        refCallback(r);
                                }, className: `${className} ${errors && errors[name] ? 'border-red-500 focus:border-red-500 text-red-700  pe-10' : ''}`, ...(register ? register(name) : {}), ...otherProps, autoComplete: name })] }) })) : (_jsx(_Fragment, { children: type === 'select' ? (_jsx(_Fragment, { children: _jsxs("div", { className: `${containerClass ?? ''} relative`, children: [label && (_jsx("label", { className: labelClassName ?? '', htmlFor: name, children: label })), _jsx(Tag, { name: name, id: name, ref: (r) => {
                                        if (refCallback)
                                            refCallback(r);
                                    }, className: className, ...(register ? register(name) : {}), ...otherProps, autoComplete: name, children: children })] }) })) : (_jsx(_Fragment, { children: type === 'checkbox' || type === 'radio' ? (_jsx(_Fragment, { children: _jsx("div", { className: containerClass ?? '', children: _jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: type, name: name, id: name, ref: (r) => {
                                                if (refCallback)
                                                    refCallback(r);
                                            }, className: `${className} ${errors && errors[name] ? 'border-red-500 focus:border-red-500 text-red-700  pe-10' : ''}`, ...(register ? register(name) : {}), ...otherProps }), _jsx("label", { className: labelClassName ?? '', htmlFor: name, children: label })] }) }) })) : (_jsx(_Fragment, { children: _jsxs("div", { className: containerClass ?? '', children: [label && (_jsx("label", { className: labelClassName ?? '', htmlFor: name, children: label })), _jsxs("div", { className: "relative", children: [_jsx("input", { type: type, placeholder: placeholder, name: name, id: name, ref: (r) => {
                                                    if (refCallback)
                                                        refCallback(r);
                                                }, className: `${className} ${errors && errors[name] ? 'border-red-500 focus:border-red-500 text-red-700  pe-10' : ''}`, ...(register ? register(name) : {}), ...otherProps, autoComplete: name }), errors && errors[name] && (_jsx("div", { className: "absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3", children: _jsx("i", { className: "ri-error-warning-fill text-xl text-red-500" }) }))] }), errors && errors[name] && _jsx("p", { className: "text-xs text-red-600 mt-2", children: errors[name]['message'] }), children ? children : null] }) })) })) })) })) })) }));
};
export default FormInput;
