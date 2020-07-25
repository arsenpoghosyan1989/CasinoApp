import React from "react";
import "./providerListItem.scss";

const ProviderListItem = ({ provider }) => {
  const { name, title, status, category, image } = provider;
  return (
    <>
      <span
        className={status === "enabled" ? "statusBadge on" : "statusBadge off"}
      ></span>
      <h4> {name} </h4>
      <img src={image} />
      <h5>{title}</h5>
      <h6>{category}</h6>
    </>
  );
};

export default ProviderListItem;
