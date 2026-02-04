const contactData = {
  title: "Get in Touch",
  subtitle:
    "I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out!",
  button: {
    text: "Say Hello 👋",
    href: "/Contact",
  },
};

const ContactSection: React.FC = () => (
  <section id="contact" className="py-24 max-w-3xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold mb-4">{contactData.title}</h2>
    <p className="text-lg text-gray-400 mb-8">{contactData.subtitle}</p>
    <a
      href={contactData.button.href}
      className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      {contactData.button.text}
    </a>
  </section>
);

export default ContactSection;
