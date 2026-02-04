const aboutdata = {
  subtitle:
    "Computer Engineering graduate passionate about Software Engineering, problem-solving, and turning ideas into reliable software. I'm skilled in programming languages like Java, Python, C, C++, C#, HTML, CSS and JavaScript with an interest in Machine Learning. Highly motivated to constantly develop skills and grow professionally. Determined to learn in the workplace individually and as a team to achieve common goals and objectives.",
};

const AboutSection: React.FC = () => (
  <section id="about" className="py-24 max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-4">About Me</h2>
    <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 mx-auto mb-8 rounded-full"></div>
    <p className="text-lg text-gray-400 leading-relaxed">
      {aboutdata.subtitle}
    </p>
  </section>
);

export default AboutSection;
