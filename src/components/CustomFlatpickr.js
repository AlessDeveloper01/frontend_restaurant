import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
const CustomFlatpickr = ({ className, value, options, placeholder }) => {
    return (_jsx(_Fragment, { children: _jsx(Flatpickr, { className: className, "data-enable-time": true, value: value, options: options, placeholder: placeholder }) }));
};
export default CustomFlatpickr;
