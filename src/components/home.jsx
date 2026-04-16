import TypeWriter from "./TypeWriter";

function Home() {
  const text = "Full-Stack Web Developer";

  return (
      <div
        id="home"
        className="bg-gradient-to-br from-blue-950 to-black text-white min-h-screen transition-colors duration-300"
      >
        {/* HERO SECTION */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-16 md:py-24 gap-12">
          
          <div className="flex-1 text-center md:text-left" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-mon">
              Hello <br /> I'm Muhammad Omer
              <TypeWriter text={text} />
            </h2>

            <p data-aos="fade-up" data-aos-delay="300" className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 text-gray-100">
              Specialize in building scalable web applications using modern
              technologies. I have a Bachelor's degree in IT and . I love
              creating interactive user experiences and solving real-world
              problems with clean, maintainable code.
            </p>

            
            <div data-aos="fade-up" data-aos-delay="400" className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-blue-950 px-6 py-3 rounded-lg hover:bg-blue-900 transition cursor-pointer"
              >
                View Projects
              </a>

              <a
                href="#contact"
                data-aos="fade-up"
                data-aos-delay="500"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-950 transition cursor-pointer"
              >
                Hire Me
              </a>
            </div>
          </div>

          
          <div className="flex-1 flex justify-center" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/images/hama.jpg"
              alt="Hama Omer"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl ring-4 ring-white/40"
            />
          </div>
        </div>
      </div>
  );
}

export default Home;
