import React, { useEffect } from "react";

const ViewCart = (props) => {
  const content = props.content;

  let allCartItems = [];

  let data = JSON.parse(localStorage.getItem("ViewCart_data"));

  const saveData = (data) => {
    localStorage.setItem("ViewCart_data", data);
  };

  useEffect(() => {
    if (data === null) {
      saveData(JSON.stringify(content));
      console.log("if was executed");
    } else {
      allCartItems.push(data, content);
      saveData(JSON.stringify(allCartItems));
      console.log("else was executed");
    }
  }, [content]);

  return <div>{localStorage.getItem("ViewCart_data")}</div>;
};

export default ViewCart;
