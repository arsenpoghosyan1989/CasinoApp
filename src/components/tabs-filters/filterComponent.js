import React from "react";
import { sortByName } from "../../utils";
import shortid from "shortid";

const FilterComponent = function ({ providers, filter, handleFilterChange }) {
  const RenderOptions = (field = "") => {
    const sortedProviders = sortByName(providers, field);
    const nameArray = [];
    return sortedProviders.map((provider) => {
      if (!nameArray.includes(provider[field])) {
        nameArray.push(provider[field]);
        return (
          <option
            value={provider[field]}
            key={provider[field] + shortid.generate()}
          >
            {provider[field]}
          </option>
        );
      }
    });
  };
  const { category, provider, status, count } = filter;
  return (
    <div className="row filterComponent">
      <div className="form-group">
        <div style={{ position: "relative", display: "inline" }}>
          <input
            type="text"
            onChange={(e) => {
              handleFilterChange({ Search: e.target.value });
            }}
            placeholder="Search"
            className="form-control"
          />
          <i
            className="fa fa-search"
            style={{
              position: "absolute",
              right: "5px",
              top: 0,
              color: "lightgray",
            }}
          ></i>
        </div>
        <select
          className="form-control"
          onChange={(e) => {
            handleFilterChange({ Category: e.target.value });
          }}
          value={category}
        >
          <option value="all">All Categoryes</option>
          {RenderOptions("category")}
        </select>
        <select
          className="form-control"
          onChange={(e) => {
            handleFilterChange({ Provider: e.target.value });
          }}
          value={provider}
        >
          <option value="all">All Providers</option>
          {RenderOptions("name")}
        </select>
        <select
          className="form-control"
          onChange={(e) => {
            handleFilterChange({ Status: e.target.value });
          }}
          value={status}
        >
          <option value="all">All Statuses</option>
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>
        <select
          className="form-control"
          onChange={(e) => {
            handleFilterChange({ Count: e.target.value });
          }}
          value={count}
        >
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
