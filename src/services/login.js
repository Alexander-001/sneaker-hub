import { serviceRequest } from "@/utils/request";

export const loginUser = async (bodyParams) => {
  try {
    const response = await serviceRequest("/login", "POST", bodyParams);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
