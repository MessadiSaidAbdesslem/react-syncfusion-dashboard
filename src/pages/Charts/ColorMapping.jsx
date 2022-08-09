import React from "react";

import { Header, ColorMappingChart } from "../../components";

const ColorMapping = () => {
  return (
    <div className="sm:mt-16">
      <div className="p-10 m-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
        <Header category="Chart" title="Color Mapping" />
        <ColorMappingChart />
      </div>
    </div>
  );
};

export default ColorMapping;
