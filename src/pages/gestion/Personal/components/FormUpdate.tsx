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

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if([name, email].includes('') || permissions.length === 0) {
            setAlerts("error", "Los campos son requeridos");

            setTimeout(() => {
                setAlerts('info', '');
            }, 2000)
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

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
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
                            label="Correo Electrónico"
                            labelClassName="mb-2"
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-input disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-200"
                            containerClass="mb-3"
                            key="email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                            disabled
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
                    Actualizar personal
                </button>
    </form>
  )
}

export default FormUpdate

