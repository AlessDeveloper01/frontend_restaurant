import formatMxCurrency from "@/helpers/format-currency";
import { useOrdenStore } from "@/store/Orden/Orden.store";

interface CardProps {
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
    }
}

const  CardItem = ({ item }: CardProps) => {

    const addOrden = useOrdenStore((state) => state.addItem);

    type ItemWithQuantity = { item: typeof item, quantity: number };
    const ItemQ: ItemWithQuantity = { item, quantity: 1 };

    return (
        <button className="card border border-warning relative" type="button" key={item.id} onClick={() => addOrden(ItemQ)}>
            <div className="p-6">
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2 uppercase">
                    {item.name}
                </h3>
                <p className="mt-1 text-gray-800 dark:text-gray-400 mb-3">
                    Precio:{" "}
                    <span className="text-xl font-black text-orange-500">{formatMxCurrency(item.price)}</span>
                </p>
                <p className="absolute -top-2 right-0 p-4 text-black text-center uppercase font-bold text-xs">
                    Presionarme
                </p>
            </div>
        </button>
    );
};

export default CardItem;
