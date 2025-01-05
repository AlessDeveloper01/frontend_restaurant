import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_API_URL);
import { PageBreadcrumb } from "../../../components";
import StatisticsWidget from "./components/StatisticsWidget";
import { useModalStore } from "../../../store";
import { ModalLayout } from "../../../components/HeadlessUI";
import { Grid, _ } from "gridjs-react";
import checkPermissions from "@/utils/checkPermissions";
import { useGlobalStore } from "@/store/Global/Global.store";
import { useEffect } from "react";
import { getAllProducts } from "./components/api/GetAllProducts";
import { useInventarioStore } from "@/store/Inventario/Inventario.store";
import ModalCreateProduct from "./components/ModalCreateProduct";
import { useNavigate } from "react-router-dom";
import AccionesButtons from "./components/AccionesButtons";
import ToastDelete from "./components/ToastDelete";
import ModalUpdateProduct from "./components/ModalUpdateProduct";
const PaginaInventario = () => {
    const navigate = useNavigate();
    const isModalOpen = useModalStore((state) => state.isModalOpen);
    const handleModal = useModalStore((state) => state.handleModal);
    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);
    // const alert = useGlobalStore((state) => state.alert);
    const modalDelete = useGlobalStore((state) => state.modalDelete);
    // Estado Inventario
    const inventario = useInventarioStore((state) => state.productos);
    const id = useInventarioStore((state) => state.id);
    const setId = useInventarioStore((state) => state.setId);
    const setName = useInventarioStore((state) => state.setNombre);
    const setStock = useInventarioStore((state) => state.setStock);
    const setInventario = useInventarioStore((state) => state.setProductos);
    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["4", "6"]);
            if (!check) {
                setToast("error", "No tienes permisos para acceder a esta sección");
            }
        };
        checkPermissionsAsync();
    }, []);
    const handleModalError = () => {
        setToast("info", "");
        navigate("/dashboard");
    };
    useEffect(() => {
        const getProducts = async () => {
            const data = await getAllProducts();
            if (data) {
                setInventario(data.ingredients);
            }
        };
        getProducts();
    }, []);
    useEffect(() => {
        socket.on("newProduct", (data) => {
            setInventario([...inventario, data]);
        });
        return () => {
            socket.off("newProduct");
        };
    }, [inventario]);
    useEffect(() => {
        socket.on("deleteProduct", (data) => {
            setInventario(inventario.filter((product) => product.id !== data.id));
        });
        return () => {
            socket.off("deleteProduct");
        };
    }, [inventario]);
    useEffect(() => {
        socket.on("updateProduct", (data) => {
            setInventario(inventario.map((product) => product.id === data.id ? data : product));
        });
        return () => {
            socket.off("updateProduct");
        };
    }, [inventario]);
    return (_jsxs(_Fragment, { children: [toast.msg ? (_jsx(ModalLayout, { showModal: true, toggleModal: handleModalError, panelClassName: "sm:max-w-xs", placement: "justify-center items-start", children: _jsx("div", { className: `duration-300 ease-in-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-danger shadow-sm rounded`, children: _jsx("div", { className: "p-9 overflow-y-auto", children: _jsxs("div", { className: "text-center text-white", children: [_jsx("i", { className: `ri-close-circle-line text-4xl` }), _jsx("h4", { className: "text-xl font-medium mt-3 mb-2.5", children: "\u00A1Hay un problema!" }), _jsx("p", { className: "mt-6 mb-4", children: toast.msg }), _jsx("button", { type: "button", className: "btn bg-light text-gray-800 my-2", onClick: handleModalError, children: "Continue" })] }) }) }) })) : (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumb, { title: "Inventario", subName: "Dashboard" }), _jsx("h2", { className: "text-xl", children: "Gesti\u00F3n de inventarios" }), _jsxs("section", { className: "mt-5", children: [_jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-5", children: _jsx(StatisticsWidget, { variant: "bg-success", cardTitle: "Total de productos", title: "Numero de productos", change: "", stats: inventario.length.toString() +
                                        `${inventario.length === 1
                                            ? " producto"
                                            : " productos"}`, dataSince: "Actualizado hace un instante", classname: "apex-charts", chartSeries: [
                                        inventario.length,
                                        inventario.length + 1,
                                    ], colors: ["#47ad77", "#424242"] }) }), _jsx("button", { type: "button", className: `btn border-success text-success hover:bg-success hover:text-white mb-5 w-full lg:w-auto`, onClick: () => handleModal(1), children: "Agregar producto" }), id === 0 ? (isModalOpen === 1 ? (_jsx(ModalCreateProduct, {})) : null) : isModalOpen === 1 ? (_jsx(ModalUpdateProduct, {})) : null] }), _jsx("main", { className: "mt-5", children: inventario.length > 0 ? (_jsx(Grid, { data: inventario.map((producto) => [
                                producto.id,
                                producto.name,
                                _(_jsx("p", { className: `${producto.stock <= 5 ? "text-danger" : "text-success"} font-bold`, children: producto.stock })),
                                _(_jsx(AccionesButtons, { onClick: () => {
                                        setId(producto.id);
                                        setName(producto.name);
                                        setStock(producto.stock);
                                    } })),
                            ]), columns: [
                                "ID",
                                "Nombre del producto",
                                "Cantidad",
                                "Acciones",
                            ], search: true, pagination: {
                                limit: 10,
                                summary: true,
                            }, language: {
                                search: {
                                    placeholder: "Ingresa el ingrediente...",
                                },
                                pagination: {
                                    previous: "Anterior",
                                    next: "Siguiente",
                                    showing: "Mostrando",
                                    results: () => "Resultados",
                                    of: "de",
                                    to: "a",
                                    perPage: "por página",
                                },
                            }, sort: true, style: {
                                table: {
                                    borderCollapse: "collapse",
                                    width: "100%",
                                    "white-space": "nowrap",
                                },
                                th: {
                                    border: "1px solid #e5e7eb",
                                    padding: "8px",
                                    fontWeight: "bold",
                                    textAlign: "left",
                                    backgroundColor: "#ff8f0e",
                                    color: "#fff",
                                },
                                td: {
                                    border: "1px solid #e5e7eb",
                                    padding: "8px",
                                    textAlign: "left",
                                },
                            } })) : (_jsx("div", { className: "flex items-center justify-center", children: _jsx("p", { className: "text-lg font-black uppercase", children: "No hay inventario registrado" }) })) })] })), modalDelete && _jsx(ToastDelete, {})] }));
};
export default PaginaInventario;
