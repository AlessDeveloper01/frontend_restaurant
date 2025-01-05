import 'flatpickr/dist/themes/material_blue.css';
interface FlatpickrProps {
    className?: string;
    value?: Date | [Date, Date];
    options?: {};
    placeholder?: string;
}
declare const CustomFlatpickr: ({ className, value, options, placeholder }: FlatpickrProps) => import("react/jsx-runtime").JSX.Element;
export default CustomFlatpickr;
