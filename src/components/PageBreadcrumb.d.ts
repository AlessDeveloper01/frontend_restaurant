import { ReactNode } from 'react';
interface PageTitleProps {
    subName?: string;
    title: string;
    addedChild?: ReactNode;
}
declare const PageBreadcrumb: ({ subName, title, addedChild }: PageTitleProps) => import("react/jsx-runtime").JSX.Element;
export default PageBreadcrumb;
