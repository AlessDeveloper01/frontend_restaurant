import React, { useEffect, useState } from "react";
import { FormInput } from "@/components";
import { ModalLayout } from "@/components/HeadlessUI";
import { useGlobalStore } from "@/store/Global/Global.store";
import { useProductoStore } from "@/store/Productos/Producto.store";
import Select from "react-select";
import { getAllProducts } from "../../Inventario/components/api/GetAllProducts";
import { getCategories } from "../../Categorias/api/GetCategories";
import { createProduct } from "../api/CreateProduct";

interface Option {
  value: string;
  label: string;
}

const ModalCreateProducto = () => {
  const modal = useGlobalStore((state) => state.modal);
  const setModal = useGlobalStore((state) => state.setModal);
  const alert = useGlobalStore((state) => state.alert);
  const setAlert = useGlobalStore((state) => state.setAlert);

  const name = useProductoStore((state) => state.name);
  const setName = useProductoStore((state) => state.setName);
  const price = useProductoStore((state) => state.price);
  const category = useProductoStore((state) => state.category);
  const status = useProductoStore((state) => state.status);
  const setPrice = useProductoStore((state) => state.setPrice);
  const setCategory = useProductoStore((state) => state.setCategory);
  const ingredients = useProductoStore((state) => state.ingredient);
  const setIngredients = useProductoStore((state) => state.setIngredient);

  const [optionsCategories, setOptionsCategories] = useState<Option[]>([]);
  const [optionsIngredients, setOptionsIngredients] = useState<Option[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      if (response) {
        const categories = response.categories.map((item: { id: string; name: string }) => ({
          value: item.id,
          label: item.name,
        }));
        setOptionsCategories(categories);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await getAllProducts();
      if (response) {
        const ingredients = response.ingredients.map((item: { id: string; name: string }) => ({
          value: item.id,
          label: item.name,
        }));
        setOptionsIngredients(ingredients);
      }
    };
    fetchIngredients();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !price || !category || !ingredients) {
      setAlert("error", "Todos los campos son requeridos");

      setTimeout(() => {
        setAlert("info", "");
      }, 1500);
      return;
    }

    const response = await createProduct(name, price, category.toString(), ingredients.map((item) => item.toString()), status);
    const errorMessages: { [key: number]: string } = {
        400: "Faltan campos por rellenar",
        403: "No tienes permisos para realizar esta acción",
        404: "El producto no existe",
        500: "Error interno",
    };
    
    if (response.status in errorMessages) {
        setAlert('error', errorMessages[response.status]);

        setTimeout(() => {
            setAlert('info', '');
        }, 1500);
        return;
    }

    setAlert("success", response.msg);

    setTimeout(() => {
      setAlert("info", "");
      onCloseModal();
    }, 1500);
  };

  const onCloseModal = () => {
    setModal(false, null);
    setName("");
    setPrice(0);
    setCategory(0);
    setIngredients([]);
  }

  return (
    <ModalLayout
      showModal={modal.open}
      toggleModal={onCloseModal}
      panelClassName="sm:max-w-lg"
      placement="justify-center items-start"
    >
      <div className="duration-300 ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
        <div className="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
          <h3 className="font-medium text-gray-600 dark:text-white text-lg">Agregar producto del menú</h3>
          <button
            className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
            type="button"
            onClick={onCloseModal}
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          <h5 className="mb-2.5 text-base">Rellena todos los campos</h5>
          {
            alert.msg !== '' && (
                alert.type === 'error' ? (
                    <div className="bg-danger/10 text-danger border border-danger/20 text-sm rounded-md py-3 px-5 mb-2">
                        <div className="flex items-center gap-1.5">
                            <i className="ri-close-circle-line text-base"></i>
                            <p className="text-sm font-bold">
                                Error: <span className="font-normal">{alert.msg}</span>
                            </p>
                        </div>
                    </div>
                ) : ( 
                    <div className="bg-success/10 text-success border border-success/20 text-sm rounded-md py-3 px-5 mb-2">
                        <div className="flex items-center gap-1.5">
                            <i className="ri-sparkling-line text-base"></i>
                            <p className="text-sm font-bold">
                                Éxito: <span className="font-normal">{alert.msg}</span>
                            </p>
                        </div>
                    </div>
                )
            )
          }
          <hr className="my-5 dark:border-gray-700" />
          <form onSubmit={onSubmit}>
            <FormInput
              label="Nombre del platillo"
              labelClassName="font-semibold text-gray-500"
              type="text"
              className="form-input w-full md:w-96"
              name="name"
              placeholder="Spaghetti a la boloñesa"
              containerClass="mb-6 space-y-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormInput
              label="Precio del platillo"
              labelClassName="font-semibold text-gray-500"
              type="number"
              className="form-input w-full md:w-96"
              name="price"
              placeholder="$30.00"
              containerClass="mb-6 space-y-2"
              min="0"
              step={0.01}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <div className="flex flex-col mb-6 space-y-2">
              <label className="mb-2 font-semibold text-gray-500" htmlFor="choices-text-unique-values">
                Categoría
              </label>
              <Select
                className="select2 z-5"
                options={optionsCategories}
                value={optionsCategories.find((option) => Number(option.value) === category)}
                onChange={(e) => setCategory(Number(e!.value))}
                placeholder={"Selecciona una categoría"}
              />
            </div>
            <div className="flex flex-col mb-6 space-y-2">
              <label className="mb-2 font-semibold text-gray-500" htmlFor="choices-text-unique-values">
                Ingredientes
              </label>
              <Select
                className="select2 z-5"
                options={optionsIngredients}
                isMulti
                value={optionsIngredients.filter((option) => ingredients.includes(Number(option.value)))}
                onChange={(e) => setIngredients(e!.map((item) => Number(item.value)))}
                placeholder={"Selecciona ingredientes para el platillo"}
              />
            </div>
            <div className="flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700">
              <button
                className="btn bg-light text-gray-800 transition-all"
                type="button"
                onClick={onCloseModal}
              >
                Cerrar
              </button>
              <button className="btn bg-primary text-white" type="submit">
                Crear producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ModalCreateProducto;
