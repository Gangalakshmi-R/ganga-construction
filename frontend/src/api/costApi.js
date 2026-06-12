import axiosInstance
from "./axiosInstance";

export const calculateCost =
  async (data) => {

    const response =
      await axiosInstance.post(
        "/cost-estimations",
        data
      );

    return response.data;
};