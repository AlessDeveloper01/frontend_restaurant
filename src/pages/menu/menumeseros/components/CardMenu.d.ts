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
    };
}
declare const CardMenu: ({ orden }: CardMenuProps) => import("react/jsx-runtime").JSX.Element;
export default CardMenu;
