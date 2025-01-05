import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_API_URL);

import { useNavigate } from "react-router-dom";
import { PageBreadcrumb } from "@/components";
import { Grid, _ } from "gridjs-react";
import Badges from "./components/Badges";
import AccionesBotones from "./components/AccionesBotones";
import StatisticsWidget from "./components/StatisticsWidget";
import { useGlobalStore } from "@/store/Global/Global.store";
import ModalCreateCategory from "./components/ModalCreate";
import { useEffect, useState } from "react";
import { getCategories } from "./api/GetCategories";
import { Categoria, useCategorias } from "@/store/Categorias/Categorias.store";
import ModalUpdateCategory from "./components/ModalUpdate";
import ModalDeleteCategory from "./components/ModalDelete";
import checkPermissions from "@/utils/checkPermissions";
import { ModalLayout } from "@/components/HeadlessUI";

const PaginaCategorias = () => {
    const navigate = useNavigate();

    const modal = useGlobalStore((state) => state.modal);
    const id = useCategorias((state) => state.id);
    const setModal = useGlobalStore((state) => state.setModal);
    const categorias = useCategorias((state) => state.categorias);
    const setCategorias = useCategorias((state) => state.setCategorias);
    const setName = useCategorias((state) => state.setName);
    const setId = useCategorias((state) => state.setId);
    const setStatus = useCategorias((state) => state.setStatus);
    const modalDelete = useGlobalStore((state) => state.modalDelete);
    const setModalDelete = useGlobalStore((state) => state.setModalDelete);
    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);

    // CACHEO DE INFORMACIÓN
    const [cachedCategories, setCachedCategories] = useState<Categoria[]>([]);

    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["4", "6"]);
            if (!check) {
                setToast("error", "No tienes permisos para acceder a esta sección");
            }
        };
        checkPermissionsAsync();
    }, []);

    const handleModal = () => {
        setToast("info", "");
        navigate("/dashboard");
    };

    useEffect(() => {
        const getAllCategories = async () => {
            const cachedData = localStorage.getItem("categorias");
            if (cachedData) {
                setCachedCategories(JSON.parse(cachedData));
            } else {
                const data = await getCategories();
                if (data) {
                    localStorage.setItem("categorias", JSON.stringify(data.categories));
                    setCachedCategories(data.categories);
                }
            }
        };

        getAllCategories();
    }, []);

    useEffect(() => {
        socket.on("newCategory", (data) => {
            setCachedCategories((prev: Categoria[]) => {
                const updateCategories = [...prev, data];
                localStorage.setItem("categorias", JSON.stringify(updateCategories));
                return updateCategories;
            })
        });

        socket.on("updateCategory", (updatedCategory) => {
            setCachedCategories((prev) => {
                const updatedCategories = prev.map((category) =>
                    category.id === updatedCategory.id ? updatedCategory : category
                );
                localStorage.setItem("categories", JSON.stringify(updatedCategories));
                return updatedCategories;
            });
        });

        socket.on("deleteCategory", (deletedCategory) => {
            setCachedCategories((prev) => {
                const updatedCategories = prev.filter((category) => category.id !== deletedCategory.id);
                localStorage.setItem("categories", JSON.stringify(updatedCategories));
                return updatedCategories;
            });
        });

        return () => {
            socket.off("newCategory");
            socket.off("updateCategory");
            socket.off("deleteCategory");
        };
    }, [categorias]);

    useEffect(() => {
        setCategorias(cachedCategories);
    }, [cachedCategories, setCategorias]);

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
                <PageBreadcrumb title="Categorías" subName="Dashboard" />
                <h2 className="text-xl">Gestión de categorías</h2>
                
                <section className="mt-5">
                    <div className="flex">
                        <div className="flex items-center">
                            <button
                                type="button"
                                className={`btn border-success text-success hover:bg-success hover:text-white mb-5 w-full lg:w-auto`}
                                onClick={() => setModal(true, <ModalCreateCategory />)}>
                                Agregar categoría
                            </button>
                        </div>
                    </div>
                
                    {modalDelete && <ModalDeleteCategory />}
                
                    {id === 0
                        ? modal.open
                            ? modal.component
                            : null
                        : modal.open
                        ? modal.component
                        : null}
                
                    <div className="my-5 lg:w-3/12">
                        <StatisticsWidget
                            variant={"bg-success"}
                            cardTitle={"Total de categorías"}
                            title={"Numero de categorías"}
                            change={""}
                            stats={(
                                categorias.length +
                                `${categorias.length > 1 ? " Categorías" : " Categoría"}`
                            ).toString()}
                            dataSince={"Actualizado hace un instante"}
                            classname={"apex-charts"}
                            chartSeries={[categorias.length, categorias.length + 1]}
                            colors={["#47ad77", "#424242"]}
                        />
                    </div>
                
                    {categorias.length > 0 ? (
                        <Grid
                            data={categorias.map((categoria) => [
                                categoria.id,
                                categoria.name,
                                _(<Badges activo={categoria.status} />),
                                _(
                                    <AccionesBotones
                                        onClickEdit={() => {
                                            setId(categoria.id);
                                            setName(categoria.name);
                                            setStatus(categoria.status);
                                            setModal(true, <ModalUpdateCategory />);
                                        }}
                                        onClickDelete={() => {
                                            setId(categoria.id);
                                            setName(categoria.name);
                                            setModalDelete(true);
                                        }}
                                    />
                                ),
                            ])}
                            columns={["ID", "Nombre", "Estado", "Acciones"]}
                            search={true}
                            pagination={{
                                limit: 10,
                                summary: true,
                            }}
                            sort={true}
                            style={{
                                table: {
                                    "white-space": "nowrap",
                                },
                            }}
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
                            <p className="text-lg font-black uppercase">No hay categorías registradas</p>
                        </div>
                    )}
                </section>
            </>
            )}
        </>
    );
};

export default PaginaCategorias;
