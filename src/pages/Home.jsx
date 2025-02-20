import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Workshops",
    description:
      "Join our hands-on workshops led by industry experts. From coding bootcamps to design thinking sessions, our workshops provide practical skills and real-world experience to help you grow professionally.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Networking",
    description:
      "Connect with like-minded professionals and industry leaders through our curated networking events. Build lasting relationships, share insights, and discover new opportunities in a collaborative environment.",
    image:
      "https://plus.unsplash.com/premium_photo-1682431037968-75b9b15425cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
  },
  {
    title: "Innovation Challenges",
    description:
      "Participate in our monthly innovation challenges where teams tackle real-world problems. Showcase your creativity, win exciting prizes, and potentially see your solutions implemented in partner organizations.",
    image:
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGlubm92YXRpb258ZW58MHx8MHx8fDA%3D",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) =>
        current === features.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === features.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? features.length - 1 : current - 1
    );
  };

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
            alt="Tech innovation workspace"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/90"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">
            Welcome to Tech Innovators Club
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100">
            Thriving to build a better tomorrow.
          </p>
          <Link to="/register">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join Us
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="relative h-[600px] sm:h-[550px] overflow-hidden rounded-2xl shadow-2xl">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full transform transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="h-full bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative h-64 sm:h-72 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
                        {feature.title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation*/}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10 transform hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-blue-900" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10 transform hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-blue-900" />
            </button>

            {/* Navigation Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-blue-600 to-indigo-600"
                      : "w-2 bg-gradient-to-r from-blue-300 to-indigo-300 hover:from-blue-400 hover:to-indigo-400"
                  } h-2 rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent font-medium mb-6">
            Ready to shape the future? Get involved today!
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
