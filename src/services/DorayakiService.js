import api from "../api";

const getAllRecipes = () => {
  return api.get("/recipes");
};

const getAllIngredients = () => {
  return api.get("/ingredients");
};

const getAllRequests = () => {
  return api.get("/requests");
}

const DorayakiService = {
  getAllRecipes,
  getAllIngredients,
  getAllRequests
};

export default DorayakiService;