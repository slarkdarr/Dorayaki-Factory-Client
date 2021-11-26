import api from "../api";

const getAllRecipes = () => {
  return api.get("/recipes");
};

const getAllIngredients = () => {
  return api.get("/ingredients");
};

const DorayakiService = {
  getAllRecipes,
  getAllIngredients,
};

export default DorayakiService;