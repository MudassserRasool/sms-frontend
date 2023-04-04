import { api } from "./axios";

export const CredentialService = {
  get: () => api.get("/credentials"),
  getOne: (ID) => api.get("/todo/" + ID),
  create: (data) => api.post("/credentials", data),
  update: (ID, data) =>
    api.put("/credentials/" + ID, data),
  remove: (ID) => api.delete("/credentials/" + ID),
};
