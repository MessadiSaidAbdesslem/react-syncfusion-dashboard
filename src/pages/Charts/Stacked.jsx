import React from "react";
import { Header, StackedChart } from "../../components";

const Stacked = () => {
  return (
    <div className="sm:mt-16">
      <div className="p-10 m-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
        <Header category="category" title="Stacked" />
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
