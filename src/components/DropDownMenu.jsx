import React, { useState } from "react";
import { useList } from "react-firebase-hooks/database";
import { db } from "../firebase";

function DropdownMenu() {
  const [value, setValue] = useState("");
  const [snapshots, loading, error] = useList(db.ref("elements"));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const options = snapshots.map((snapshot) => ({
    value: snapshot.key,
    label: snapshot.val().name,
  }));

  return (
    <div>
      <label>
        Select an element:
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default DropdownMenu;