interface ProfileMenuItem {
    label: string;
    icon: string;
    redirectTo: string;
}
interface ProfileDropDownProps {
    menuItems: Array<ProfileMenuItem>;
    profiliePic?: string;
    username: string;
    userTitle?: string;
}
declare const ProfileDropDown: (props: ProfileDropDownProps) => import("react/jsx-runtime").JSX.Element;
export default ProfileDropDown;
