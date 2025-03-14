// Since this is inside app/products/page.tsx, it is automatically an SSR route
import Layout from "@/components/Layout";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

// ✅ Fetch data inside an async Server Component
const ProductsPage = async () => {
  let products: Product[] = [];

  try {
    const res = await fetch("https://dummyjson.com/products", {
      cache: "no-store", // Ensures SSR behavior
    });

    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    products = data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <Layout>
      <h1 className="text-center text-3xl font-bold text-blue-700 mb-6">All Products</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-sm p-5 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 truncate">{product.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-semibold text-blue-600">
                  ₱{product.price.toFixed(2)}
                </span>
                <span className="text-sm text-red-500">-{product.discountPercentage}%</span>
              </div>
              <div className="mt-2 flex justify-between items-center text-sm">
                <span className="text-yellow-500">⭐ {product.rating.toFixed(1)}</span>
                <span className={`font-semibold ${product.stock > 0 ? "text-green-500" : "text-red-500"}`}>
                  {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
                </span>
              </div>
              <p className="mt-2 text-gray-500 text-xs">Brand: {product.brand} | Category: {product.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-semibold text-red-600">No products found.</p>
      )}
    </Layout>
  );
};

export default ProductsPage;
