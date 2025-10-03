import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface PurchaseCardProps {
    imgName: string;
}

export const PurchaseCard = ({ imgName }: PurchaseCardProps) => {
    return (
        <div className="w-full h-[600px] bg-white rounded-2xl flex flex-col overflow-hidden">
            {/* Imagen: ocupa mitad superior */}
            <div className="h-[350px] overflow-hidden">
                <img
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 cursor-pointer"
                    src={imgName}
                    alt=""
                />
            </div>

            {/* Contenido: ocupa mitad inferior */}
            <div className="h-[250px] bg-white w-full p-3 flex flex-col gap-3">
                <div className="flex flex-row justify-between w-full">
                    <h1 className="text-lg font-medium">Aged Cheddar</h1>
                    <Badge variant="descriptive">24 units</Badge>
                </div>
                <h3 className="text-gray-600 font-medium">Hard Chesse</h3>
                <h2 className="text-strongyellow text-2xl font-extrabold">$45.99</h2>
                <div className="flex flex-row justify-between w-full">
                    {/* <Button variant='productamount'>-</Button> */}
                    <Button variant='productamount'>-</Button>
                    <h1 className="text-lg font-medium">1</h1>
                    <Button variant='productamount'>+</Button>
                </div>
                <button className="w-full flex flex-row justify-center items-center gap-5 hover:cursor-pointer rounded-md p-2 text-black bg-strongyellow">
                    <ShoppingCartIcon className="w-6 h-6 text-black" />
                    Buy $45.99
                </button>
            </div>
        </div>
    );
};
