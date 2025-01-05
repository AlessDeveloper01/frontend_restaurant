import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// helpers
import { findAllParent, findMenuItem } from '../helpers/menu';
import { SimpleCollapse } from '@/components/FrostUI';
const MenuItemWithChildren = ({ item, linkClassName, subMenuClassNames, activeMenuItems, toggleMenu }) => {
    const [open, setOpen] = useState(activeMenuItems.includes(item.key));
    useEffect(() => {
        setOpen(activeMenuItems.includes(item.key));
    }, [activeMenuItems, item]);
    const toggleMenuItem = () => {
        const status = !open;
        setOpen(status);
        if (toggleMenu)
            toggleMenu(item, status);
        return false;
    };
    return (_jsxs("li", { className: `menu-item ${open ? 'menuitem-active' : ''}`, children: [_jsxs(Link, { to: "#", className: `${linkClassName} ${activeMenuItems.includes(item.key) ? 'open' : ''}`, "aria-expanded": open, "data-menu-key": item.key, onClick: toggleMenuItem, children: [item.icon && (_jsx("span", { className: "menu-icon", children: _jsx("i", { className: item.icon }) })), _jsxs("span", { className: "menu-text", children: [" ", item.label] }), !item.badge ? _jsx("span", { className: "menu-arrow" }) : _jsx("span", { className: `badge ${item.badge.variant}`, children: item.badge.text })] }), _jsx(SimpleCollapse, { open: open, as: "ul", classNames: subMenuClassNames + ' sub-menu', children: (item.children || []).map((child, idx) => {
                    return _jsx(React.Fragment, { children: child.children ? _jsx(MenuItemWithChildren, { item: child, linkClassName: activeMenuItems.includes(child.key) ? 'active' : '', activeMenuItems: activeMenuItems, subMenuClassNames: "sub-menu", toggleMenu: toggleMenu }) : _jsx(MenuItem, { item: child, className: activeMenuItems.includes(child.key) ? 'menuitem-active' : '', linkClassName: activeMenuItems.includes(child.key) ? 'active' : '' }) }, idx);
                }) })] }));
};
const MenuItem = ({ item, className, linkClassName }) => {
    return (_jsx("li", { className: `menu-item ${className}`, children: _jsx(MenuItemLink, { item: item, className: linkClassName }) }));
};
const MenuItemLink = ({ item, className }) => {
    return (_jsxs(Link, { to: item.url, target: item.target, className: `menu-link side-nav-link-ref ${className}`, "data-menu-key": item.key, children: [item.icon && (_jsx("span", { className: "menu-icon", children: _jsx("i", { className: item.icon }) })), _jsxs("span", { className: "menu-text", children: [" ", item.label] }), item.badge && _jsx("span", { className: `badge ${item.badge.variant}`, children: item.badge.text })] }));
};
const AppMenu = ({ menuItems }) => {
    const location = useLocation();
    const menuRef = useRef(null);
    const [activeMenuItems, setActiveMenuItems] = useState([]);
    /**
     * toggle the menus
     */
    const toggleMenu = (menuItem, show) => {
        if (show) {
            setActiveMenuItems([menuItem['key'], ...findAllParent(menuItems, menuItem)]);
        }
    };
    /**
     * activate the menuitems
     */
    const activeMenu = useCallback(() => {
        const div = document.getElementById('main-side-menu');
        let matchingMenuItem = null;
        if (div) {
            const items = div.getElementsByClassName('side-nav-link-ref');
            for (let i = 0; i < items.length; ++i) {
                let trimmedURL = location?.pathname?.replaceAll(process.env.PUBLIC_URL || '', '');
                const url = items[i].pathname;
                if (trimmedURL === process.env.PUBLIC_URL + '/') {
                    trimmedURL += 'ecommerce';
                }
                if (trimmedURL === url?.replaceAll(process.env.PUBLIC_URL, '')) {
                    matchingMenuItem = items[i];
                    break;
                }
            }
            if (matchingMenuItem) {
                const mid = matchingMenuItem.getAttribute('data-menu-key');
                const activeMt = findMenuItem(menuItems, mid);
                if (activeMt) {
                    setActiveMenuItems([activeMt['key'], ...findAllParent(menuItems, activeMt)]);
                }
                setTimeout(function () {
                    const activatedItem = matchingMenuItem;
                    if (activatedItem != null) {
                        const simplebarContent = document.querySelector('#leftside-menu-container .simplebar-content-wrapper');
                        const offset = activatedItem.offsetTop - 300;
                        if (simplebarContent && offset > 100) {
                            scrollTo(simplebarContent, offset, 600);
                        }
                    }
                }, 200);
                // scrollTo (Left Side Bar Active Menu)
                const easeInOutQuad = (t, b, c, d) => {
                    t /= d / 2;
                    if (t < 1)
                        return (c / 2) * t * t + b;
                    t--;
                    return (-c / 2) * (t * (t - 2) - 1) + b;
                };
                const scrollTo = (element, to, duration) => {
                    const start = element.scrollTop, change = to - start, increment = 20;
                    let currentTime = 0;
                    const animateScroll = function () {
                        currentTime += increment;
                        const val = easeInOutQuad(currentTime, start, change, duration);
                        element.scrollTop = val;
                        if (currentTime < duration) {
                            setTimeout(animateScroll, increment);
                        }
                    };
                    animateScroll();
                };
            }
        }
    }, [location, menuItems]);
    useEffect(() => {
        activeMenu();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (_jsx(_Fragment, { children: _jsx("ul", { className: "menu", ref: menuRef, id: "main-side-menu", children: (menuItems || []).map((item, idx) => {
                return _jsx(React.Fragment, { children: item.isTitle ? _jsx("li", { className: "menu-title", children: item.label }) : _jsx(_Fragment, { children: item.children ? _jsx(MenuItemWithChildren, { item: item, toggleMenu: toggleMenu, subMenuClassNames: "", activeMenuItems: activeMenuItems, linkClassName: "menu-link" }) : _jsx(MenuItem, { item: item, linkClassName: "menu-link", className: activeMenuItems.includes(item.key) ? 'menuitem-active' : '' }) }) }, idx);
            }) }) }));
};
export default AppMenu;
