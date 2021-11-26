import api from "../api";

const getRecipes = (id=null) => {
  return api.get("/recipes"+((id)?"/"+id:""));
};

const getAllIngredients = () => {
  return api.get("/ingredients");
};

const createRecipes = (data) => {
  return api.post("/recipes", data);
};

const createIngredient = (data) => {
  return api.post("/ingredients", data);
};

const updateRequest = (id,data) => {
  return api.put("/requests"+((id)?"/"+id:""), data);
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
  getRequests,
  createRecipes,
  createIngredient,
  updateRequest
};

export default DorayakiService;