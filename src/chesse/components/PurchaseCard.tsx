import { Badge } from "@/components/ui/badge";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

interface PurchaseCardProps {
    name: string;
    type: string;
    description: string;
    price: number;
    unitsAvailable: number;
    weight: string;
    country: string;
    image: string;
    slug: string;
}

export const PurchaseCard = ({ name, type, description, price, unitsAvailable, weight, country, image, slug, }: PurchaseCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-[600px] bg-white rounded-2xl flex flex-col overflow-hidden">
            {/* Imagen: ocupa mitad superior */}
            <div className="h-[350px] overflow-hidden">
                <img
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 cursor-pointer"
                    src={`${image}`}
                    alt=""
                />
            </div>

            {/* Contenido: ocupa mitad inferior */}
            <div className="h-[250px] bg-white w-full p-3 flex flex-col gap-3">
                <div className="flex flex-row justify-between w-full">
                    <h1 className="text-lg font-medium">{name}</h1>
                    {
                        unitsAvailable < 10
                            ?
                            <Badge variant="destructive">{unitsAvailable}</Badge>
                            :
                            <Badge variant="descriptive">{unitsAvailable}</Badge>
                    }
                </div>
                <h3 className="text-gray-600 font-medium">{type}</h3>
                <h2 className="text-strongyellow text-2xl font-extrabold">${price}</h2>
                <button onClick={() => navigate(`/purchases/checkout/${slug}`)} className="mt-5 w-full flex flex-row justify-center items-center gap-5 hover:cursor-pointer rounded-md p-2 text-black bg-strongyellow">
                    <ShoppingCartIcon className="w-6 h-6 text-black" />
                    Buy ${price}
                </button>
            </div>
        </div>
    );
};
