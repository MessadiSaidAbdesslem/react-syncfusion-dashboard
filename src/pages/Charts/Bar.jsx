import React from "react";
import { Header, BarChart } from "../../components";

const Bar = () => {
  return (
    <div className="sm:mt-16">
      <div className="p-10 m-5 dark:bg-secondary-dark-bg bg-white rounded-3xl">
        <Header category="Chart" title="Bar" />
        <BarChart />
      </div>
    </div>
  );
};

export default Bar;
