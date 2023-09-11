import axios from "axios";

export async function createUser(username, email) {
  if (!username || !email) {
    throw new Error("Username and email are required.");
  }

  const response = await axios.post("https://api.example.com/users", {
    username,
    email,
  });

  return response.data;
}
