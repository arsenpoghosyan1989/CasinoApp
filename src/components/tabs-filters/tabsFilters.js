import React from "react";
import FilterComponent from "./filterComponent";
import TabsComponent from "./tabsComponent";
import "./tabsFilters.css";

const TabsFilters = function ({ state, handleTabClick, handleFilterChange }) {
  const {
    providers,
    tabFilter: { tab, filter },
  } = state;
  return (
    <div>
      <TabsComponent tab={tab} handleTabClick={handleTabClick} />
      <FilterComponent
        providers={providers}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default TabsFilters;