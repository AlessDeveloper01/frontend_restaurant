import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormInput } from "@/components";
import { useAuth } from "@/store";
import { useGlobalStore } from "@/store/Global/Global.store";
import { usePersonalStore } from "@/store/Personal/Personal.store";
import axios from "axios";
const FormUpdate = () => {
    // Alertas Globales
    const setAlerts = useGlobalStore(state => state.setAlert);
    const name = useAuth((state) => state.name);
    const setName = useAuth((state) => state.setName);
    const email = useAuth((state) => state.email);
    const setEmail = useAuth((state) => state.setEmail);
    const permissions = useAuth((state) => state.permissions);
    const setPermissions = useAuth((state) => state.setPermissions);
    const password = useAuth((state) => state.password);
    const setPassword = useAuth((state) => state.setPassword);
    const idPersonal = usePersonalStore((state) => state.id);
    const setIdPersonal = usePersonalStore((state) => state.setId);
    const onSubmit = async (e) => {
        e.preventDefault();
        if ([name, email].includes('') || permissions.length === 0) {
            setAlerts("error", "Los campos son requeridos");
            setTimeout(() => {
                setAlerts('info', '');
            }, 2000);
            return;
        }
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/user/${idPersonal}`, { name, email, password, permissions }, {
            headers: {
                Authorization: `${localStorage.getItem('restaurante_token')?.split(' ')[1]}`
            }
        });
        setAlerts("success", response.data.msg);
        setIdPersonal(0);
        setName('');
        setEmail('');
        setPassword('');
        setPermissions([]);
        setTimeout(() => {
            setAlerts("info", '');
        }, 2000);
    };
    return (_jsxs("form", { onSubmit: onSubmit, className: "space-y-4", noValidate: true, children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h2", { className: "mb-4 text-xl", children: "Detalles de la cuenta" }), _jsx(FormInput, { label: "Nombre", labelClassName: "mb-2", type: "text", name: "name", className: "form-input", containerClass: "mb-3", placeholder: "Nombre del personal", value: name, onChange: (e) => setName(e.target.value) }, "text"), _jsx(FormInput, { label: "Correo Electr\u00F3nico", labelClassName: "mb-2", type: "email", name: "email", placeholder: "Email", className: "form-input disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-200", containerClass: "mb-3", value: email, onChange: (e) => setEmail(e.target.value), disabled: true }, "email"), _jsx(FormInput, { label: "Contrase\u00F1a", labelClassName: "mb-2", type: "text", name: "password", containerClass: "mb-3", className: "form-input", placeholder: "*******", value: password, onChange: (e) => setPassword(e.target.value) }, "password")] }), _jsxs("div", { children: [_jsx("h2", { className: "mb-4 text-xl", children: "Permisos de la cuenta" }), _jsxs("div", { className: "flex items-center gap-4 mt-4", children: [_jsxs("div", { children: [_jsx("input", { type: "checkbox", id: "switch2", "data-switch": "bool", checked: permissions.includes("1"), onChange: (e) => {
                                                    if (e.target.checked) {
                                                        setPermissions([...permissions, "1"]);
                                                    }
                                                    else {
                                                        setPermissions(permissions.filter((p) => p !== "1"));
                                                    }
                                                } }), _jsx("label", { htmlFor: "switch2", "data-on-label": "Si", "data-off-label": "No" })] }), _jsxs("p", { className: "font-bold uppercase", children: ["Controlar ordenes ", _jsx("span", { className: 'font-light text-xs capitalize', children: " ( ventas, ordenes ) " })] })] }), _jsxs("div", { className: "flex items-center gap-4 mt-4", children: [_jsxs("div", { children: [_jsx("input", { type: "checkbox", id: "switch3", "data-switch": "bool", checked: permissions.includes("2"), onChange: (e) => {
                                                    if (e.target.checked) {
                                                        setPermissions([...permissions, "2"]);
                                                    }
                                                    else {
                                                        setPermissions(permissions.filter((p) => p !== "2"));
                                                    }
                                                } }), _jsx("label", { htmlFor: "switch3", "data-on-label": "Si", "data-off-label": "No" })] }), _jsxs("p", { className: "font-bold uppercase", children: ["Controlar personal ", _jsx("span", { className: 'font-light text-xs capitalize', children: " ( Personal ) " })] })] }), _jsxs("div", { className: "flex items-center gap-4 mt-4", children: [_jsxs("div", { children: [_jsx("input", { type: "checkbox", id: "switch4", "data-switch": "bool", checked: permissions.includes("3"), onChange: (e) => {
                                                    if (e.target.checked) {
                                                        setPermissions([...permissions, "3"]);
                                                    }
                                                    else {
                                                        setPermissions(permissions.filter((p) => p !== "3"));
                                                    }
                                                } }), _jsx("label", { htmlFor: "switch4", "data-on-label": "Si", "data-off-label": "No" })] }), _jsxs("p", { className: "font-bold uppercase", children: ["Controlar productos - men\u00FA ", _jsx("span", { className: 'font-light text-xs capitalize', children: " ( productos ) " })] })] }), _jsxs("div", { className: "flex items-center gap-4 mt-4", children: [_jsxs("div", { children: [_jsx("input", { type: "checkbox", id: "switch5", "data-switch": "bool", checked: permissions.includes("4"), onChange: (e) => {
                                                    if (e.target.checked) {
                                                        setPermissions([...permissions, "4"]);
                                                    }
                                                    else {
                                                        setPermissions(permissions.filter((p) => p !== "4"));
                                                    }
                                                } }), _jsx("label", { htmlFor: "switch5", "data-on-label": "Si", "data-off-label": "No" })] }), _jsxs("p", { className: "font-bold uppercase", children: ["Controlar productos - inventario ", _jsx("span", { className: 'font-light text-xs capitalize', children: " ( inventario, categor\u00EDas ) " })] })] }), _jsxs("div", { className: "flex items-center gap-4 mt-4", children: [_jsxs("div", { children: [_jsx("input", { type: "checkbox", id: "switch6", "data-switch": "bool", checked: permissions.includes("5"), onChange: (e) => {
                                                    if (e.target.checked) {
                                                        setPermissions([...permissions, "5"]);
                                                    }
                                                    else {
                                                        setPermissions(permissions.filter((p) => p !== "5"));
                                                    }
                                                } }), _jsx("label", { htmlFor: "switch6", "data-on-label": "Si", "data-off-label": "No" })] }), _jsxs("p", { className: "font-bold uppercase", children: ["Controlar mesas ", _jsx("span", { className: 'font-light text-xs capitalize', children: " ( mesas ) " })] })] }), _jsxs("div", { className: "flex items-center gap-4 mt-4", children: [_jsxs("div", { children: [_jsx("input", { type: "checkbox", id: "switch7", "data-switch": "bool", checked: permissions.includes("6"), onChange: (e) => {
                                                    if (e.target.checked) {
                                                        setPermissions([...permissions, "6"]);
                                                    }
                                                    else {
                                                        setPermissions(permissions.filter((p) => p !== "6"));
                                                    }
                                                } }), _jsx("label", { htmlFor: "switch7", "data-on-label": "Si", "data-off-label": "No" })] }), _jsxs("p", { className: "font-bold uppercase", children: ["Todos los permisos ", _jsx("span", { className: 'font-light text-xs capitalize', children: " ( todo ) " })] })] })] })] }), _jsx("button", { type: "submit", className: `btn border-success text-success hover:bg-success hover:text-white mt-5`, children: "Actualizar personal" })] }));
};
export default FormUpdate;
