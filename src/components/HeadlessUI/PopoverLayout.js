import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment } from 'react';
import { Float } from '@headlessui-float/react';
import { Popover, Transition } from '@headlessui/react';
const PopoverLayout = ({ children, toggler, togglerClass, placement, menuClass }) => {
    return (_jsx(Popover, { className: "relative", children: _jsx(_Fragment, { children: _jsxs(Float, { placement: placement, children: [_jsx(Popover.Button, { className: togglerClass ?? '', children: toggler }), _jsx(Transition, { as: Fragment, enter: "transition ease-out duration-200", enterFrom: "opacity-0 translate-y-1", enterTo: "opacity-100 translate-y-0", leave: "transition ease-out duration-200", leaveFrom: "opacity-100 translate-y-0", leaveTo: "opacity-0 translate-y-1", children: _jsx(Popover.Panel, { className: menuClass ?? '', children: children }) })] }) }) }));
};
export default PopoverLayout;
