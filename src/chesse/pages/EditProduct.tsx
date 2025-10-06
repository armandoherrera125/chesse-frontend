import { ArrowLeftIcon, CloudIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { Upload } from 'lucide-react';
import { cheeses } from "@/data/CheeseList";


export const EditProduct = () => {
    const { slug: paramSlug } = useParams();
    const [productForm, setProductForm] = useState({
        name: '',
        type: '',
        description: '',
        price: 0,
        unitsAvailable: 0,
        weight: '',
        image: '',
        slug: ''
    });
    const { name, type, description, price, unitsAvailable, weight, image, slug } = productForm;
    const handleChangeNewProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductForm({
            ...productForm,
            [e.target.name]: e.target.value
        });
    }
    const navigate = useNavigate();
    const [dragActive, setDragActive] = useState(false);
    const [newFiles, setNewFiles] = useState<File[]>([]);
    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const files = Array.from(e.dataTransfer.files);
        setNewFiles(files);
        const newFileUrls = files.map(file => URL.createObjectURL(file));
        setProductForm({
            ...productForm,
            image: newFileUrls[0]
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const files = Array.from(e.target.files);
        setNewFiles(files);
        const newFileUrls = files.map(file => URL.createObjectURL(file));
        setProductForm({
            ...productForm,
            image: newFileUrls[0]
        });
    };
    const handleEditProduct = () => {
        // aqui tengo que evaluar si newFiles tiene algo significa que hay una foto
        // si no dejo lo que tenga img y eso no lo modifico
        if (newFiles.length == 0) {
            //aqui empujo todo el producto editado y dejo image con la image
            // que ya tenia

        } else {
            //le caigo encima con los newFiles[0]
        }
        console.log(productForm);
        navigate('/inventory');
    }
    useEffect(() => {
        if (!paramSlug) return;
        const productFound = cheeses.find((item) => item.slug == paramSlug);
        if (!productFound) {
            navigate('/inventory');
            return;
        }
        setProductForm({
            name: productFound.name,
            type: productFound.type,
            description: productFound.description,
            price: productFound.price,
            unitsAvailable: productFound.unitsAvailable,
            weight: productFound.weight,
            image: productFound.image,
            slug: productFound.slug,
        });
    }, [paramSlug]);
    return (
        <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
            <h1 className="font-bold text-3xl">Edit Product</h1>
            <h2 className="text-gray-600 font-medium">Update product information</h2>
            <ArrowLeftIcon onClick={() => navigate(-1)} className="h-6 w-6 text-black hover:bg-strongyellow rounded" />
            <div className="bg-white grid grid-cols-1 w-full rounded-2xl shadow p-5 gap-5">
                <h1 className="text-xl md:text-2xl font-medium ">Product Information</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Product Name</label>
                    <input onChange={handleChangeNewProduct} name="name" value={name} className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="Aged Cheddar" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Category</label>
                    <input onChange={handleChangeNewProduct} name="type" value={type} className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="Select a category" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Slug</label>
                    <input onChange={handleChangeNewProduct} name="slug" value={slug} className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="name-with-dash-without-spaces" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Weight</label>
                    <input onChange={handleChangeNewProduct} name="weight" value={weight} className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="Weight" type="text" />
                </div>
                <div className="grid grid-cols-2 w-full gap-3">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Price ($)</label>
                        <input onChange={handleChangeNewProduct} name="price" value={price} className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="0.00" type="text" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Stock (units)</label>
                        <input onChange={handleChangeNewProduct} name="unitsAvailable" value={unitsAvailable} className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="0" type="text" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="">Description</label>
                    <input onChange={handleChangeNewProduct} name="description" value={description} className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="Describe the product..." type="text" />
                </div>


                <div className="flex flex-col gap-2">
                    <label htmlFor="">Product Image</label>
                    <img src={`${image.startsWith('blob') ? `${image}` : `/${image}`}`} className="w-[200px] h-[200px] rounded-2xl shadow self-center md:self-start" alt="" />
                    <div
                        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${dragActive
                            ? 'border-blue-400 bg-blue-50'
                            : 'border-orange-200 hover:border-strongyellow'
                            }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                        />
                        <div className="space-y-4">
                            <Upload className="mx-auto h-12 w-12 text-slate-400" />
                            <div>
                                <p className="text-lg font-medium text-slate-700">
                                    Arrastra las imágenes aquí
                                </p>
                                <p className="text-sm text-slate-500">
                                    o haz clic para buscar
                                </p>
                            </div>
                            <p className="text-xs text-slate-400">
                                PNG, JPG, WebP hasta 10MB cada una
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-3">
                    <button onClick={() => navigate('/inventory')} className="mt-5 w-5/6 flex flex-row justify-center items-center gap-5 hover:cursor-pointer rounded-md p-2 text-black bg-strongyellow hover:opacity-95">
                        <CloudIcon className="w-6 h-6 text-black" />
                        Save Changes
                    </button>
                    <button onClick={() => navigate('/inventory')} className="mt-5 w-1/6 flex flex-row justify-center items-center gap-5 hover:cursor-pointer rounded-md p-2 text-black bg-orange-50 opacity-95">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
