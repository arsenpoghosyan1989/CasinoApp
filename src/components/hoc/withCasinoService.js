import React from "react";
import { CasinoServiceConsumer } from "../casino-Service-Context";

const WithCasinoService = () => (Wrapped) => {
  return (props) => {
    return (
      <CasinoServiceConsumer>
        {(CasinoService) => {
          return <Wrapped {...props} CasinoService={CasinoService} />;
        }}
      </CasinoServiceConsumer>
    );
  };
};

export default WithCasinoService;
