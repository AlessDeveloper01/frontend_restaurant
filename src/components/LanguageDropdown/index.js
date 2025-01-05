import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// assets
import enFlag from './flags/us.jpg';
import germanyFlag from './flags/germany.jpg';
import italyFlag from './flags/italy.jpg';
import spainFlag from './flags/spain.jpg';
import russiaFlag from './flags/russia.jpg';
import PopoverLayout from '../HeadlessUI/PopoverLayout';
import usFlag from '@/assets/images/flags/us.jpg';
// get the languages and flags
const languages = [
    {
        name: 'English',
        flag: enFlag,
    },
    {
        name: 'German',
        flag: germanyFlag,
    },
    {
        name: 'Italian',
        flag: italyFlag,
    },
    {
        name: 'Spanish',
        flag: spainFlag,
    },
    {
        name: 'Russian',
        flag: russiaFlag,
    },
];
const LanguageDropdown = () => {
    const PopoverToggler = () => {
        return (_jsxs("span", { className: "flex items-center gap-2", children: [_jsx("img", { src: usFlag, alt: "flag-image", className: "h-3" }), _jsxs("div", { className: "lg:block hidden", children: [_jsx("span", { children: "English" }), "\u00A0", _jsx("i", { className: "ri-arrow-down-s-line" })] })] }));
    };
    return (_jsx(PopoverLayout, { placement: "bottom-end", togglerClass: "nav-link p-2", toggler: _jsx(PopoverToggler, {}), children: _jsx("div", { className: "absolute end-0 w-40 mt-1 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg py-2", children: (languages || []).map((lang, idx) => (_jsxs("section", { className: "flex items-center gap-2.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300", children: [_jsx("img", { src: lang.flag, alt: "user-image", className: "h-4" }), _jsx("span", { className: "align-middle", children: lang.name })] }, idx))) }) }));
};
export default LanguageDropdown;
