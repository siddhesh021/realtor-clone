import React from 'react'
import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

export default function Search() {
  const [menuOptions, setMenuOptions] = useState([]);

  useEffect(() => {
    firebase.collection("menuOptions")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenuOptions(data);
      });
  }, []);

  return (
    <div>
      <select>
    {menuOptions.map((option) => (
      <option key={option.id} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
    </div>
  )
}
