import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL);

import { PageBreadcrumb } from "../../../components";
import { Grid, _ } from "gridjs-react";
import { useAuth } from "../../../store";

import axios, { AxiosError } from "axios";
import { usePersonalStore } from "../../../store/Personal/Personal.store";
import { useEffect } from "react";
import { deleteUserById } from "./actions/delete-by-id.action";
import FormCreate from "./components/FormCreate";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "@/store/Global/Global.store";
import { ModalLayout } from "@/components/HeadlessUI";
import checkPermissions from "@/utils/checkPermissions";
import FormUpdate from "./components/FormUpdate";

type Personal = {
    id: number;
    name: string;
    email: string;
    password?: string;
    permissions: string[];
};

const personalPermisos = (permisos: string[]) => {
    return (
        <div className="grid md:grid-cols-2 gap-2">
            {permisos.map((permiso, index) => (
                <span
                    key={index}
                    className="bg-primary text-white text-xs py-1 px-2 rounded">
                    {permiso}
                </span>
            ))}
        </div>
    );
};

const handleDelete = async (
    id: number,
    setErrors: (errors: string[]) => void,
    setSuccess: (success: string[]) => void,
    setIdPersonal: (id: number) => void,
    setModalDelete: (modalDelete: boolean) => void
) => {
    try {
        const deletedUser = await deleteUserById(id);
        const errorMessages: { [key: number]: string } = {
            401: "No tienes permisos para realizar esta acción",
            403: "No puedes eliminar tu propio usuario",
            404: "El usuario no existe",
            400: "Id es requerido",
            500: "Error interno",
        };

        if (deletedUser.status in errorMessages) {
            setErrors([errorMessages[deletedUser.status]]);

            setTimeout(() => {
                setErrors([]);
            }, 2000);
            return;
        }

        setModalDelete(false);
        setIdPersonal(0);
        setSuccess(["Usuario eliminado"]);
        setTimeout(() => {
            setSuccess([]);
        }, 2000);
    } catch (error: unknown) {
        console.log(error);
        setErrors(["Internal server error"]);
    }
};

const acciones = (
    id: number,
    setIdPersonal: (id: number) => void,
    personal: Personal,
    setName: (name: string) => void,
    setEmail: (email: string) => void,
    setPassword: (password: string) => void,
    setPermissions: (permissions: string[]) => void,
    setModalDelete: (modalDelete: boolean) => void
) => {
    return (
        <div className="flex items-center gap-3 justify-between">
            <button
                type="button"
                className="btn bg-primary text-white hover:bg-primary py-1"
                onClick={() => {
                    setIdPersonal(id);
                    setName(personal.name);
                    setEmail(personal.email);
                    setPassword("");
                    setPermissions(personal.permissions);
                }}>
                Editar
            </button>
            <button
                className="btn bg-danger text-white hover:bg-danger-2 py-1"
                onClick={() => {
                    setIdPersonal(id);
                    setModalDelete(true);
                }}>
                Eliminar
            </button>
        </div>
    );
};

