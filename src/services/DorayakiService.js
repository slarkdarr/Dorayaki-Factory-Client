import api from "../api";

const getRecipes = (id=null) => {
  return api.get("/recipes"+((id)?"/"+id:""));
};

const getAllIngredients = () => {
  return api.get("/ingredients");
};

const updateIngredient = (id=null, data=null) => {
  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
  };
  console.log(data)
  return api.put("/ingredients"+((id)?"/"+id:""), {},config);
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