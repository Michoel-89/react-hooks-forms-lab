import React from "react";


function ItemForm({form, handleFormChange, handleSubmitEvent}) {
  
  return (
    <form className="NewItem" onSubmit={handleSubmitEvent} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} value={form.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange} value={form.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
