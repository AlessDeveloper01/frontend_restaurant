import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
const OffcanvasLayout = ({ open, toggleOffcanvas, children, placement, sizeClassName }) => {
    let enterFrom = 'translate-x-full rtl:-translate-x-full';
    let enterTo = 'translate-x-0';
    if (placement == 'bottom') {
        enterFrom = 'translate-y-full';
        enterTo = 'translate-y-0';
    }
    else if (placement == 'top') {
        enterFrom = '-translate-y-full';
        enterTo = 'translate-y-0';
    }
    else if (placement == 'start') {
        enterFrom = '-translate-x-full rtl:translate-x-full';
        enterTo = 'translate-x-0';
    }
    return (_jsx(_Fragment, { children: _jsx(Transition, { appear: true, show: open, as: Fragment, children: _jsxs(Dialog, { as: "div", className: "relative", onClose: toggleOffcanvas, children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 bg-black bg-opacity-40 z-40" }) }), _jsx(Transition.Child, { as: Fragment, enterFrom: enterFrom, enterTo: enterTo, leaveFrom: enterTo, leaveTo: enterFrom, children: _jsx("div", { className: `fixed duration-300 overflow-y-auto z-50 transform overflow-hidden card rounded-none shadow-xl transition-all ${sizeClassName ?? ''} ${placement ?? 'end'}-0 ${placement == 'top' || placement == 'bottom' ? 'min-w-full w-full inset-x-0' : 'min-h-full h-full inset-y-0'}`, children: _jsx(Dialog.Panel, { children: children }) }) })] }) }) }));
};
export default OffcanvasLayout;
