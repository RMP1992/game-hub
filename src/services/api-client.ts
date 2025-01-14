import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "df85450af548423c8d54a130c6b92bbe",
  },
});
