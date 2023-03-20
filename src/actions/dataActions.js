import axios from "axios";

const baseUrl = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";

export const getLists = async (desc, location, fulltime) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        description: desc,
        location: location,
        full_time: fulltime,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getDetail = async (id) => {
  try {
    const response = await axios.get(
      "http://dev3.dansmultipro.co.id/api/recruitment/positions/" + id,
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
