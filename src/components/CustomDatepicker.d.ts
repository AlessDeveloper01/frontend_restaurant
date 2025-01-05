import 'react-datepicker/dist/react-datepicker.css';
interface CustomDatepickerProps {
    value: Date;
    onChange: (date: any) => void;
    hideAddon?: boolean;
    variant?: string;
    inputClass: string;
    dateFormat?: string;
    minDate?: Date;
    maxDate?: Date;
    showTimeSelect?: boolean;
    tI?: number;
    timeCaption?: string;
    timeFormat?: string;
    showTimeSelectOnly?: boolean;
    monthsShown?: number;
    inline?: boolean;
}
declare const CustomDatepicker: (props: CustomDatepickerProps) => import("react/jsx-runtime").JSX.Element;
export default CustomDatepicker;
