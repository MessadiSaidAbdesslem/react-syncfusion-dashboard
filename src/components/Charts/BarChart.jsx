import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DataLabel,
  Legend,
  Tooltip,
  BarSeries,
  Category,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const BarChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="bar-chart"
      height="420px"
      legendSettings={{
        textStyle: { color: currentMode === "Dark" ? "white" : "gray" },
      }}
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#FFF"}
    >
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...{ ...item, type: "Bar" }} />
        ))}
      </SeriesCollectionDirective>
      <Inject services={[BarSeries, Legend, Tooltip, Category, DataLabel]} />
    </ChartComponent>
  );
};

export default BarChart;
