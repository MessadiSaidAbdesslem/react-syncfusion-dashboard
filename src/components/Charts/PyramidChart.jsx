import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

useStateContext;

const PyramidChart = () => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      height="420px"
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373D" : ""}
      legendSettings={{
        textStyle: { color: currentMode === "Dark" ? "white" : "" },
        position: "Bottom",
      }}
    >
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={PyramidData}
          xName="x"
          yName="y"
          dataLabel="text"
          type="Pyramid"
        />
      </AccumulationSeriesCollectionDirective>
      <Inject
        services={[
          PyramidSeries,
          AccumulationLegend,
          AccumulationTooltip,
          AccumulationDataLabel,
        ]}
      />
    </AccumulationChartComponent>
  );
};

export default PyramidChart;
