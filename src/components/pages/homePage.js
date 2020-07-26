import React, { Component } from "react";
import ProviderListContainer from "../list";
import WithCasinoService from "../hoc";
import TabsFilters from "../tabs-filters";

import "./homePage.css";

class HomePage extends Component {
  state = {
    providers: [],
    tabFilter: {
      tab: "games",
      filter: {
        search: "",
        category: "all",
        provider: "all",
        status: "all",
        count: 20,
      },
    },
    start: 1,
  };
  componentDidMount() {
    this.fetchAgain();
  }

  fetchAgain = () => {
    let { start } = this.state;
    let { tab } = this.state.tabFilter;
    let { count } = this.state.tabFilter.filter;
    this.props.CasinoService.getProviders(start, count, tab).then((res) => {
      let newProviders = [...this.state.providers, ...res];
      let next = start + count;
      this.setState({ providers: newProviders, start: next });
    });
  };

  handleTabClick = (value) => {
    let newTabFilter = this.state.tabFilter;
    newTabFilter.tab = value;
    this.setState({ tabFilter: newTabFilter, providers: [] });
    this.fetchAgain();
  };

  handleFilterChange = (e) => {
    const setStateFilterValue = (label, value) => {
      let newTabFilter = this.state.tabFilter;
      newTabFilter.filter[label] = value;
      this.setState({ tabFilter: newTabFilter });
    };
    switch (Object.keys(e)[0]) {
      case "Search":
        setStateFilterValue("search", e["Search"]);
        break;
      case "Category":
        setStateFilterValue("category", e["Category"]);
        break;
      case "Provider":
        setStateFilterValue("provider", e["Provider"]);
        break;
      case "Status":
        setStateFilterValue("status", e["Status"]);
        break;
      case "Count":
        setStateFilterValue("count", +e["Count"]);
        break;
      default:
        console.log("n");
    }
  };
  
  render() {
    return (
      <>
        <TabsFilters
          state={this.state}
          handleTabClick={this.handleTabClick}
          handleFilterChange={this.handleFilterChange}
        />
        <ProviderListContainer
          state={this.state}
          fetchAgain={this.fetchAgain}
        />
      </>
    );
  }
}
export default WithCasinoService()(HomePage);
