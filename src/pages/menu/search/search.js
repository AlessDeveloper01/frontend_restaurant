import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PageBreadcrumb } from "../../../components";
import CardItem from "../menumeseros/components/CardItem";
import SummaryMenu from "../menumeseros/Summary";
import { useGlobalStore } from "@/store/Global/Global.store";
import { useEffect, useState } from "react";
import { ModalLayout } from "@/components/HeadlessUI";
import checkPermissions from "@/utils/checkPermissions";
import { useMenuStore } from "@/store/Menu/Menu.store";
import { useOrdenStore } from "@/store/Orden/Orden.store";
import { getCategories } from "@/pages/gestion/Categorias/api/GetCategories";
import { useSearchStore } from "@/store/Search/Search.store";
import { getProductByName } from "./api/getProductByName";
const PaginaSearch = () => {
    const { productname } = useParams();
    const navigate = useNavigate();
    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);
    const menu = useMenuStore((state) => state.menu);
    const setMenu = useMenuStore((state) => state.setMenu);
    const alert = useGlobalStore((state) => state.alert);
    const search = useSearchStore((state) => state.search);
    const setSearch = useSearchStore((state) => state.setSearch);
    const [categorias, setCategorias] = useState([]);
    const orden = useOrdenStore((state) => state.orden);
    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["1", "2", "3", "4", "5", "6"]);
            if (!check) {
                setToast("error", "No tienes permisos para acceder a esta sección");
            }
        };
        checkPermissionsAsync();
    }, []);
    useEffect(() => {
        const getMenuItems = async () => {
            const response = await getProductByName(productname);
            const errors = [400, 401, 402, 403, 404, 500];
            if (errors.includes(response.status)) {
                setMenu([]);
            }
            else {
                setMenu(response);
            }
        };
        getMenuItems();
    }, [productname]);
    useEffect(() => {
        const getCategory = async () => {
            const response = await getCategories();
            if (response.categories.length > 0) {
                setCategorias(response.categories);
            }
        };
        getCategory();
    }, []);
    const handleModal = () => {
        setToast("info", "");
        navigate("/dashboard");
    };
    const handleSearch = async (e) => {
        e.preventDefault();
        navigate(`/menu/search/${search}`);
        setSearch('');
    };
    return (_jsx(_Fragment, { children: toast.msg ? (_jsx(ModalLayout, { showModal: true, toggleModal: handleModal, panelClassName: "sm:max-w-xs", placement: "justify-center items-start", children: _jsx("div", { className: `duration-300 ease-in-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-danger shadow-sm rounded`, children: _jsx("div", { className: "p-9 overflow-y-auto", children: _jsxs("div", { className: "text-center text-white", children: [_jsx("i", { className: `ri-close-circle-line text-4xl` }), _jsx("h4", { className: "text-xl font-medium mt-3 mb-2.5", children: "\u00A1Hay un problema!" }), _jsx("p", { className: "mt-6 mb-4", children: toast.msg }), _jsx("button", { type: "button", className: "btn bg-light text-gray-800 my-2", onClick: handleModal, children: "Continue" })] }) }) }) })) : (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumb, { title: "Menu", subName: "/" }), _jsxs("div", { className: "flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 justify-center mb-10", children: [_jsx("h2", { className: "card-title", children: "Productos del men\u00FA" }), _jsx("form", { onSubmit: handleSearch, className: "flex items-center gap-4", children: _jsx("input", { type: "search", placeholder: "Buscar por nombre", className: "w-full lg:w-auto lg:p-2 border border-primary/20 rounded-md p-4", value: search, onChange: (e) => setSearch(e.target.value) }) })] }), alert.msg !== '' && (alert.type === 'error' ? (_jsx("div", { className: "bg-danger/10 text-danger border border-danger/20 text-sm rounded-md py-3 px-5 mb-2 lg:w-1/3", children: _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("i", { className: `ri-close-circle-line text-base` }), _jsxs("p", { className: "text-sm", children: ["Error: ", _jsx("span", { className: "font-bold", children: alert.msg })] })] }) })) : (_jsx("div", { className: "bg-success/10 text-success border border-success/20 text-sm rounded-md py-3 px-5 mb-2 lg:w-1/3", children: _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("i", { className: `ri-check-line text-base` }), _jsxs("p", { className: "text-sm", children: ["\u00C9xito: ", _jsx("span", { className: "font-bold", children: alert.msg })] })] }) }))), _jsxs("section", { className: "grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 justify-center mb-5 text-black", children: [_jsx("i", { className: "ri-filter-3-line text-lg" }), _jsx("p", { className: "text-lg font-semibold uppercase", children: "Categor\u00EDas" })] }), _jsx("div", { className: "grid grid-cols-2 gap-2 lg:grid-cols-1", children: categorias &&
                                        categorias.length > 0 &&
                                        categorias.map((cat) => (_jsx(Link, { to: `/menu/${cat.name}`, className: `bg-white text-black
                                                    border flex items-center justify-center p-4 lg:p-2 rounded-md uppercase text-xl font-black hover:bg-warning/10 hover:text-warning transition-all duration-300 mb-2`, children: cat.name }, cat.id))) })] }), menu.length > 0 ? (_jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 mt-5", children: menu.map((item) => (_jsx(CardItem, { item: item }, item.id))) })) : (_jsx("div", { className: "flex items-center justify-center my-14", children: _jsx("p", { className: "text-lg font-black uppercase", children: "No se encontraron productos" }) }))] }), orden && orden.length > 0 && (_jsx(SummaryMenu, {}))] })) }));
};
export default PaginaSearch;
