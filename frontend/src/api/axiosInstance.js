import axiosInstance
from "./axiosInstance";

export const getAllReviews =
  async () => {

    const response =
      await axiosInstance.get(
        "/reviews"
      );

    return response.data;
};

export const createReview =
  async (reviewData) => {

    const response =
      await axiosInstance.post(
        "/reviews",
        reviewData
      );

    return response.data;
};

export const deleteReview =
  async (id) => {

    await axiosInstance.delete(
      `/reviews/${id}`
    );
};
