import React, { Fragment, useEffect, useState } from "react";

import EditRecipe from "./EditRecipe";

const ListRecipes = () => {

    const [recipes, setRecipes] = useState([]);


    const deleteRecipe = async (name) => {
        try {
            const response = await fetch(`http://localhost:4000/Recipes/${name}`, {
                method: "DELETE"
            });

            setRecipes(recipes.filter(recipe => recipe.name !== name));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getRecipes = async () => {
        try {
            const response = await fetch("http://localhost:4000/Recipes")
            const jsonData = await response.json();

            setRecipes(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <Fragment>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map(recipe => (
                        <tr key={recipe.name}>
                            <td>{recipe.name}</td>
                            <td><EditRecipe recipe={recipe} /></td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteRecipe(recipe.name)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default ListRecipes;