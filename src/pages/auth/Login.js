import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import axios from 'axios';
import AuthLayout from './AuthLayout';
import VerticalForm from '../../components/VerticalForm';
import FormInput from '../../components/FormInput';
import { useAuth } from '../../store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const BottomLink = () => {
    return (_jsx("footer", { className: "text-center justify-center h-14 -mb-12", children: _jsxs("p", { className: "text-gray-400", children: ["Si no tienes cuenta", ' ', " solicitala a tu administrador"] }) }));
};
const Login = () => {
    const navigate = useNavigate();
    const errors = useAuth(state => state.errors);
    const email = useAuth(state => state.email);
    const password = useAuth(state => state.password);
    const setEmail = useAuth(state => state.setEmail);
    const setPassword = useAuth(state => state.setPassword);
    const setErrors = useAuth(state => state.setErrors);
    const success = useAuth(state => state.success);
    const setSuccess = useAuth(state => state.setSuccess);
    const newErrors = [];
    useEffect(() => {
        const token = localStorage.getItem('restaurante_token');
        const splitToken = token?.split(' ')[1];
        axios.post(`${import.meta.env.VITE_API_URL}/auth/validate`, {}, {
            headers: {
                Authorization: splitToken
            }
        }).then(() => {
            navigate('/dashboard');
        }).catch(() => {
            newErrors.push('Tu sesión ha expirado, por favor inicia sesión nuevamente');
            setErrors(newErrors);
            localStorage.removeItem('restaurante_token');
            setTimeout(() => {
                setErrors([]);
            }, 1500);
        });
    }, [navigate]);
    const onSubmit = (e) => {
        e.preventDefault();
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !regexEmail.test(email)) {
            newErrors.push('El email es requerido y debe ser valido');
        }
        if (!password) {
            newErrors.push('La contraseña es requerida');
        }
        if (newErrors.length === 0) {
            axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
                email,
                password
            }).then(response => {
                const { token, msg } = response.data;
                localStorage.setItem('restaurante_token', `Bearer ${token}`);
                setErrors([]);
                setSuccess([msg]);
                setEmail('');
                setPassword('');
                setTimeout(() => {
                    setSuccess([]);
                    navigate('/dashboard');
                }, 2000);
            }).catch((error) => {
                if (axios.isAxiosError(error)) {
                    const errorMsg = (error.response?.data).msg;
                    newErrors.push(errorMsg);
                }
                else {
                    newErrors.push('Error desconocido');
                }
                setErrors(newErrors);
            });
        }
        else {
            setErrors(newErrors);
        }
    };
    return (_jsx(_Fragment, { children: _jsx(AuthLayout, { title: "Iniciar Sesion", helpText: "Ingresa tu correo y contrase\u00F1a para ingresar.", hasThirdPartyLogin: true, bottomLinks: _jsx(BottomLink, {}), children: _jsxs(VerticalForm, { onSubmit: onSubmit, children: [errors.length > 0 && (_jsx("div", { className: "mb-6", children: errors.map((error, index) => (_jsx("div", { className: `bg-danger/10 text-danger border border-danger/20 text-sm rounded-md py-3 px-5 mb-2`, children: _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("i", { className: `ri-close-circle-line text-base` }), _jsxs("p", { className: "text-sm", children: ["Error: ", _jsx("span", { className: "font-bold", children: error })] })] }) }, index))) })), success.length > 0 && (_jsx("div", { className: "bg-success/10 text-success border border-success/20 text-sm rounded-md py-3 px-5 mb-2", children: _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("i", { className: `ri-check-line text-base` }), _jsxs("p", { className: "text-sm", children: ["Exito: ", _jsx("span", { className: "font-bold", children: success })] })] }) })), _jsx(FormInput, { label: "Correo electronico", labelClassName: "font-semibold text-gray-500", type: "email", className: "form-input", name: "email", placeholder: 'alessdeveloper@lowsolutions.dev', containerClass: "mb-6 space-y-2", labelContainerClassName: "flex justify-between items-center mb-2", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx(FormInput, { label: "Contrase\u00F1a", type: "text", name: "password", labelClassName: "font-semibold text-gray-500", className: "form-input rounded-e-none", placeholder: "*************", containerClass: "mb-6 space-y-2", labelContainerClassName: "flex justify-between items-center mb-2", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx("div", { className: " text-center", children: _jsxs("button", { className: "btn bg-primary text-white w-full", type: "submit", children: [_jsx("i", { className: "ri-login-box-line me-1" }), " Ingresar", ' '] }) })] }) }) }));
};
export default Login;
