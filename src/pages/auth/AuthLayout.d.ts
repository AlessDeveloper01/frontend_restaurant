import 'swiper/swiper-bundle.css';
interface AccountLayoutProps {
    pageImage?: string;
    title: string;
    helpText?: string;
    bottomLinks?: any;
    isCombineForm?: boolean;
    children?: any;
    hasThirdPartyLogin?: boolean;
    starterClass?: boolean;
}
declare const AuthLayout: ({ pageImage, title, helpText, bottomLinks, children, starterClass }: AccountLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default AuthLayout;
