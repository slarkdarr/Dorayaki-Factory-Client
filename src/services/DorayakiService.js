import api from "../api";

const getRecipes = (id=null) => {
  return api.get("/recipes"+((id)?"/"+id:""));
};

const getAllIngredients = () => {
  return api.get("/ingredients");
};

const updateIngredient = (id=null, data=null) => {
  return api.put("/ingredients"+((id)?"/"+id:""), data);
};
const getRequests = (id=null) => {
  return api.get("/requests"+((id)?"/"+id:""));
}

const DorayakiService = {
  getRecipes,
  getAllIngredients,
  updateIngredient,
  getRequests
};

export default DorayakiService;