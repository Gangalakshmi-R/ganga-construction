
import axios from "axios";

const API =
  import.meta.env.VITE_API_BASE_URL;

export const getAllReviews =
  async () => {

    const response =
      await axios.get(
        `${API}/api/reviews`
      );

    return response.data;
};

export const createReview =
  async (reviewData) => {

    const response =
      await axios.post(
        `${API}/api/reviews`,
        reviewData
      );

    return response.data;
};

export const deleteReview =
  async (id) => {

    await axios.delete(
      `${API}/api/reviews/${id}`
    );
};
