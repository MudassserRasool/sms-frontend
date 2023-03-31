import { api } from "./axios";

export const TodoApi = {
  get: () => api.get("/todo"),
  getOne: (ID) => api.get("/todo/" + ID),
  create: (text) => api.post("/todo", { text }),
  update: (ID, text, isCompleted) =>
    api.get("/todo/" + ID, { text, id: ID, isCompleted }),
  remove: (ID) => api.delete("/todo/" + ID),
};
