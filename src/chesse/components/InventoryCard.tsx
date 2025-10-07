import { Badge } from "@/components/ui/badge";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

interface InventoryCardProps {
    name: string;
    type: string;
    description: string;
    price: number;
    unitsAvailable: number;
    weight: string;
    image: string;
    slug: string;
}

export const InventoryCard = ({ name, type, description, price, unitsAvailable, weight, image, slug,
}: InventoryCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-[600px] bg-white rounded-2xl flex flex-col overflow-hidden">
            <div className="h-[350px] overflow-hidden">
                <img
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 cursor-pointer"
                    src={image}
                    alt=""
                />
            </div>
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
                <div className="flex flex-row gap-3 w-full mt-8">
                    <button
                        onClick={() => navigate(`/inventory/edit/${slug}`)}
                        className="w-full bg-orange-50 hover:bg-strongyellow hover:cursor-pointer rounded-md p-2 text-balck text-center flex flex-row gap-5 justify-center items-center">
                        <PencilSquareIcon className="w-6 h-6 text-black" />
                        Edit
                    </button>
                    <button
                        onClick={() => navigate(`/inventory/delete/${slug}`)}
                        className="w-full bg-orange-50 hover:bg-strongyellow hover:cursor-pointer rounded-md p-2 text-balck text-center flex flex-row gap-5 justify-center items-center">
                        <TrashIcon className="w-6 h-6 text-black" />
                        Remove
                    </button>
                </div>

            </div>
        </div>
    )
}
