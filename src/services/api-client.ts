import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9e50654c85064c75ab547616b3d08378",
  },
});
