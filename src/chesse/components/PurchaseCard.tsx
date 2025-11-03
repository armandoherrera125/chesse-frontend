import { useAppDispatch } from "@/auth/hooks/hooks";
import { Badge } from "@/components/ui/badge";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
import { addToCart, type itemCart } from "../features/cartSlice";
import { toast } from "sonner";

interface PurchaseCardProps {
    name: string;
    type: string;
    description: string;
    price: number;
    unitsAvailable: number;
    weight: string;
    image: string;
    slug: string;
    id: string;
}

export const PurchaseCard = ({ id, name, type, description, price, unitsAvailable, weight, image, slug, }: PurchaseCardProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleAddProductToCart = () => {
        const product: itemCart = {
            id,
            slug,
            name,
            price,
            quantity: 1,
            image,
            type
        }
        dispatch(addToCart(product));
        toast.success(`Product ${name} added to the bag`)
    }
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
                <button onClick={handleAddProductToCart} className="mt-5 w-full flex flex-row justify-center items-center gap-5 hover:cursor-pointer rounded-md p-2 text-black bg-strongyellow">
                    <ShoppingBagIcon className="w-6 h-6 text-black" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
