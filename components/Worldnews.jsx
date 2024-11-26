// world news webpage

import React, { useState, useEffect } from "react";
import { getItems, createItem, updateItem, deleteItem } from '../src/services/api'
import axios from "axios";
import CreateItemForm from "./CreateItemFor.jsx";
import EditItemForm from "./EditItemForm";
import ItemList from "./itemlist.jsx";
import NewsComponent from "./new.jsx";

function Worldnews(){
  const [editItemId, setEditItemId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (item) => {
    setEditItemId(item.id);
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/items/${itemId}`);
      setRefresh(!refresh); // Refresh the list after deletion
    } catch (error) {
      console.error('');
    }
  };

  const handleItemUpdated = () => {
    setRefresh(!refresh); // Refresh the list after update
  };

  const closeEditForm = () => {
    setEditItemId(null);
  };

  return (
  
    <div className="App">
    <NewsComponent />
      <h1></h1>
      <CreateItemForm refreshItems={() => setRefresh(!refresh)} />
      {editItemId ? (
        <EditItemForm itemId={editItemId} onItemUpdated={handleItemUpdated} closeForm={closeEditForm} />
      ) : (
        <ItemList onEdit={handleEdit} onDelete={handleDelete} />
        
      )}
    </div>
  );
}



  export default Worldnews;