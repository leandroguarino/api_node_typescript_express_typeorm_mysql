import { Router } from "express";
import RecipeController from "./controllers/RecipeController";

const routes = Router();

routes.get("/recipes", RecipeController.index);
routes.post("/recipes", RecipeController.store);
routes.get("/recipes/:id", RecipeController.show);
routes.put("/recipes/:id", RecipeController.update);
routes.delete("/recipes/:id", RecipeController.delete);

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

export default routes;