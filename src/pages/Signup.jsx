import { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const send = () => {
    const url = "https://fakestoreapi.com/users";
    axios.post(url, {
      username: "",
      email: "",
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <form
        onSubmit={(e) => e.preventDefault}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-white">
          Create an account
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full rounded-xl bg-gray-700 border border-gray-600 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-xl bg-gray-700 border border-gray-600 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-xl bg-gray-700 border border-gray-600 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 outline-none"
          />
        </div>

        <button
          onClick={send}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition cursor-pointer"
        >
          Sign
        </button>
      </form>
    </div>
  );
}

export default Signup;
