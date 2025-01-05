import { ReactNode } from 'react';
interface AccountLayoutProps {
    pageImage?: string;
    authTitle?: string;
    helpText?: string;
    bottomLinks?: ReactNode;
    isCombineForm?: boolean;
    children?: ReactNode;
    hasForm?: boolean;
}
declare const AuthLayout: ({ pageImage, authTitle, helpText, bottomLinks, children }: AccountLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default AuthLayout;
