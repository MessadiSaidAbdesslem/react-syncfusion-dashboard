import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      legendSettings={{
        textStyle: { color: currentMode === "Dark" ? "white" : "gray" },
      }}
      primaryXAxis={{
        ...LinePrimaryXAxis,
        labelStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...LinePrimaryYAxis,
        labelStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#FFF"}
    >
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
    </ChartComponent>
  );
};

export default LineChart;
