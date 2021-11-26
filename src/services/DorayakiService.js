import api from "../api";

const getRecipes = (id=null) => {
  return api.get("/recipes"+((id)?"/"+id:""));
};

const getAllIngredients = () => {
  return api.get("/ingredients");
};

const getAllRequests = () => {
  return api.get("/requests");
}

const DorayakiService = {
  getRecipes,
  getAllIngredients,
  getAllRequests
};

export default DorayakiService;