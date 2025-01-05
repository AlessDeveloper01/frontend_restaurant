import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
/**
 * Datepicker with Input
 */
const DatePickerInput = forwardRef((props, ref) => {
    const onDateValueChange = () => {
        console.log('date value changed');
    };
    return _jsx("input", { type: "text", className: `form-control ${props.inputClass}`, onClick: props.onClick, value: props.value, onChange: onDateValueChange, ref: ref });
});
/**
 * Datepicker with addon input
 */
const DatePickerInputWithAddon = forwardRef((props, ref) => (_jsxs("div", { className: "input-group", ref: ref, children: [_jsx("input", { type: "text", className: `form-control ${props.inputClass}`, onClick: props.onClick, value: props.value, readOnly: true }), _jsx("span", { className: `input-group-text bg-${props.variant} border-${props.variant} text-white`, children: _jsx("i", { className: "ri-calendar-todo-fill fs-13" }) })] })));
const CustomDatepicker = (props) => {
    // handle custom input
    const input = (props.hideAddon || false) === true ? _jsx(DatePickerInput, { inputClass: props.inputClass, value: props.value.toDateString() }) : _jsx(DatePickerInputWithAddon, { variant: props.variant, inputClass: props.inputClass, value: props.value.toDateString() });
    return (_jsx(_Fragment, { children: _jsx(DatePicker, { customInput: input, timeIntervals: props.tI, selected: props.value, value: props.value.toDateString(), onChange: (date) => props.onChange(date), showTimeSelect: props.showTimeSelect, timeFormat: props.timeFormat || 'hh:mm a', timeCaption: props.timeCaption, dateFormat: props.dateFormat || 'MM/dd/yyyy', minDate: props.minDate, maxDate: props.maxDate, monthsShown: props.monthsShown, showTimeSelectOnly: props.showTimeSelectOnly, inline: props.inline, autoComplete: "off" }) }));
};
export default CustomDatepicker;
