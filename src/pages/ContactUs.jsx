import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Disable submit button

    emailjs
      .sendForm(
        "service_kq32vr7",
        "template_jl7gzke",
        form.current,
        "9bU-0lLBRqQqM6o2W"
      )
      .then(
        () => {
          toast.success("Email sent successfully! 🎉");
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
            budget: "",
          });
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error);
          toast.error("Failed to send email. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col lg:flex-row mt-10 w-full h-fit">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us - FourthD</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {toast.container}

      <div className="hidden lg:block lg:w-[35%]">
        <video
          className="fixed top-50 left-0 w-80 object-cover z-10"
          src="/video/video.webm"
          loop
          muted
          autoPlay
        ></video>
      </div>

      <div className="w-full lg:w-[58%] mx-auto px-5 lg:px-0">
        <h1 className="font-bold text-[2rem] lg:text-[2.7rem] text-center lg:text-left">
          Brief us about your project
        </h1>
        <button className="bg-black text-white px-6 py-3 rounded-full mt-5 block mx-auto lg:mx-0">
          Contact
        </button>

        <div className="mt-10">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-6">
              <label className="text-[1.2rem] block mb-2">
                What’s your name?
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none focus:border-black py-3 w-full"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="text-[1.2rem] block mb-2">
                What’s your email?
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none focus:border-black py-3 w-full"
                placeholder="Your email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="text-[1.2rem] block mb-2">
                What’s your phone number?
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none focus:border-black py-3 w-full"
                placeholder="Your phone number"
                required
              />
            </div>

            <div className="mb-6">
              <label className="text-[1.2rem] block mb-2">
                What’s your company?
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none focus:border-black py-3 w-full"
                placeholder="Your company"
              />
            </div>

            <div className="mb-6">
              <label className="text-[1.2rem] block mb-2">
                Tell us more about your project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none focus:border-black py-3 w-full"
                placeholder="Describe here"
                rows="4"
                required
              />
            </div>

            <div className="mb-6">
              <label className="text-[1.2rem] block mb-2">
                Select your budget
              </label>
              <div className="flex flex-wrap gap-4">
                {["10k-30k", "30k-60k", "60k+", "Undefined"].map(
                  (budget, i) => (
                    <label
                      key={i}
                      className={`cursor-pointer px-5 py-2 border rounded-full transition ${
                        formData.budget === budget
                          ? "bg-gray-300"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={budget}
                        checked={formData.budget === budget}
                        onChange={handleChange}
                        className="hidden"
                      />
                      {budget}
                    </label>
                  )
                )}
              </div>
            </div>

            <button
              type="submit"
              className={`border rounded-full w-40 h-12 text-center flex items-center justify-center mt-10 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black text-white"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
