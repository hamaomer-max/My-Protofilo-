import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, msg) => {
    setToast({ type, msg }); // ← store object with type AND msg
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (data.success) {
        showToast("success", "Message sent! I'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        showToast("error", "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log("Fetch error:", error);
      showToast("error", "Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-blue-950 to-black text-white"
    >
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl text-white transition-all duration-500
            ${toast.type === "success" ? "bg-green-400" : "bg-red-400"}`}
        >
          <span className="text-2xl">
            {toast.type === "success" ? "✓" : "✕"}
          </span>
          <div>
            <p className="font-semibold text-sm">
              {toast.type === "success" ? "Message Sent!" : "Something went wrong"}
            </p>
            <p className="text-xs opacity-90">{toast.msg}</p>
          </div>
          <button
            onClick={() => setToast(null)}
            className="ml-4 text-white opacity-70 hover:opacity-100 text-lg font-bold"
          >
            ✕
          </button>
        </div>
      )}

      <div data-aos="fade-up" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
          <p className="text-gray-300 text-lg mb-6">
            If you have a project, idea, or collaboration opportunity, feel free
            to contact me. I'm always open to discussing new projects and
            creative ideas.
          </p>
        </div>

        {/* Contact Form */}
        <form
        data-aos="fade-up"
        data-aos-delay="200"
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 focus:outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-yellow-600 text-blue-950 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;