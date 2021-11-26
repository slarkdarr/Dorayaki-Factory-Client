import api from "../api";

const getRecipes = (id=null) => {
  return api.get("/recipes"+((id)?"/"+id:""));
};

const getAllIngredients = () => {
  return api.get("/ingredients");
};

const getRequests = (id=null) => {
  return api.get("/requests"+((id)?"/"+id:""));
}

const DorayakiService = {
  getRecipes,
  getAllIngredients,
  getRequests
};

export default DorayakiService;