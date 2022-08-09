import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Legend,
  Tooltip,
  AreaSeries,
  MultiColoredAreaSeries,
} from "@syncfusion/ej2-react-charts";

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const ColorMappingChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      primaryXAxis={{
        ...ColorMappingPrimaryXAxis,
        labelStyle: { color: currentMode === "Dark" ? "white" : "" },
        titleStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...ColorMappingPrimaryYAxis,
        labelStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      background={currentMode === "Dark" ? "#33373D" : "white"}
    >
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={colorMappingData[0]}
          xName="x"
          yName="y"
          type="MultiColoredArea"
          pointColorMapping="color"
        />
      </SeriesCollectionDirective>
      <Inject
        services={[
          Category,
          Legend,
          Tooltip,
          AreaSeries,
          MultiColoredAreaSeries,
        ]}
      />
    </ChartComponent>
  );
};

export default ColorMappingChart;
