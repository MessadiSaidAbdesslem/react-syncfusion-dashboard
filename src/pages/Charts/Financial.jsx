import React from "react";
import { Header, FinancialChart } from "../../components";

const Financial = () => {
  return (
    <div className="sm:mt-16">
      <div className="bg-white dark:bg-secondary-dark-bg p-10 m-10 rounded-3xl">
        <Header category="Charts" title="Financial" />
        <FinancialChart />
      </div>
    </div>
  );
};

export default Financial;
