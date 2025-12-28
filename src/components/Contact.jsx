const Contact = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-10 flex justify-center">
      <div className="w-full max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
          Contact
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8">
          Let’s talk about your project or just say hello.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 sm:p-4 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 sm:p-4 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 sm:p-4 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />

          <button
            className="mt-2 p-3 sm:p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg
                       transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
