interface Producto {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    categoria: string;
    activo: boolean;
}
declare const dataProductos: Producto[];
interface Personal {
    id: string;
    nombre: string;
    correo: string;
    password: string;
    permisos: string[];
    status: boolean;
}
declare const dataPersonal: Personal[];
export { dataProductos, dataPersonal };
