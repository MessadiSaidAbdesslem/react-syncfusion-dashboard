import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  AreaSeries,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const AreaChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="area-chart"
      height="420px"
      legendSettings={{
        textStyle: { color: currentMode === "Dark" ? "white" : "gray" },
      }}
      primaryXAxis={{
        ...areaPrimaryXAxis,
        labelStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...areaPrimaryYAxis,
        labelStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#FFF"}
    >
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...{ ...item, type: "Area" }} />
        ))}
      </SeriesCollectionDirective>
      <Inject services={[AreaSeries, DateTime, Legend, Tooltip]} />
    </ChartComponent>
  );
};

export default AreaChart;
