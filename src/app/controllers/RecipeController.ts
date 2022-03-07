import { Request, Response } from "express";
import { Recipe } from "../entities/Recipe";

class RecipeController {
  async store(req: Request, res: Response) {
    const { name } = req.body;

    const product = new Recipe();

    product.name = name;
    
    await product.save();

    return res.status(201).json(product);
  }

  async index(req: Request, res: Response) {
    const recipes = await Recipe.find();

    return res.json(recipes);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const product = await Recipe.findOne({
      where: { id }      
    });

    return res.json(product);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    const recipe = await Recipe.findOne(id);

    recipe.name = name ?? recipe.name;
    
    await recipe.save();

    return res.json(recipe);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const recipe = await Recipe.findOne(id);

    await recipe.remove();

    return res.status(200);
  }
}

export default new RecipeController();