import React from "react";
import { Header, PieChart } from "../../components";

const Pie = () => {
  return (
    <div className="sm:mt-16">
      <div className="p-10 m-10 dark:bg-secondary-dark-bg bg-white rounded-3xl drop-shadow-lg">
        <Header category="Charts" title="Pie" />
        <PieChart />
      </div>
    </div>
  );
};

export default Pie;
