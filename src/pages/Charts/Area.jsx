import React from "react";

import { Header, AreaChart } from "../../components";

import { SparklineAreaData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="sm:mt-20">
      <div className="p-10 m-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Charts" title="Area" />
        <AreaChart />
      </div>
    </div>
  );
};

export default Area;
