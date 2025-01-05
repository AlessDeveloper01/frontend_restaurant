import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// components
import { PageBreadcrumb } from './';
import { ModalLayout } from './HeadlessUI';
//image
import logo from '@/assets/images/logo.png';
import logoDark from '@/assets/images/logo-dark.png';
const colors = ['bg-primary', 'bg-secondary', 'bg-info', 'bg-warning', 'bg-danger', 'bg-dark'];
const colors2 = ['bg-primary/90', 'bg-secondary/90', 'bg-info/90', 'bg-warning/90', 'bg-danger/90', 'bg-dark/90'];
const modalbasedAlert = [
    {
        icon: 'ri-check-line',
        title: 'Well Done!',
        variant: 'success',
    },
    {
        icon: 'ri-information-line',
        title: 'Heads up!',
        variant: 'info',
    },
    {
        icon: 'ri-alert-line',
        title: 'Incorrect Information',
        variant: 'warning',
    },
    {
        icon: 'ri-close-circle-line',
        title: 'Well Done!',
        variant: 'danger',
    },
];
const ModalExample = () => {
    const sizes = [
        {
            name: 'Standard Modal',
            width: 'sm:max-w-lg',
            variant: 'primary',
        },
        {
            name: 'Large Modal',
            width: 'max-w-7xl min-w-[1280px]',
            variant: 'info',
        },
        {
            name: 'Small Modal',
            width: 'sm:max-w-sm',
            variant: 'success',
        },
        {
            name: 'Full Width',
            width: 'w-[90vw]',
            variant: 'primary',
        },
        {
            name: 'Scrollable Modal',
            width: 'sm:max-w-lg',
            variant: 'primary',
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(null);
    const handleModal = (index) => () => {
        if (index === isModalOpen)
            setIsModalOpen(null);
        else
            setIsModalOpen(index);
    };
    return (_jsx("div", { className: "card", children: _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "card-title mb-4", children: "Example" }), _jsx("div", { className: "flex flex-wrap gap-3", children: (sizes || []).map((size, idx) => {
                        return (_jsxs("div", { children: [_jsxs("button", { className: `btn bg-${size.variant} text-white`, type: "button", onClick: handleModal(idx), children: [' ', size.name, ' '] }), _jsx(ModalLayout, { showModal: isModalOpen === idx, toggleModal: handleModal(idx), panelClassName: size.width, placement: " justify-center items-start", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800", children: [_jsxs("div", { className: "flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700", children: [_jsx("h3", { className: "font-medium text-gray-600 dark:text-white text-lg", children: "Modal Title" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", children: _jsx("i", { className: "ri-close-line text-2xl", onClick: handleModal(idx) }) })] }), _jsxs("div", { className: `${size.name === 'Scrollable Modal' ? 'max-h-80' : ''} p-4 overflow-y-auto`, children: [_jsx("h5", { className: "mb-2.5 text-base", children: "Text in a modal" }), _jsx("p", { className: "text-sm mb-4", children: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula." }), _jsx("hr", { className: "my-5 dark:border-gray-700" }), _jsx("h5", { className: "mb-2.5 text-base", children: "Overflowing text to show scroll behavior" }), _jsx("p", { className: "text-sm mb-4", children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }), _jsx("p", { className: "text-sm mb-4", children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }), _jsx("p", { className: "text-sm", children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." })] }), _jsxs("div", { className: "flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700", children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: handleModal(idx), children: "Close" }), _jsx(Link, { className: "btn bg-primary text-white", to: "", children: "Save Changes" })] })] }) })] }, idx));
                    }) })] }) }));
};
const ModalWithPages = () => {
    const [isModalOpen, setIsModalOpen] = useState(null);
    const handleModal = (index) => () => {
        if (index === isModalOpen)
            setIsModalOpen(null);
        else
            setIsModalOpen(index);
    };
    return (_jsx(_Fragment, { children: _jsx("div", { className: "card", children: _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "card-title mb-4", children: "Modal with Pages" }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsxs("div", { children: [_jsxs("button", { className: "btn bg-primary text-white", type: "button", onClick: handleModal(0), children: [' ', "Sign Up Modal", ' '] }), _jsx(ModalLayout, { showModal: isModalOpen === 0, toggleModal: handleModal(0), panelClassName: "w-[500px]", placement: "justify-center items-start", children: _jsx("div", { className: "duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800", children: _jsxs("div", { className: "p-4 overflow-y-auto", children: [_jsx("div", { className: "p-9", children: _jsxs(Link, { to: "/", className: "flex justify-center", children: [_jsx("img", { src: logo, alt: "logo", className: "h-6 hidden dark:block" }), _jsx("img", { src: logoDark, alt: "logo", className: "h-6 block dark:hidden" })] }) }), _jsxs("form", { className: "px-6", action: "#", children: [_jsxs("div", { className: "space-y-1 mb-6", children: [_jsx("label", { htmlFor: "username", className: "font-semibold text-gray-500", children: "Name" }), _jsx("input", { className: "form-input", type: "email", id: "username", required: true, placeholder: "Michael Zenaty" })] }), _jsxs("div", { className: "space-y-1 mb-6", children: [_jsx("label", { htmlFor: "emailaddress", className: "font-semibold text-gray-500", children: "Email address" }), _jsx("input", { className: "form-input", type: "email", id: "emailaddress", required: true, placeholder: "john@deo.com" })] }), _jsxs("div", { className: "space-y-1 mb-6", children: [_jsx("label", { htmlFor: "password", className: "font-semibold text-gray-500", children: "Password" }), _jsx("input", { className: "form-input", type: "password", required: true, id: "password", placeholder: "Enter your password" })] }), _jsx("div", { className: "mb-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", className: "form-checkbox rounded text-primary", id: "checkbox-signin" }), _jsxs("label", { className: "ms-2 text-sm font-medium text-gray-500", htmlFor: "checkbox-signin", children: ["I accept ", _jsx(Link, { to: "#", children: "Terms and Conditions" })] })] }) }), _jsx("div", { className: "mb-6 text-center", children: _jsx("button", { className: "btn bg-primary text-white", type: "submit", children: "Sign Up Free" }) })] })] }) }) })] }), _jsxs("div", { children: [_jsxs("button", { className: "btn bg-info text-white", type: "button", onClick: handleModal(1), children: [' ', "Log In Modal", ' '] }), _jsx(ModalLayout, { showModal: isModalOpen === 1, toggleModal: handleModal(1), panelClassName: "w-[500px]", placement: "justify-center items-start", children: _jsx("div", { className: "duration-300 ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800", children: _jsxs("div", { className: "p-4 overflow-y-auto", children: [_jsx("div", { className: "p-9", children: _jsxs(Link, { to: "/", className: "flex justify-center", children: [_jsx("img", { src: logo, alt: "logo", className: "h-6 hidden dark:block" }), _jsx("img", { src: logoDark, alt: "logo", className: "h-6 block dark:hidden" })] }) }), _jsxs("form", { className: "px-6", action: "#", children: [_jsxs("div", { className: "space-y-1 mb-6", children: [_jsx("label", { htmlFor: "emailaddress1", className: "font-semibold text-gray-500", children: "Email address" }), _jsx("input", { className: "form-input", type: "email", id: "emailaddress1", required: true, placeholder: "john@deo.com" })] }), _jsxs("div", { className: "space-y-1 mb-6", children: [_jsx("label", { htmlFor: "password1", className: "font-semibold text-gray-500", children: "Password" }), _jsx("input", { className: "form-input", type: "password", required: true, id: "password1", placeholder: "Enter your password" })] }), _jsx("div", { className: "mb-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", className: "form-checkbox rounded text-primary", id: "checkbox-signin" }), _jsx("label", { className: "ms-2 text-sm font-medium text-gray-500", htmlFor: "checkbox-signin", children: "Remember me" })] }) }), _jsx("div", { className: "mb-6 text-center", children: _jsx("button", { className: "btn bg-primary text-white rounded-full", type: "submit", children: "Sign In" }) })] })] }) }) })] })] })] }) }) }));
};
const ModalWithAlerts = () => {
    const [isModalOpen, setIsModalOpen] = useState(null);
    const handleModal = (index) => () => {
        if (index === isModalOpen)
            setIsModalOpen(null);
        else
            setIsModalOpen(index);
    };
    return (_jsx("div", { className: "card", children: _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "card-title mb-4", children: "Modal based Alerts" }), _jsx("div", { className: "flex flex-wrap gap-3", children: (modalbasedAlert || []).map((item, idx) => {
                        return (_jsxs(React.Fragment, { children: [_jsxs("button", { className: `btn bg-${item.variant} text-white`, onClick: handleModal(idx), type: "button", children: [item.variant.charAt(0).toUpperCase() + item.variant.slice(1), " Alert"] }), _jsx(ModalLayout, { showModal: isModalOpen === idx, toggleModal: handleModal(idx), panelClassName: "sm:max-w-xs", placement: "justify-center items-start", children: _jsx("div", { className: `duration-300 ease-in-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-${item.variant} shadow-sm rounded`, children: _jsx("div", { className: "p-9 overflow-y-auto", children: _jsxs("div", { className: "text-center text-white", children: [_jsx("i", { className: `${item.icon} text-4xl` }), _jsx("h4", { className: "text-xl font-medium mt-3 mb-2.5", children: item.title }), _jsx("p", { className: "mt-6 mb-4", children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam." }), _jsx("button", { type: "button", className: "btn bg-light text-gray-800 my-2", onClick: handleModal(idx), children: "Continue" })] }) }) }) })] }, idx));
                    }) })] }) }));
};
const ModalPositions = () => {
    const Positions = [
        {
            name: 'Top',
            placement: 'justify-center items-start',
        },
        {
            name: 'Bottom',
            placement: 'justify-center items-end',
        },
        {
            name: 'Center',
            placement: 'justify-center items-center',
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(null);
    const handleModal = (index) => () => {
        if (index === isModalOpen)
            setIsModalOpen(null);
        else
            setIsModalOpen(index);
    };
    return (_jsx("div", { className: "card", children: _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "card-title mb-4", children: "Modal Position" }), _jsx("div", { className: "flex flex-wrap gap-3", children: (Positions || []).map((item, idx) => {
                        return (_jsxs("div", { children: [_jsxs("button", { className: "btn bg-secondary text-white", type: "button", onClick: handleModal(idx), children: [item.name, " Modal"] }), _jsx(ModalLayout, { showModal: isModalOpen === idx, toggleModal: handleModal(idx), panelClassName: "sm:max-w-lg", placement: item.placement, children: _jsxs("div", { className: "duration-300 ease-in-out transition-all sm:w-full m-3 mt-0 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800", children: [_jsxs("div", { className: "flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700", children: [_jsx("h3", { className: "font-medium text-gray-800 dark:text-white text-lg", children: "Modal Title" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", children: _jsx("i", { className: "ri-close-line text-2xl", onClick: handleModal(idx) }) })] }), _jsx("div", { className: "p-4 overflow-y-auto", children: _jsx("p", { className: "text-gray-800 dark:text-gray-200", children: "This is a wider card with supporting text below as a natural lead-in to additional content." }) }), _jsxs("div", { className: "flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700", children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: handleModal(idx), type: "button", children: "Close" }), _jsx(Link, { className: "btn bg-primary text-white", to: "", children: "Save Changes" })] })] }) })] }, idx));
                    }) })] }) }));
};
const ModalWithColoredHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(null);
    const handleModal = (index) => () => {
        if (index === isModalOpen)
            setIsModalOpen(null);
        else
            setIsModalOpen(index);
    };
    return (_jsx("div", { className: "card", children: _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "card-title mb-4", children: "Colored Header Modals" }), _jsx("div", { className: "flex flex-wrap gap-2", children: (colors || []).map((color, idx) => {
                        return (_jsxs("div", { children: [_jsxs("button", { className: `btn ${color} text-white`, type: "button", onClick: handleModal(idx), children: [' ', color.charAt(3).toUpperCase() + color.slice(4), " Header", ' '] }), _jsx(ModalLayout, { showModal: isModalOpen === idx, toggleModal: handleModal(idx), panelClassName: "sm:max-w-lg mt-3", placement: "justify-center items-start", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all sm:max-w-lg  flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700", children: [_jsxs("div", { className: `flex justify-between items-center py-2.5 px-4 ${color} dark:border-gray-700`, children: [_jsx("h3", { className: "font-medium text-white text-lg", children: "Modal Title" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", children: _jsx("i", { className: "ri-close-line text-2xl text-white", onClick: handleModal(idx) }) })] }), _jsxs("div", { className: "p-4 overflow-y-auto", children: [_jsxs("h5", { className: "mb-2.5 text-base", children: [color.charAt(3).toUpperCase() + color.slice(4), " Background"] }), _jsx("p", { className: "text-sm mb-4", children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }), _jsx("p", { className: "text-sm mb-4", children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." })] }), _jsxs("div", { className: "flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700", children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: handleModal(idx), children: "Close" }), _jsx(Link, { className: `btn ${color} text-white`, to: "", children: "Save Changes" })] })] }) })] }, idx));
                    }) })] }) }));
};
const ModalWithColorFilled = () => {
    const [isModalOpen, setIsModalOpen] = useState(null);
    const handleModal = (index) => () => {
        if (index === isModalOpen)
            setIsModalOpen(null);
        else
            setIsModalOpen(index);
    };
    return (_jsx("div", { className: "card", children: _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "card-title mb-4", children: "Colored Filled Modals" }), _jsx("div", { className: "flex flex-wrap gap-2", children: (colors || []).map((color, idx) => {
                        return (_jsxs("div", { children: [_jsxs("button", { className: `btn ${color} text-white`, type: "button", onClick: handleModal(idx), children: [' ', color.charAt(3).toUpperCase() + color.slice(4), " Filled", ' '] }), _jsx(ModalLayout, { showModal: isModalOpen === idx, toggleModal: handleModal(idx), panelClassName: "sm:max-w-lg", placement: "justify-center items-start", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700", children: [_jsxs("div", { className: `flex justify-between items-center py-2.5 px-4 ${colors2[idx]} dark:border-gray-700`, children: [_jsx("h3", { className: "font-medium text-white text-lg", children: "Modal Title" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", children: _jsx("i", { className: "ri-close-line text-2xl text-white", onClick: handleModal(idx) }) })] }), _jsxs("div", { className: `p-4 ${color} text-white overflow-y-auto`, children: [_jsxs("h5", { className: "mb-2.5 text-base", children: [color.charAt(3).toUpperCase() + color.slice(4), " Background"] }), _jsx("p", { className: "text-sm mb-4", children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }), _jsx("p", { className: "text-sm mb-4", children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." })] }), _jsxs("div", { className: `flex justify-end items-center gap-2 p-4 border-t ${color} border-white/5`, children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: handleModal(idx), children: "Close" }), _jsx(Link, { className: "btn border-light hover:bg-light hover:text-gray-800 text-white", to: "", children: "Save Changes" })] })] }) })] }, idx));
                    }) })] }) }));
};
const MultipleModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(null);
    const handleModal = (index) => () => {
        if (index === isModalOpen)
            setIsModalOpen(null);
        else
            setIsModalOpen(index);
    };
    return (_jsx("div", { className: "card", children: _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "card-title mb-4", children: "Multiple Modal" }), _jsxs("div", { children: [_jsxs("button", { className: "btn bg-primary text-white", type: "button", onClick: handleModal(0), children: [' ', "Standard Modal", ' '] }), _jsx(ModalLayout, { showModal: isModalOpen === 0, toggleModal: handleModal(0), panelClassName: "sm:max-w-lg", placement: "justify-center items-start", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800", children: [_jsxs("div", { className: "flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700", children: [_jsx("h3", { className: "font-medium text-gray-600 dark:text-white text-lg", children: "Modal Title" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", children: _jsx("i", { className: "ri-close-line text-2xl", onClick: handleModal(0) }) })] }), _jsxs("div", { className: "p-4 overflow-y-auto", children: [_jsx("h5", { className: "mb-2.5 text-base", children: "Text in a modal" }), _jsx("p", { className: "text-sm mb-4", children: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula." })] }), _jsx("div", { className: "flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700", children: _jsx("button", { className: "btn bg-primary text-white", onClick: handleModal(1), children: "Next" }) })] }) }), _jsx(ModalLayout, { showModal: isModalOpen === 1, toggleModal: handleModal(1), placement: "justify-center items-start", panelClassName: "sm:max-w-lg mt-3", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all m-3 my-0 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800", children: [_jsxs("div", { className: "flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700", children: [_jsx("h3", { className: "font-medium text-gray-600 dark:text-white text-lg", children: "Modal Title" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", children: _jsx("i", { className: "ri-close-line text-2xl", onClick: handleModal(1) }) })] }), _jsxs("div", { className: "p-4 overflow-y-auto", children: [_jsx("h5", { className: "mb-2.5 text-base", children: "Text in a modal" }), _jsx("p", { className: "text-sm mb-4", children: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula." })] }), _jsx("div", { className: "flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700", children: _jsx("button", { className: "btn bg-primary text-white transition-all", onClick: handleModal(1), children: "Close" }) })] }) })] })] }) }));
};
const FullscreenModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (_jsx("div", { className: "card", children: _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "card-title mb-4", children: "Fullscreen Modal" }), _jsxs("div", { children: [_jsxs("button", { className: "btn bg-primary text-white", type: "button", onClick: handleModal, children: [' ', "Standard Modal", ' '] }), _jsx(ModalLayout, { showModal: isModalOpen, toggleModal: handleModal, panelClassName: "w-screen", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all flex flex-col bg-white shadow-sm rounded h-[100vh] dark:bg-gray-800", children: [_jsxs("div", { className: "flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700", children: [_jsx("h3", { className: "font-medium text-gray-600 dark:text-white text-lg", children: "Modal Title" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", children: _jsx("i", { className: "ri-close-line text-2xl", onClick: handleModal }) })] }), _jsxs("div", { className: "p-4 overflow-y-auto", children: [_jsx("h5", { className: "mb-2.5 text-base", children: "Text in a modal" }), _jsx("p", { className: "text-sm mb-4", children: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula." })] }), _jsxs("div", { className: "flex justify-end items-center gap-4 p-4 mt-auto border-t dark:border-gray-700", children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: handleModal, children: "Close" }), _jsx(Link, { className: "btn bg-primary text-white", to: "", children: "Save Changes" })] })] }) })] })] }) }));
};
const Modals = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumb, { title: "Modals", subName: "Base UI" }), _jsxs("div", { className: "grid 2xl:grid-cols-2 grid-cols-1 gap-6", children: [_jsx(ModalExample, {}), _jsx(ModalWithPages, {}), _jsx(ModalWithAlerts, {}), _jsx(ModalPositions, {}), _jsx(ModalWithColoredHeader, {}), _jsx(ModalWithColorFilled, {}), _jsx(MultipleModal, {}), _jsx(FullscreenModal, {})] })] }));
};
export default Modals;
