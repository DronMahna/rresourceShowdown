import React, { memo } from "react";

//Charts
import ReactEcharts from "echarts-for-react";
import { graphData } from "./constants";
//Styles
import "./styles.css";

function SphereNodeGraph() {
  const option = {
    legend: {
      data: ["HTMLElement", "WebGL", "SVG", "CSS", "Other"],
    },
    series: [
      {
        type: "graph",
        layout: "force",
        animation: false,
        label: {
          position: "right",
          formatter: "{b}",
        },
        draggable: true,
        data: graphData.nodes.map(function (node, idx) {
          node.id = idx;
          return node;
        }),
        categories: graphData.categories,
        force: {
          edgeLength: 5,
          repulsion: 20,
          gravity: 0.2,
        },
        edges: graphData.links,
      },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      theme={"theme_name"}
      className="echarts-for-react"
    />
  );
}

SphereNodeGraph.propTypes = {};

export default memo(SphereNodeGraph);
