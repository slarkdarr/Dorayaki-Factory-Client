import api from "../api";

const getAllRecipes = () => {
  return api.get("/recipes");
};

const DorayakiService = {
  getAllRecipes,
};

export default DorayakiService;