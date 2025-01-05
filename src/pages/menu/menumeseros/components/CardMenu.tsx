import formatMxCurrency from "@/helpers/format-currency";
import { useOrdenStore } from "@/store/Orden/Orden.store";

interface CardMenuProps {
    orden: {
        item: {
            id: number;
            name: string;
            price: number;
            category: number;
            status: boolean;
            ingredient: number[];
            categoryDetails?: {
                id: number;
                name: string;
                status: boolean;
            } | undefined;
        };
        quantity: number;
    }
}

const CardMenu = ({ orden }: CardMenuProps) => {
    const { item, quantity } = orden;

    const updateItem = useOrdenStore(state => state.updateItem);
    const removeItem = useOrdenStore((state) => state.removeItem);

    const handleUpdateDecrement = (id: number, quantity: number) => {
        if(quantity <= 1) {
            removeItem(id);
        }

        updateItem(id, quantity - 1);
    }

    return (
        <div className="card mb-2 bg-slate-100 p-2 relative">
            <div className="p-2">
                <h3 className="card-title pb-2">{item.name}</h3>
                <p className="text-gray-400">
                    Subtotal: <span className="font-bold text-orange-500">{formatMxCurrency(item.price)}</span>{" "}
                    x {quantity}
                </p>
                <p className="text-gray-400">
                    Total: <span className="font-bold text-orange-500">{formatMxCurrency(item.price * quantity)}</span>
                </p>
            </div>
            <hr />
            <div className="flex justify-between items-center p-2">
                <button className="btn bg-danger text-white"
                    onClick={() => handleUpdateDecrement(item.id, quantity)}
                >
                    <i className="ri-subtract-line"></i>
                </button>
                <p className="text-xl">
                    <span className="font-bold">{quantity}</span>
                </p>
                <button className="btn bg-primary text-white"
                    onClick={() => updateItem(item.id, quantity + 1)}
                >
                    <i className="ri-add-line"></i>
                </button>
            </div>

            <div className="absolute top-2 right-2">
                <button className="btn bg-danger text-white"
                    onClick={() => removeItem(item.id)}
                >
                    <i className="ri-delete-bin-line"></i>
                </button>
            </div>
        </div>
    );
};

export default CardMenu;
