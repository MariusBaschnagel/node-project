import React, { Fragment, useState } from "react";

const EditRecipe = ({ recipe }) => {
  const [name, setName] = useState(recipe.name);

  const updateRecipe = async (e) => {
    e.preventDefault();
    try {
      const body = { name };
      const response = await fetch(`http://localhost:4000/Recipes/${recipe.name}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      window.location('/');
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#name${recipe.name}`}>
        Edit
      </button>

      <div class="modal" id={`name${recipe.name}`} onClick={() => setName(recipe.name)}>
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h4 class="modal-title">Edit Recipe</h4>
              <button type="button" class="close" data-dismiss="modal" onClick={() => setName(recipe.name)}>&times;</button>
            </div>

            <div class="modal-body">
              <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateRecipe(e)}>Save</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setName(recipe.name)}>Close</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditRecipe;