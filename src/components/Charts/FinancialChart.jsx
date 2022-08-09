import React from "react";
import {
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
  financialChartData,
} from "../../data/dummy";

import {
  ChartComponent,
  HiloOpenCloseSeries,
  DateTime,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const FinancialChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      primaryXAxis={{
        ...FinancialPrimaryXAxis,
        labelStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...FinancialPrimaryYAxis,
        labelStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      background={currentMode === "Dark" ? "#33373E" : "#FFF"}
    >
      <Inject services={[DateTime, HiloOpenCloseSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={financialChartData}
          xName="x"
          open="open"
          close="close"
          high="high"
          low="low"
          type="HiloOpenClose"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default FinancialChart;
