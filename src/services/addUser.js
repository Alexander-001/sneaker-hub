import { serviceRequest } from "@/utils/request";

export const addUser = async (bodyParams) => {
  let data = { message: "", user: null };
  try {
    const response = await serviceRequest("users/add", "POST", bodyParams);
    if (response.user === null) {
      data = { message: response.message, user: null };
      return data;
    }
    if (response.errors && response.errors.length > 0) {
      const message = response.errors[0].msg || "";
      data = { message, user: null };
      return data;
    }
    data = { message: response.message, user: response.user };
  } catch (error) {
    console.log(error);
    data = {
      message: "Hubo un error en el servidor",
      user: null,
    };
  }
  return data;
};
