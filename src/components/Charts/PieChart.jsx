import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
  Legend,
  Tooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

import { pieChartData } from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const PieChart = () => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id="pie-chart"
      height="420px"
      legendSettings={{
        visible: true,
        title: "Pie Chart",
        textStyle: { color: currentMode === "Dark" ? "white" : "gray" },
      }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#FFF"}
    >
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          xName="x"
          yName="y"
          type="Pie"
          dataLabel={{
            visible: true,
            name: "x",
            position: "Outside",
          }}
        />
      </AccumulationSeriesCollectionDirective>
      <Inject services={[PieSeries, Legend, Tooltip, AccumulationDataLabel]} />
    </AccumulationChartComponent>
  );
};

export default PieChart;
