import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  const [form, setForm] = useState({
    name: '',
    category: 'Produce'
  })
  const [CurrentItems, setItems] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(e) {
      setSearch(e.target.value)
  }
  function handleFormChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  let itemsToDisplay = CurrentItems
  .filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  )
  // search term
  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  function handleSubmitEvent(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: form.name,
      category: form.category,
    };
    setItems([...CurrentItems, newItem])
}
  return (
    <div className="ShoppingList">
      <ItemForm form={form} handleFormChange={handleFormChange} handleSubmitEvent={handleSubmitEvent} />
      <Filter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} onSearchChange={onSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;
