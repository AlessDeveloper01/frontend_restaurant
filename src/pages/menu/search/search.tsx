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
import { Categoria } from "@/store/Categorias/Categorias.store";
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

    const [categorias, setCategorias] = useState<Categoria[]>([]);

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
            const response = await getProductByName(productname!);
            const errors = [400, 401, 402, 403, 404, 500];
            if (errors.includes(response.status)) {
                setMenu([]);
            } else {
                setMenu(response);
            }
        };
        getMenuItems();
    }, [productname]);

    useEffect(() => {
        const getCategory = async () => {
            const response = await getCategories();
            if(response.categories.length > 0) {
                setCategorias(response.categories);
            }
        }
        getCategory();
    }, []);

    const handleModal = () => {
        setToast("info", "");
        navigate("/dashboard");
    };

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/menu/search/${search}`);
        setSearch('');
    }

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
                    <PageBreadcrumb title="Menu" subName="/" />
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 justify-center mb-10">
                        <h2 className="card-title">Productos del menú</h2>
                        <form onSubmit={handleSearch} className="flex items-center gap-4">
                            <input
                                type="search"
                                placeholder="Buscar por nombre"
                                className="w-full lg:w-auto lg:p-2 border border-primary/20 rounded-md p-4"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                    </div>

                    {
                        alert.msg !== '' && (
                            alert.type === 'error' ? (
                                <div className="bg-danger/10 text-danger border border-danger/20 text-sm rounded-md py-3 px-5 mb-2 lg:w-1/3">
                                    <div className="flex items-center gap-1.5">
                                        <i className={`ri-close-circle-line text-base`}></i>
                                        <p className="text-sm">
                                            Error: <span className="font-bold">{alert.msg}</span>
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-success/10 text-success border border-success/20 text-sm rounded-md py-3 px-5 mb-2 lg:w-1/3">
                                    <div className="flex items-center gap-1.5">
                                        <i className={`ri-check-line text-base`}></i>
                                        <p className="text-sm">
                                            Éxito: <span className="font-bold">{alert.msg}</span>
                                        </p>
                                    </div>
                                </div>
                            )
                        )
                    }

                        <section className="grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-8">
                            <div>
                                <div className="flex items-center gap-2 justify-center mb-5 text-black">
                                    <i className="ri-filter-3-line text-lg"></i>
                                    <p className="text-lg font-semibold uppercase">Categorías</p>
                                </div>
                                {
                                <div
                                    className="grid grid-cols-2 gap-2 lg:grid-cols-1"
                                >
                                    {categorias &&
                                        categorias.length > 0 &&
                                        categorias.map((cat) => (
                                            <Link
                                                to={`/menu/${cat.name}`}
                                                key={cat.id}
                                                className={`bg-white text-black
                                                    border flex items-center justify-center p-4 lg:p-2 rounded-md uppercase text-xl font-black hover:bg-warning/10 hover:text-warning transition-all duration-300 mb-2`}>
                                                {cat.name}
                                            </Link>
                                        ))}
                                </div>
                            }
                            </div>
                    {menu.length > 0 ? (
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 mt-5">
                                {menu.map((item) => (
                                    <CardItem key={item.id} item={item} />
                                ))}
                            </div>
                    ) : (
                        <div className="flex items-center justify-center my-14">
                            <p className="text-lg font-black uppercase">
                                No se encontraron productos
                            </p>
                        </div>
                    )}
                </section>
                    {
                        orden && orden.length > 0 && (
                            <SummaryMenu />
                        )
                    }
                </>
            )}
        </>
    );
};

export default PaginaSearch;
