import axiosInstance
from "./axiosInstance";

export const getAllProjects =
  async () => {

    const response =
      await axiosInstance.get(
        "/projects"
      );

    return response.data;
};