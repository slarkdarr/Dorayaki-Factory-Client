import api from "../api";

const getRecipes = (id=null) => {
  return api.get("/recipes"+((id)?"/"+id:""));
};

const getAllIngredients = () => {
  return api.get("/ingredients");
};

const DorayakiService = {
  getRecipes,
  getAllIngredients,
};

export default DorayakiService;