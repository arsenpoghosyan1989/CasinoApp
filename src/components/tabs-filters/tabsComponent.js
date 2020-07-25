import React from "react";

const TabsComponent = function ({ tab, handleTabClick }) {
  const clasN = "btn btn-secondary";
  const onValueChange = (e) => {
    handleTabClick(e.target.value);
  };

  return (
    <div className="row tabsBlock">
      <div className="form-group mx-auto">
        <div className="radio">
          <label className={`btn  ${tab === "games" ? "btn-secondary" : ""}`}>
            <input
              type="radio"
              value="games"
              checked={tab === "games"}
              onChange={onValueChange}
              style={{ display: "none" }}
            />
            Games
          </label>
        </div>
        <div className="radio">
          <label
            className={`btn  ${tab === "categories" ? "btn-secondary" : ""}`}
          >
            <input
              type="radio"
              value="categories"
              checked={tab === "categories"}
              onChange={onValueChange}
              style={{ display: "none" }}
            />
            Categories
          </label>
        </div>
        <div className="radio">
          <label className={`btn  ${tab === "types" ? "btn-secondary" : ""}`}>
            <input
              type="radio"
              value="types"
              checked={tab === "types"}
              onChange={onValueChange}
              style={{ display: "none" }}
            />
            Types
          </label>
        </div>
        <div className="radio">
          <label
            className={`btn  ${tab === "providers" ? "btn-secondary" : ""}`}
          >
            <input
              type="radio"
              value="providers"
              checked={tab === "providers"}
              onChange={onValueChange}
              style={{ display: "none" }}
            />
            Providers
          </label>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
