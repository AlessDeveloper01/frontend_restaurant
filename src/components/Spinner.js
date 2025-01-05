import { jsx as _jsx } from "react/jsx-runtime";
const Spinner = ({ tag = 'div', type = 'bordered', className, color, size, children }) => {
    const Tag = tag || 'div';
    return (_jsx(Tag, { role: "status", className: `${type === 'bordered' ? 'spinner-border' : type === 'grow' ? 'spinner-grow' : ''} ${color ? `text-${color}` : 'text-secondary'} ${size ? 'avatar-' + size : ''} ${className}`, children: children }));
};
export default Spinner;
