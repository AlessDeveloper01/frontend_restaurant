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
    };
}
declare const CardItem: ({ item }: CardProps) => import("react/jsx-runtime").JSX.Element;
export default CardItem;
