import { useState } from "react";
import { X } from "lucide-react";

const sampleProjects = [
  {
    id: 1,
    title: "AI Chatbot",
    description:
      "An AI-driven chatbot designed to assist users with common queries.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    tech: ["Python", "TensorFlow", "Natural Language Processing"],
    status: "In Development",
  },
  {
    id: 2,
    title: "Smart Campus App",
    description:
      "A mobile app to streamline campus services and enhance connectivity.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    tech: ["React Native", "Node.js", "MongoDB"],
    status: "Live",
  },
  {
    id: 3,
    title: "Virtual Reality Lab",
    description:
      "A project exploring virtual reality applications in education and research.",
    image:
      "https://plus.unsplash.com/premium_photo-1663091701962-2ae72a2ad2ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dnJ8ZW58MHx8MHx8fDA%3D",
    tech: ["Unity", "C#", "VR Development"],
    status: "Planning",
  },
];

const Projects = () => {
  const [projects] = useState(sampleProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="flex-grow bg-gradient-to-b from-gray-50 to-white py-12">
      {/* Page Header */}
      <section className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
          Our Projects
        </h1>
        <p className="text-xl text-gray-600">
          Discover our innovative projects that showcase the future of
          technology.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-900">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-900">
                  {selectedProject.status}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>
              <p className="text-gray-700 mb-6">
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-105"
                onClick={() => {
                  /* TODO: Implement project details/demo logic */
                }}
              >
                View Project Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
