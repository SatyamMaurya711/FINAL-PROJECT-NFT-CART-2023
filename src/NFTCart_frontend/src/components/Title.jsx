import React from "react";

//INTERNAL IMPORT

const Title = ({ heading, paragraph }) => {
  return (
    <div className="title">
      <div className="title_box">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Title;
