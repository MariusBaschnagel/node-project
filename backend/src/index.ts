import express from 'express';
import cors from 'cors';
import { IngredientController } from './controller/Ingredient.controller';
import { RecipeController } from './controller/Recipe.controller';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/Recipes', RecipeController);
app.use('/Ingredients', IngredientController);

app.get('*', (req, res) => {
    res.send('Bad request');
});

app.listen(4000, () => {
    console.log(`Server started on port ${4000}`);
});