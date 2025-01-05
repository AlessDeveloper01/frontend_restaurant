
import axios, { AxiosError } from 'axios';
import React from 'react'
import { useAuth } from '../../../../store';
import { usePersonalStore } from '../../../../store/Personal/Personal.store';
import { FormInput } from '../../../../components';

const FormCreate = () => {
    const name = useAuth((state) => state.name);
    const email = useAuth((state) => state.email);
    const password = useAuth((state) => state.password);
    const permissions = useAuth((state) => state.permissions);
    const setName = useAuth((state) => state.setName);
    const setEmail = useAuth((state) => state.setEmail);
    const setPassword = useAuth((state) => state.setPassword);
    const setPermissions = useAuth((state) => state.setPermissions);

    const setErrors = useAuth((state) => state.setErrors);
    const setSuccess = useAuth((state) => state.setSuccess);

    const idPersonal = usePersonalStore((state) => state.id);

    const newErrors: string[] = [];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!name || !email || !password || permissions.length === 0) {
            newErrors.push("Todos los campos son requeridos");
            setErrors(newErrors);

            setTimeout(() => {
                setErrors([]);
            }, 2000);
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!emailRegex.test(email)) {
            newErrors.push("El email es requerido y debe ser valido");
            setErrors(newErrors);

            setTimeout(() => {
                setErrors([]);
            }, 2000);
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, { name, email, password, permissions });
            const { msg } = response.data;
            setSuccess([msg]);
            setName("");
            setEmail("");
            setPassword("");
            setPermissions([]);
            setTimeout(() => {
                setSuccess([]);
            }, 2000);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
              newErrors.push(error.response?.data.msg || "Error desconocido");
            } else {
              newErrors.push("Error desconocido");
            }
            setErrors(newErrors);
        }
    };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <h2 className="mb-4 text-xl">Detalles de la cuenta</h2>
                        <FormInput
                            label="Nombre"
                            labelClassName="mb-2"
                            type="text"
                            name="name"
                            className="form-input"
                            containerClass="mb-3"
                            key="text"
                            placeholder="Nombre del personal"
                            value={name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setName(e.target.value)
                            }
                        />
                        <FormInput
                            label="Correo Electronico"
                            labelClassName="mb-2"
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-input"
                            containerClass="mb-3"
                            key="email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                        />
                        <FormInput
                            label="Contraseña"
                            labelClassName="mb-2"
                            type="text"
                            name="password"
                            containerClass="mb-3"
                            className="form-input"
                            key="password"
                            placeholder="*******"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <h2 className="mb-4 text-xl">Permisos de la cuenta</h2>
                        <div className="flex items-center gap-4 mt-4">
                            <div>
                                <input
                                    type="checkbox"
                                    id="switch2"
                                    data-switch="bool"
                                    checked={permissions.includes("1")}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setPermissions([...permissions, "1"]);
                                        } else {
                                            setPermissions(
                                                permissions.filter((p) => p !== "1")
                                            );
                                        }
                                    }}
                                />
                                <label
                                    htmlFor="switch2"
                                    data-on-label="Si"
                                    data-off-label="No"></label>
                            </div>
                            <p className="font-bold uppercase">
                                Controlar ordenes <span className='font-light text-xs capitalize'> ( ventas, ordenes ) </span>
                                </p>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div>
                                <input
                                    type="checkbox"
                                    id="switch3"
                                    data-switch="bool"
                                    checked={permissions.includes("2")}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setPermissions([...permissions, "2"]);
                                        } else {
                                            setPermissions(
                                                permissions.filter((p) => p !== "2")
                                            );
                                        }
                                    }}
                                />
                                <label
                                    htmlFor="switch3"
                                    data-on-label="Si"
                                    data-off-label="No"></label>
                            </div>
                            <p className="font-bold uppercase">
                                Controlar personal <span className='font-light text-xs capitalize'> ( Personal ) </span>
                                </p>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div>
                                <input
                                    type="checkbox"
                                    id="switch4"
                                    data-switch="bool"
                                    checked={permissions.includes("3")}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setPermissions([...permissions, "3"]);
                                        } else {
                                            setPermissions(
                                                permissions.filter((p) => p !== "3")
                                            );
                                        }
                                    }}
                                />
                                <label
                                    htmlFor="switch4"
                                    data-on-label="Si"
                                    data-off-label="No"></label>
                            </div>
                            <p className="font-bold uppercase">
                                Controlar productos - menú <span className='font-light text-xs capitalize'> ( productos ) </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div>
                                <input
                                    type="checkbox"
                                    id="switch5"
                                    data-switch="bool"
                                    checked={permissions.includes("4")}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setPermissions([...permissions, "4"]);
                                        } else {
                                            setPermissions(
                                                permissions.filter((p) => p !== "4")
                                            );
                                        }
                                    }}
                                />
                                <label
                                    htmlFor="switch5"
                                    data-on-label="Si"
                                    data-off-label="No"></label>
                            </div>
                            <p className="font-bold uppercase">
                                Controlar productos - inventario <span className='font-light text-xs capitalize'> ( inventario, categorías ) </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div>
                                <input
                                    type="checkbox"
                                    id="switch6"
                                    data-switch="bool"
                                    checked={permissions.includes("5")}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setPermissions([...permissions, "5"]);
                                        } else {
                                            setPermissions(
                                                permissions.filter((p) => p !== "5")
                                            );
                                        }
                                    }}
                                />
                                <label
                                    htmlFor="switch6"
                                    data-on-label="Si"
                                    data-off-label="No"></label>
                            </div>
                            <p className="font-bold uppercase">
                                Controlar mesas <span className='font-light text-xs capitalize'> ( mesas ) </span>
                                </p>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div>
                                <input
                                    type="checkbox"
                                    id="switch7"
                                    data-switch="bool"
                                    checked={permissions.includes("6")}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setPermissions([...permissions, "6"]);
                                        } else {
                                            setPermissions(
                                                permissions.filter((p) => p !== "6")
                                            );
                                        }
                                    }}
                                />
                                <label
                                    htmlFor="switch7"
                                    data-on-label="Si"
                                    data-off-label="No"></label>
                            </div>
                            <p className="font-bold uppercase">
                                Todos los permisos <span className='font-light text-xs capitalize'> ( todo ) </span>
                                </p>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className={`btn border-success text-success hover:bg-success hover:text-white mt-5`}>
                    {idPersonal !== 0 ? "Actualizar Usuario" : "Crear Usuario"}
                </button>
            </form>
  )
}

export default FormCreate
