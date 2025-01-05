import React, { useEffect, useState } from "react";

import TopBarSearch from "../components/TopBarSearch";
import MaximizeScreen from "../components/MaximizeScreen";
import { getMenuItems } from "@/helpers/menu";
import { Link } from "react-router-dom";
import axios from "axios";

export interface NotificationItem {
    id: number;
    text: string;
    subText: string;
    icon?: string;
    avatar?: string;
    bgColor?: string;
    createdAt: Date;
}

function Menu({ onLinkClick }: { onLinkClick: () => void }) {
    const items = getMenuItems();
    return (
        <nav className="bg-white shadow-md p-8 min-h-screen list-none">
            {items.map((item, index) =>
                item.children ? (
                    <li key={index} className="flex items-end">
                        <ul className="list-none">
                            {item.children.map((child, index) => (
                                <li key={index} className="gap-3.5 text-gray-700 hover:text-primary-500 text-2xl">
                                    {child.url && linkTemplate(child.url, child.icon!, child.label, onLinkClick)}
                                </li>
                            ))}
                        </ul>
                    </li>
                ) :
                item.isTitle ? (
                    <li key={index} className="font-black text-gray-700 uppercase border-b my-4 border-gray-300">
                        <p className="text-xl my-4">{item.label}</p>
                    </li>
                ) : (
                    <li key={index} className="flex items-center gap-3.5 text-black hover:text-primary-500 text-2xl">
                        {item.url && linkTemplate(item.url, item.icon!, item.label, onLinkClick)}
                    </li>
                )
            )}
        </nav>
    );
}

const linkTemplate = (url: string, icon: string, label: string, onClick: () => void) => {
    return (
        <Link to={url} className="flex items-center my-2" onClick={onClick}>
            <i className={icon}></i>
            <span className="ml-2 text-sm font-black text-gray-600 uppercase">{label}</span>
        </Link>
    );
}

const Topbar = () => {
    const [toggle, setToggle] = useState(false);
    const [profilePerson, setProfilePerson] = useState({
        name: "",
        email: "",
        permissions: [],
    });

    const getProfile = async () => {
        try {
            const token = localStorage.getItem("restaurante_token");
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`, {
                headers: {
                    Authorization: token,
                }
            });
            const { name, email, permissions } = response.data;
            setProfilePerson({
                name,
                email,
                permissions,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    const setterMenu = () => {
        setToggle(!toggle);
        if (!toggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const leaveAccount = () => {
        localStorage.removeItem("restaurante_token");
        window.location.href = "/auth/login";
    };
    return (
        <>
            <header className="app-header flex items-center px-4 gap-3.5 relative justify-between">
                <div
                    className={`absolute left-0 top-[70px] flex items-center gap-3.5 lg:hidden z-50 transition-transform duration-300 ${
                        toggle ? "transform translate-x-0" : "transform -translate-x-full"
                    }`}
                >
                    <Menu onLinkClick={setterMenu} />
                </div>

                <button id="button-toggle-menu" className="nav-link p-2 lg:hidden" onClick={setterMenu}>
                    <span className="sr-only">Menu Toggle Button</span>
                    <span className="flex items-center justify-center">
                        <i className="ri-menu-2-fill text-2xl"></i>
                    </span>
                </button>

                <div className="flex">
                    <div className="flex flex-wrap items-end gap-3">
                        <div className="flex-shrink-0 group block">
                            <div className="flex items-center">
                                <div className="ms-3">
                                    <h3 className="text-xs lg:text-md font-semibold text-gray-800 dark:text-white">Usuario: <span className="text-primary font-bold">{profilePerson.name}</span></h3>
                                    <p className="text-xs lg:text-md font-semibold text-gray-800 dark:text-white">Correo: <span className="text-primary font-bold">{profilePerson.email}</span></p>
                                </div>
                                <div className="flex ml-5">
                                    <button className="px-1 py-0 lg:px-2 lg:py-1 bg-danger text-white rounded-md hover:bg-danger/60 transition-all duration-300 flex gap-2 items-center" onClick={leaveAccount}>
                                        <i className="ri-user-received-2-fill text-2xl"></i>{' '} Salir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex hidden ms-auto">
                    <MaximizeScreen />
                </div>
            </header>
        </>
    );
};

export default Topbar;
