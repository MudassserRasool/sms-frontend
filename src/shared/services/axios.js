import axios from "axios";
// import { baseUrl } from "../constants";
const baseUrl = "https://apigateway-preprod.findanexpert.net/sms";

export const api = axios.create({
  baseURL: baseUrl + "/",
  headers: {
    "x-auth-token": localStorage.getItem("token"),
  },
  timeout: 30000,
});


