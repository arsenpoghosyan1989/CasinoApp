import React, { useState, useEffect } from "react";
import ProviderListItem from "../list-item";
import Spinner, { Loading } from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./providerList.scss";

const ProviderListContainer = ({ state, fetchAgain }) => {
  const [loading, setLoading] = useState(false);
  const { providers, tabFilter } = state;
  const {
    search: fTitle,
    category: fCategory,
    provider: fName,
    status: fStatus,
  } = tabFilter.filter;
  const handleScroll = (event) => {
    const { clientHeight, scrollHeight, scrollTop } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      fetchAgain();
      setLoading(true);
    }
  };
  useEffect(() => {
    setLoading(false);
  }, [providers.length]);
  const filteredProviders = providers.filter(
    ({ title, category, name, status }) => {
      if (
        (fTitle === "" || title.includes(fTitle)) &&
        (fCategory === "all" || fCategory === category) &&
        (fName === "all" || fName === name) &&
        (fStatus === "all" || fStatus === status)
      ) {
        return true;
      }
      return false;
    }
  );
  // if (error) {
  //   return <ErrorIndicator />;
  // }
  if (providers.length === 0) {
    return <Spinner />;
  }
  return (
    <ProviderList
      providers={filteredProviders}
      handleScroll={handleScroll}
      style={{ height: "64vh", overflowY: "auto" }}
      loading={loading}
    />
  );
};

const ProviderList = ({ providers, handleScroll, loading }) => {
  return (
    <ul className="mx-auto providersList" onScroll={handleScroll}>
      {providers.map((provider) => (
        <li key={provider.id}>
          <ProviderListItem provider={provider} />
        </li>
      ))}
      {loading && providers.length > 0 && <Loading />}
    </ul>
  );
};

export default ProviderListContainer;
