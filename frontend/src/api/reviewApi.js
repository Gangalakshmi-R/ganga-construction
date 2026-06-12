import axios from "axios";

const API =
  "http://localhost:8080/api/reviews";

export const getAllReviews =
  async () => {

    const response =
      await axios.get(API);

    return response.data;
};

export const createReview =
  async (reviewData) => {

    const response =
      await axios.post(
        API,
        reviewData
      );

    return response.data;
};

export const deleteReview =
  async (id) => {

    await axios.delete(
      `${API}/${id}`
    );
};