const Register = () => {
  return (
    <div className="flex-grow bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent text-center">
          Join Tech Innovators Club
        </h1>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Areas of Interest
              </label>
              <select
                id="interests"
                name="interests"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select your primary interest</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="data">Data Science</option>
                <option value="design">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
