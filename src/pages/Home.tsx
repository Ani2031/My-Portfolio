import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Home = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Theme-specific styles
  const baseStyles = `transition-all duration-500 ease-in-out min-h-screen w-full px-4 pt-28 pb-10`;

  const themeStyles = {
    theme1: `bg-white text-gray-900 font-sans`,
    theme2: `bg-gray-900 text-white font-serif`,
    theme3: `bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 font-pacifico`,
  };

  return (
    <main className={`${baseStyles} ${themeStyles[theme]}`}>
      {/* Hero Section */}
      <section
        className={`${
          theme === "theme3" ? "text-left pl-6" : "text-center"
        } max-w-6xl mx-auto mb-16`}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Discover the Best Deals Online
        </h1>
        <p
          className={`${
            theme === "theme2" ? "text-gray-300" : "text-gray-600"
          } text-lg md:text-xl mb-6 max-w-3xl ${
            theme === "theme3" ? "text-left" : "mx-auto text-center"
          }`}
        >
          Your one-stop destination for quality products. Enjoy seamless
          shopping with our responsive and modern UI.
        </p>
        <div className={`${theme === "theme3" ? "text-left" : "text-center"}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl shadow-lg transition">
            Start Shopping
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`max-w-6xl mx-auto grid gap-8 ${
          theme === "theme3"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
            : "sm:grid-cols-2 lg:grid-cols-3"
        } mb-20`}
      >
        {[
          {
            title: "Fast Delivery",
            desc: "We ensure quick and safe delivery of all your products, no matter where you are.",
          },
          {
            title: "Best Prices",
            desc: "Get top-quality items at unbeatable prices. We make shopping affordable.",
          },
          {
            title: "24/7 Support",
            desc: "Have a question? Our support team is here to help you anytime.",
          },
        ].map((feat, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 transition-all duration-500 shadow-lg ${
              theme === "theme1"
                ? "bg-white"
                : theme === "theme2"
                ? "bg-gray-800 text-white"
                : "bg-white border-2 border-dashed border-purple-300"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
            <p
              className={`${
                theme === "theme2" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {feat.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Product Listing */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Featured Products
        </h2>
        <div
          className={`grid gap-6 ${
            theme === "theme3"
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {loading ? (
            <p className="col-span-full text-center">Loading products...</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className={`overflow-hidden rounded-2xl shadow-md border transition-all duration-300 ${
                  theme === "theme2"
                    ? "bg-gray-800 text-white border-gray-700"
                    : theme === "theme3"
                    ? "bg-white border-4 border-blue-200 rotate-1 hover:rotate-0"
                    : "bg-white"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-56 w-full object-contain bg-gray-100 p-4"
                />
                <div className="p-5 flex flex-col justify-between h-[250px]">
                  <h3 className="text-lg font-semibold mb-2">
                    {product.title.slice(0, 40)}...
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {product.description.slice(0, 100)}...
                  </p>
                  <div className="mt-auto">
                    <p className="text-blue-600 font-bold text-lg mb-2">
                      ${product.price}
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Footer or CTA */}
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-2">Ready to Explore More?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Sign up today and get access to exclusive offers and updates.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition">
          Join Now
        </button>
      </section>
    </main>
  );
};

export default Home;
