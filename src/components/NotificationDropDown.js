import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import PopoverLayout from './HeadlessUI/PopoverLayout';
const NotificationDropdown = ({ notifications }) => {
    /**
     * Get time since
     */
    function timeSince(date) {
        if (typeof date !== 'object') {
            date = new Date(date);
        }
        const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);
        let intervalType;
        let interval = Math.floor(seconds / 31536000);
        if (interval >= 1) {
            intervalType = 'year';
        }
        else {
            interval = Math.floor(seconds / 2592000);
            if (interval >= 1) {
                intervalType = 'month';
            }
            else {
                interval = Math.floor(seconds / 86400);
                if (interval >= 1) {
                    intervalType = 'day';
                }
                else {
                    interval = Math.floor(seconds / 3600);
                    if (interval >= 1) {
                        intervalType = 'hour';
                    }
                    else {
                        interval = Math.floor(seconds / 60);
                        if (interval >= 1) {
                            intervalType = 'minute';
                        }
                        else {
                            interval = seconds;
                            intervalType = 'second';
                        }
                    }
                }
            }
        }
        if (interval > 1 || interval === 0) {
            intervalType += 's';
        }
        return interval + ' ' + intervalType + ' ago';
    }
    let previousDate = null;
    let currentDate = null;
    const PopoverToggler = () => {
        return (_jsxs(_Fragment, { children: [_jsx("span", { className: "sr-only", children: "View notifications" }), _jsxs("span", { className: "flex items-center justify-center", children: [_jsx("i", { className: "ri-notification-3-line text-2xl" }), _jsx("span", { className: "absolute top-5 end-2.5 w-2 h-2 rounded-full bg-danger" })] })] }));
    };
    return (_jsx(_Fragment, { children: _jsx(PopoverLayout, { placement: "bottom-end", togglerClass: "nav-link p-2", toggler: _jsx(PopoverToggler, {}), children: _jsxs("div", { className: "absolute mt-1 end-0 w-80 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg", children: [_jsx("div", { className: "p-3 border-b border-gray-200 dark:border-gray-700", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h6", { className: "text-sm text-gray-500 dark:text-gray-200", children: " Notification" }), _jsx(Link, { to: "#", className: "text-gray-500 dark:text-gray-200 underline", children: _jsx("small", { children: "Clear All" }) })] }) }), _jsx(SimpleBar, { className: "py-4 h-80", children: (notifications || []).map((notification, idx) => {
                            const todayDate = new Date().getDate();
                            currentDate = notification.createdAt.getDate();
                            let labelName = '';
                            if (previousDate !== currentDate) {
                                previousDate = currentDate;
                                if (todayDate === currentDate) {
                                    labelName = 'Today';
                                }
                                else if (todayDate - currentDate === 1) {
                                    labelName = 'Yesterday';
                                }
                                else {
                                    labelName = `${new Date().toLocaleDateString()}`;
                                }
                                return (_jsxs(React.Fragment, { children: [_jsx("h5", { className: "text-xs text-gray-500 dark:text-gray-200 px-4 mb-2", children: labelName }), _jsx(Link, { to: "#", className: "block mb-4", children: _jsx("div", { className: "py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0", children: notification.avatar ? (_jsx("img", { src: notification.avatar, className: "rounded-full h-9 w-9", alt: "" })) : (_jsx("div", { className: `flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-${notification.bgColor}`, children: _jsx("i", { className: notification.icon }) })) }), _jsxs("div", { className: "flex-grow truncate ms-2", children: [_jsxs("h5", { className: "text-sm font-semibold mb-1", children: ["Datacorp ", _jsx("small", { className: "font-normal ms-1", children: "1 min ago" })] }), _jsx("small", { className: "noti-item-subtitle text-muted", children: "Caleb Flakelar commented on Admin" })] })] }) }) })] }, idx));
                            }
                            else {
                                return (_jsx(Link, { to: "#", className: "block mb-4", children: _jsx("div", { className: "py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0", children: notification.avatar ? (_jsx("img", { src: notification.avatar, className: "rounded-full h-9 w-9", alt: "" })) : (_jsx("div", { className: `flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-${notification.bgColor}`, children: _jsx("i", { className: notification.icon }) })) }), _jsxs("div", { className: "flex-grow truncate ms-2", children: [_jsxs("h5", { className: "text-sm font-semibold mb-1", children: [notification.text, " ", _jsx("small", { className: "font-normal ms-1", children: timeSince(notification.createdAt) })] }), _jsx("small", { className: "noti-item-subtitle text-muted", children: notification.subText })] })] }) }) }, idx));
                            }
                        }) }), _jsx(Link, { to: "#", className: "p-2 border-t border-gray-200 dark:border-gray-700 block text-center text-primary underline font-semibold", children: "View All" })] }) }) }));
};
export default NotificationDropdown;
