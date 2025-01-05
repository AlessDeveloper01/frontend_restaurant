import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
const SimpleCollapse = ({ open, children, classNames, as: tag = 'div' }) => {
    const ref = useRef(null);
    const height = open ? ref.current?.scrollHeight ?? 0 : 0;
    const Tag = tag;
    return (_jsx(Tag, { ref: ref, className: `transition-all overflow-hidden ${classNames ? classNames : ''}`, style: { height: height }, children: children }));
};
export default SimpleCollapse;
