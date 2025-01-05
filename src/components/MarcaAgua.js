import { jsx as _jsx } from "react/jsx-runtime";
import marcaAguaImage from '@/assets/images/pagina_fondo.png';
const MarcaAgua = () => {
    return (_jsx("div", { className: 'absolute mt-32', children: _jsx("img", { src: marcaAguaImage, alt: 'marca de agua', className: 'w-full h-full opacity-10' }) }));
};
export default MarcaAgua;
