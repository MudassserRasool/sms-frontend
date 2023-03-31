import { api } from "./axios";

export const CredentialService = {
  get: () => api.get("/credentials"),
  getOne: (ID) => api.get("/todo/" + ID),
  create: (data) => api.post("/credentials", data),
  update: (ID, text, isCompleted) =>
    api.get("/todo/" + ID, { text, id: ID, isCompleted }),
  remove: (ID) => api.delete("/todo/" + ID),
};
