import Link from "next/link";

export interface Products{
    id: number,
    title: string,
    description: string,
}

const Card = ({product}:{product:Products}):React.ReactNode => {
  return (
    <div className="w-1/2 py-4 px-3 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold text-slate-500 truncate">{product.title}</h2>
    <p className="text-sm">{product.description}</p>
</div>
  )
}



const page = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    const products: Products[]= data.products;

return <div className="py-5" >
    <div className=" px-7">
    <Link href={'/'} className="text-xl transform ease-in-out hover:text-slate-400 duration-75">Back</Link>
    </div>

    <h1 className="text-center text-3xl font-bold  mb-5 " >All Products</h1>
    <div className="grid grid-cols-3 place-items-center gap-3 ">
        {products?.map(p => {
            return (
               <Card key={p.id} product={p}/>
            )
        })}
    </div>
</div>
}

export default page;