import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLineChart = ({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}) => {
  return (
    <SparklineComponent
      height={height}
      width={width}
      id={id}
      dataSource={data}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        trackLineSettings: { visible: true },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLineChart;
