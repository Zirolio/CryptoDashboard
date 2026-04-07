export interface TableRowProps {
    coin: string;
    price: string | number;
    priceChange: string | number;

    isCaption?: boolean;
}