import { InputHTMLAttributes, ReactNode } from 'react';
import { Control } from 'react-hook-form';
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: string;
    name: string;
    placeholder?: string;
    register?: any;
    errors?: any;
    control?: Control<any>;
    className?: string;
    labelContainerClassName?: string;
    labelClassName?: string;
    containerClass?: string;
    refCallback?: any;
    children?: ReactNode;
    rows?: number;
}
declare const FormInput: ({ label, type, name, placeholder, register, errors, className, labelClassName, labelContainerClassName, containerClass, refCallback, children, rows, ...otherProps }: FormInputProps) => import("react/jsx-runtime").JSX.Element;
export default FormInput;