const PaginaPersonal = () => {
    const setName = useAuth((state) => state.setName);
    const setEmail = useAuth((state) => state.setEmail);
    const setPassword = useAuth((state) => state.setPassword);
    const setPermissions = useAuth((state) => state.setPermissions);

    const errors = useAuth((state) => state.errors);
    const setErrors = useAuth((state) => state.setErrors);
    const success = useAuth((state) => state.success);
    const setSuccess = useAuth((state) => state.setSuccess);

    const alerts = useGlobalStore((state) => state.alert);

    const idPersonal = usePersonalStore((state) => state.id);
    const setIdPersonal = usePersonalStore((state) => state.setId);
    const personal = usePersonalStore((state) => state.personal);
    const setPersonal = usePersonalStore((state) => state.setPersonal);

    const modalDelete = useGlobalStore((state) => state.modalDelete);
    const setModalDelete = useGlobalStore((state) => state.setModalDelete);

    const newErrors: string[] = [];

    const getPersonal = async () => {
        try {
            const token = localStorage.getItem("restaurante_token");
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/user/`,
                {
                    headers: {
                        Authorization: token?.split(" ")[1],
                    },
                }
            );

            setPersonal(response.data);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                newErrors.push(error.response?.data.msg || "Error desconocido");
            } else {
                newErrors.push("Error desconocido");
            }
            setErrors(newErrors);
        }
    };

    useEffect(() => {
        socket.on("userDeleted", (data) => {
            setPersonal(personal.filter((user: Personal) => user.id !== data.id));
        });

        return () => {
            socket.off("userDeleted");
        };
    }, [personal]);

    useEffect(() => {
        socket.on("userNew", (data) => {
            setPersonal([...personal, data]);
        });

        return () => {
            socket.off("userNew");
        };
    }, [personal]);

    useEffect(() => {
        socket.on("userUpdated", (data) => {
            setPersonal(
                personal.map((user: Personal) => (user.id === data.id ? data : user))
            );
        });

        return () => {
            socket.off("userUpdated");
        };
    }, [personal]);

    useEffect(() => {
        getPersonal();
    }, []);

    const dictionaryPermissions = [
        { id: "1", name: "Controlar ordenes" },
        { id: "2", name: "Controlar personal" },
        { id: "3", name: "Controlar productos - menú" },
        { id: "4", name: "Controlar productos - inventario" },
        { id: "5", name: "Controlar mesas" },
        { id: "6", name: "Todos los permisos" },
    ];

    const navigate = useNavigate();

    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);

    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["2", "6"]);
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
                    <PageBreadcrumb title="Personal" subName="Dashboard" />

                    {errors.length > 0 && (
                        <div
                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative md:w-2/5 mb-4"
                            role="alert">
                            <strong className="font-bold">Error: </strong>
                            <span className="block sm:inline">
                                {errors.join(", ")}
                            </span>
                        </div>
                    )}
                    {success.length > 0 && (
                        <div
                            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative md:w-2/5 mb-4"
                            role="alert">
                            <strong className="font-bold">Éxito: </strong>
                            <span className="block sm:inline">
                                {success.join(", ")}
                            </span>
                        </div>
                    )}

                    {alerts.msg != "" &&
                        (alerts.type == "error" ? (
                            <div
                                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative md:w-2/5 mb-4"
                                role="alert">
                                <strong className="font-bold">Error: </strong>
                                <span className="block sm:inline">
                                    {Array.isArray(alerts.msg)
                                        ? alerts.msg.join(", ")
                                        : alerts.msg}
                                </span>
                            </div>
                        ) : (
                            <div
                                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative md:w-2/5 mb-4"
                                role="alert">
                                <strong className="font-bold">Éxito: </strong>
                                <span className="block sm:inline">{alerts.msg}</span>
                            </div>
                        ))}

                    {idPersonal === 0 ? <FormCreate /> : <FormUpdate />}

                    <section className="mt-16">
                        <h2 className="text-2xl">Control de cuentas</h2>
                        {personal.length > 0 ? (
                            <Grid
                                data={
                                    personal &&
                                    personal.map((personal) => [
                                        personal.id,
                                        personal.name,
                                        personal.email,
                                        _(
                                            personalPermisos(
                                                dictionaryPermissions
                                                    .filter(
                                                        (permiso) =>
                                                            Array.isArray(
                                                                personal.permissions
                                                            ) &&
                                                            personal.permissions
                                                                .map(String)
                                                                .includes(
                                                                    permiso.id.toString()
                                                                )
                                                    )
                                                    .map((permiso) => permiso.name)
                                            )
                                        ),
                                        _(
                                            acciones(
                                                personal.id,
                                                setIdPersonal,
                                                personal,
                                                setName,
                                                setEmail,
                                                setPassword,
                                                setPermissions,
                                                setModalDelete
                                            )
                                        ),
                                    ])
                                }
                                columns={[
                                    "ID",
                                    "Nombre",
                                    "Correo Electrónico",
                                    "Permisos",
                                    "Acciones",
                                ]}
                                pagination={{ limit: 5 }}
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
                                style={{
                                    table: {
                                        "white-space": "nowrap",
                                    },
                                }}
                            />
                        ) : (
                        <div className="flex items-center justify-center">
                            <p className="text-lg font-black uppercase">No hay personal registrado</p>
                        </div>
                        )}
                    </section>
                </>
            )}

            <ModalLayout
                showModal={modalDelete}
                toggleModal={() => setModalDelete(false)}
                panelClassName="sm:max-w-lg"
                placement="justify-center items-start">
                <div className="duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700">
                    <div
                        className={`flex justify-between items-center py-2.5 px-4 bg-danger/90 dark:border-gray-700`}>
                        <h3 className="font-medium text-white text-lg">
                            Eliminación de cuenta
                        </h3>
                        <button
                            className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                            type="button"
                            onClick={() => setModalDelete(false)}>
                            <i className="ri-close-line text-2xl text-white"></i>
                        </button>
                    </div>
                    <div className={`p-4 bg-danger text-white overflow-y-auto`}>
                        <h5 className="mb-2.5 text-base">
                            ¿Estas seguro de eliminar la cuenta?
                        </h5>
                        <p className="text-sm mb-4">
                            Una vez eliminada la cuenta no se podrá recuperar, ¿Estás
                            seguro de eliminar la cuenta?
                        </p>
                    </div>
                    <div
                        className={`flex justify-end items-center gap-2 p-4 border-t bg-danger border-white/5`}>
                        <button
                            className="btn bg-light text-gray-800 transition-all"
                            onClick={() => setModalDelete(false)}>
                            Cancelar
                        </button>
                        <button
                            className="btn border-light hover:bg-light hover:text-gray-800 text-white"
                            onClick={() =>
                                handleDelete(
                                    idPersonal,
                                    setErrors,
                                    setSuccess,
                                    setIdPersonal,
                                    setModalDelete
                                )
                            }>
                            Eliminar
                        </button>
                    </div>
                </div>
            </ModalLayout>
        </>
    );
};

export default PaginaPersonal;
