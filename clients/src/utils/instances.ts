import axios from "axios";

export const tasksInstance = axios.create({
  baseURL: " http://localhost:8000/tasks",
  timeout: 1000,
  headers: {
    Authorization: "Bearer token",
    "Content-Type": "application/json",
  },
});
