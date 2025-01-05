import React from 'react';
interface SpinnerProps {
    tag?: React.ElementType;
    className?: string;
    size?: 'lg' | 'md' | 'sm';
    type?: 'bordered' | 'grow';
    color?: string;
    children?: React.ReactNode;
}
declare const Spinner: ({ tag, type, className, color, size, children }: SpinnerProps) => import("react/jsx-runtime").JSX.Element;
export default Spinner;
