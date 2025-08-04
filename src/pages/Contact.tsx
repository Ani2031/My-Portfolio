import { useTheme } from "../context/ThemeContext";

const Contact = () => {
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
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-6">
          We'd love to hear from you! Reach out to us using the form below or
          email us at <strong>support@shopnow.com</strong>.
        </p>
        <form className="grid gap-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded border border-gray-300 h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
