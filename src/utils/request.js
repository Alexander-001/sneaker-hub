import axios from "axios";

const baseURL = "http://localhost:8080";
let tokenInfo = "";

export function requestSetToken(token) {
  tokenInfo = token;
}

export async function serviceRequest(service = "", method = "POST", body = {}) {
  const url = (baseURL || window?.location?.origin || "") + "/" + service;
  let settingsHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  };
  if (method === "GET" || body instanceof FormData) {
    delete settingsHeaders["Content-Type"];
  }
  if (tokenInfo) settingsHeaders.Authorization = `Bearer ${tokenInfo}`;
  let settings = {
    method,
    headers: settingsHeaders,
  };
  let settingBody = {};
  if (Object.keys(body).length > 0) settingBody = { ...settingBody, ...body };
  if (method !== "GET" && settingBody) {
    settings.body = JSON.stringify(settingBody);
  }
  return new Promise((resolve, reject) => {
    const axiosConfig = {
      url,
      method: settings.method,
      headers: settings.headers,
      data: settings.body || null,
    };
    axios(axiosConfig)
      .then((response) => resolve(response.data))
      .catch((error) => {
        if (error.response) {
          reject({ status: error.response.status, ...error.response.data });
        } else if (error.request) {
          reject({
            status: 0,
            message: "No se recibió respuesta del servidor.",
            error: error.message,
          });
        } else {
          reject({
            status: 0,
            message: "Error en la solicitud.",
            error: error.message,
          });
        }
      });
  });
}
