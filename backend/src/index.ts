import express from 'express';
import { IngredientController } from './controller/Ingredient.controller';
import { RecipeController } from './controller/Recipe.controller';

const app = express();

app.use(express.json());

app.use('/Recipe', RecipeController);
app.use('/Ingredient', IngredientController);

app.get('*', (req, res) => {
    res.send('Bad request');
});

app.listen(3000, () => {
    console.log(`Server started on port ${3000}`);
});