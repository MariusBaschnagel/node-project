import {Router} from 'express';

const router = Router({mergeParams: true});

/* /Recipe */
router.get('/', (req, res) => {
    res.send('Hello get Recipe');
});

router.post('/', (req, res) => {
    res.send('Hello post Recipe');
});

/* /Recipe/:name */

router.get('/:name', (req, res) => {
    res.send(`Hello get ${req.params.name}`);
});

router.put('/:name', (req, res) => {
    res.send(`Hello put ${req.params.name}`);
});

router.delete('/:name', (req, res) => {
    res.send(`Hello delete ${req.params.name}`);
});

/* /Recipe/Ingredients/:name */

router.get('/Ingredients/:name', (req, res) => {
    res.send(`Hello get Ingredients/${req.params.name}`);
});

export const RecipeController = router;