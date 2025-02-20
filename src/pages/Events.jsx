import { useState } from "react";

const sampleEvents = [
  {
    id: 1,
    title: "Tech Workshop",
    date: "2025-03-15",
    time: "10:00 AM",
    description: "A hands-on workshop on the latest tech trends and tools.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGlubm92YXRpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Innovation Seminar",
    date: "2025-03-20",
    time: "2:00 PM",
    description: "A seminar discussing innovative ideas and future technology.",
    image:
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGlubm92YXRpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Networking Meetup",
    date: "2025-03-25",
    time: "6:00 PM",
    description:
      "An informal meetup for tech enthusiasts to network and share ideas.",
    image:
      "https://plus.unsplash.com/premium_photo-1671069848012-2fee83ddd6f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxpbm5vdmF0aW9ufGVufDB8fDB8fHww",
  },
];

const Events = () => {
  const [events, setEvents] = useState(sampleEvents);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  // TODO: Implement real filtering based on event type or other criteria
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    // Placeholder filtering logic: Currently just resets to sampleEvents
    // In a real implementation, update "events" based on the filter criteria.
    setEvents(sampleEvents);
  };

  const handleEventClick = (event) => {
    setActiveEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveEvent(null);
  };

  return (
    <div className="flex-grow bg-gradient-to-b from-gray-50 to-white py-12">
      {/* Header & Filter Controls */}
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
          Upcoming Events
        </h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Workshop", "Seminar", "Meetup"].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
                selectedFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Event Cards List */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => handleEventClick(event)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{event.date}</p>
                  <p className="text-sm">{event.time}</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">
                  {event.title}
                </h2>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Details Modal */}
      {showModal && activeEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {activeEvent.title}
              </h2>
              <div className="flex gap-4 mb-6 text-gray-600">
                <p>{activeEvent.date}</p>
                <p>{activeEvent.time}</p>
              </div>
              <p className="text-gray-700 mb-8">{activeEvent.description}</p>
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-105"
                onClick={() => {
                  /* TODO: Implement registration logic */
                  /*Completed in Register.jsx*/
                }}
              >
                Register for Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
