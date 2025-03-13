import Link from "next/link";

const MainPage = () => {
return <>
<div className="min-h-screen flex justify-center items-center ">
  <div className="text-center">
    <h1 className="text-7xl font-bold text-center mb-3">Rica Mariz Gudito</h1>
    <p className="text-lg">BSIT - 3</p>

    <div className="mt-6 space-x-7  ">
      <Link href={'/products'} className="button">See all Products</Link>
      <Link href={'/todos'} className="button">See all ToDos</Link>
    </div>
  </div>
   </div>
</>
}

export default MainPage;