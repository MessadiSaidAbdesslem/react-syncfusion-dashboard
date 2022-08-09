import React from "react";
import { Header, PyramidChart } from "../../components";

const Pyramid = () => {
  return (
    <div className="sm:mt-16">
      <div className="m-10 p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
        <Header category="Chart" title="Pyramid" />
        <PyramidChart />
      </div>
    </div>
  );
};

export default Pyramid;
