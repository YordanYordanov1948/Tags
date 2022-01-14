import React from "react";

function Tags() {
  const arr = ["boomdotdev", "task", "tags", "react"];
  return (
    <div className="tags">
      <li className="tag">#{arr[0]}</li>
      <li className="tag">#{arr[1]}</li>
      <li className="tag">#{arr[2]}</li>
      <li className="tag">#{arr[3]}</li>
    </div>
  );
}

export default Tags;
