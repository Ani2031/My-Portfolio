import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen pt-28 pb-10 px-6 transition-all duration-300 ${
        theme === "theme1"
          ? "bg-white text-gray-900"
          : theme === "theme2"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed">
          Welcome to ShopNow! We're dedicated to providing you the very best of products, with an emphasis on reliability, customer service, and uniqueness.
          <br />
          <br />
          Founded in 2025, ShopNow has come a long way from its beginnings. When we first started, our passion for quality e-commerce drove us to start our own business.
        </p>
      </div>
    </main>
  );
};

export default About;
