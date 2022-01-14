import React from "react";

function Tags(props) {
  return (
    <div className="tags">
      {props.tags.map((tag) => {
        return <li className="tag">#{tag}</li>;
      })}
    </div>
  );
}

export default Tags;
