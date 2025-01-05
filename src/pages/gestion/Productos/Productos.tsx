import { io } from "socket.io-client";
const socket = io(`${import.meta.env.VITE_API_URL}`);

import { PageBreadcrumb } from "@/components";
import { useEffect } from "react";
import { Grid, _ } from "gridjs-react";
import checkPermissions from "@/utils/checkPermissions";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "@/store/Global/Global.store";
import { ModalLayout } from "@/components/HeadlessUI";
import StatisticsWidget from "./components/StatisticsWidget";
import { Producto, useProductoStore } from "@/store/Productos/Producto.store";
import ModalCreateProducto from "./components/ModalCreateProducto";
import { getAllProducts } from "./api/GetAllProducts";
import Badges from "./components/Badges";
import AccionesBotones from "./components/AccionesBotones";
import formatMxCurrency from "@/helpers/format-currency";
import ModalUpdateProducto from "./components/ModalUpdateProducto";
import ModalDeleteProductMenu from "./components/ModalDelete";

const PaginaProductos = () => {
    const navigate = useNavigate();

    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);
    const modal = useGlobalStore((state) => state.modal);
    const setModal = useGlobalStore((state) => state.setModal);
    const setId = useProductoStore((state) => state.setId);
    const productos = useProductoStore((state) => state.productos);
    const setProductos = useProductoStore((state) => state.setProductos);
    const setName = useProductoStore((state) => state.setName);
    const setPrice = useProductoStore((state) => state.setPrice);
    const setCategory = useProductoStore((state) => state.setCategory);
    const setStatus = useProductoStore((state) => state.setStatus);
    const setIngredients = useProductoStore((state) => state.setIngredient);


    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["3", "6"]);
            if (!check) {
                setToast("error", "No tienes permisos para acceder a esta sección");
            }
        };
        checkPermissionsAsync();
    }, [setToast]);

    useEffect(() => {
        const getAllProductos = async () => {
            const response = await getAllProducts();
            if (response) {
                setProductos(response);
            }
        };
        getAllProductos();
    }, [setProductos]);

    useEffect(() => {
        socket.on("newProduct", (data) => {
            setProductos([...productos, data]);
        });

        socket.on("updateProduct", (data) => {
            setProductos(
                productos.map((product: Producto) =>
                    product.id === data.id ? { ...product, ...data } : product
                )
            );
        });

        socket.on("deleteProduct", (data: number) => {
            setProductos(productos.filter((product: Producto) => product.id !== data));
        });

        return () => {
            socket.off("newProduct");
            socket.off("updateProduct");
            socket.off("deleteProduct");
        };
    }, [productos, setProductos]);

    const handleModal = () => {
        setToast("info", "");
        navigate("/dashboard");
    };

    return (
        <>
            {toast.msg ? (
                <ModalLayout
                    showModal={true}
                    toggleModal={handleModal}
                    panelClassName="sm:max-w-xs"
                    placement="justify-center items-start">
                    <div
                        className={`duration-300 ease-in-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-danger shadow-sm rounded`}>
                        <div className="p-9 overflow-y-auto">
                            <div className="text-center text-white">
                                <i className={`ri-close-circle-line text-4xl`}></i>
                                <h4 className="text-xl font-medium mt-3 mb-2.5">
                                    ¡Hay un problema!
                                </h4>
                                <p className="mt-6 mb-4">{toast.msg}</p>
                                <button
                                    type="button"
                                    className="btn bg-light text-gray-800 my-2"
                                    onClick={handleModal}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalLayout>
            ) : (
                <>
                    <PageBreadcrumb title="Productos" subName="Dashboard" />

                    <h2 className="text-xl my-7">Listado de productos del menú</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-5">
                        <StatisticsWidget
                            variant={"bg-success"}
                            cardTitle={"Total de productos"}
                            title={"Numero de productos"}
                            change={""}
                            stats={
                                productos.length +
                                " " +
                                (productos.length > 1 ? " Productos" : " Producto")
                            }
                            dataSince={"Actualizado hace un instante"}
                            classname={"apex-charts"}
                            chartSeries={[productos.length, productos.length + 1]}
                            colors={["#47ad77", "#424242"]}
                        />
                    </div>

                    <div className="w-full md:w-auto mb-5">
                        <button
                            className="btn border-success text-success hover:bg-success hover:text-white w-full lg:w-auto"
                            onClick={() => setModal(true, <ModalCreateProducto />)}>
                            <i className="ri-add-line me-1"></i> Nuevo Producto
                        </button>
                    </div>

                    { modal.open ? modal.component : null }

                    <div className="card">
                        <div className="card-header">
                            <div className="flex justify-between items-center">
                                <h4 className="card-title">Listado Completo</h4>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-slate-700 dark:text-slate-400 mb-4">
                                En esta tabla se muestran todos los productos que se
                                encuentran en el menú.
                            </p>

                            {productos.length > 0 ? (
                                <Grid
                                    data={
                                        productos.map((product) => [
                                            product.id,
                                            product.name,
                                            formatMxCurrency(product.price),
                                            product.categoryDetails?.name || "Cargando...",
                                            _(<Badges activo={product.status} />),
                                            _(<AccionesBotones 
                                                onClickEdit={() => {
                                                    setId(product.id);
                                                    setName(product.name);
                                                    setPrice(product.price);
                                                    setCategory(product.categoryDetails!.id);
                                                    setStatus(product.status);
                                                    setIngredients(product.ingredient);
                                                    setModal(true, <ModalUpdateProducto />);
                                                }}
                                                onClickDelete={() => {
                                                    setId(product.id);
                                                    setName(product.name);
                                                    setModal(true, <ModalDeleteProductMenu />);
                                                }}
                                            />)
                                        ])
                                    }
                                    columns={[
                                        "ID",
                                        "Nombre",
                                        "Precio",
                                        "Categoria",
                                        "Estado",
                                        "Acciones"
                                    ]}
                                    style={{
                                        table: {
                                            borderCollapse: "collapse",
                                            width: "100%",
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
                                    }}
                                    pagination={{ limit: 10 }}
                                    search={true}
                                    language={{
                                        search: {
                                            placeholder: "Ingresa el nombre...",
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
                                    }}
                                />
                            ) : (
                                <div className="flex items-center justify-center">
                                    <p className="text-lg font-black uppercase">
                                        No hay productos registrados
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default PaginaProductos;
