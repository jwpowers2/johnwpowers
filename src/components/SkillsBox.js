import * as d3 from 'd3';
import {Box,Container} from "@mui/material";
import {useEffect, useState, useRef} from 'react';

export default function SkillsBox(props) {
    const svgRef = useRef(null);
    const data = { 
        nodes:[
            {
                "id": 0,
                "type": "skill",
                "name": "React.js",
                "language": "Javascript"
            },
            {
                "id": 1,
                "type": "job",
                "name": "Flexgen Power Systems"
            },
            {
                "id": 2,
                "type": "skill",
                "name": "Docker"
            },
            {
                "id": 3,
                "type": "skill",
                "name": "bugfixes"
            },
            {
                "id": 4,
                "type": "skill",
                "name": "Agile"
            },
            {
                "id": 5,
                "type": "skill",
                "name": "Node.js"
            },
            {
                "id": 6,
                "type": "skill",
                "name": "Typescript"
            },
            {
                "id": 7,
                "type": "skill",
                "name": "Authentication"
            },
            {
                "id": 8,
                "type": "job",
                "name": "The Select Group at Cisco Systems"
            },
            {
                "id": 9,
                "type": "job",
                "name": "AggData"
            },
            {
                "id": 10,
                "type": "job",
                "name": "Forsta.io"
            },
            {
                "id": 11,
                "type": "skill",
                "name": "Python"
            },
            {
                "id": 12,
                "type": "skill",
                "name": "Regular Expressions"
            },
            {
                "id": 13,
                "type": "skill",
                "name": "Vue.js"
            },
            {
                "id": 14,
                "type": "skill",
                "name": "Data Visualization"
            },
            {
                "id": 15,
                "type": "skill",
                "name": "Material UI"
            },
        ],
        links: [
            {source: 0, target: 1},
            {source: 1, target: 7},
            {source: 2, target: 1},
            {source: 8, target: 3},
            {source: 1, target: 3},
            {source: 1, target: 4},
            {source: 4, target: 8},
            {source: 4, target: 10},
            {source: 10, target: 11},
            {source: 9, target: 12},
            {source: 10, target: 12},
            {source: 6, target: 1},
            {source: 13, target: 8},
            {source: 1, target: 5},
            {source: 14, target: 8},
            {source: 15, target: 1},
        ]
    }
    function linkArc(d) {
        const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
        return `
          M${d.source.x},${d.source.y}
          A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
        `;
    }
    const makeDataViz = () => {
        const links = data.links.map(d => Object.create(d));
        const nodes = data.nodes.map(d => Object.create(d));
        const types = Array.from(new Set(links.map(d => d.type)))
        const width = 400
        const color = d3.scaleOrdinal(types, d3.schemeCategory10)
        const height = 200
        const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody().strength(-400))
        .force("x", d3.forceX())
        .force("y", d3.forceY());
  
        const svg = d3.select(svgRef.current)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .style("font", "12px sans-serif");
        svg.append("defs").selectAll("marker")
        .data(types)
        .join("marker")
          .attr("id", d => `arrow-${d}`)
          .attr("viewBox", "0 -5 10 10")
          .attr("refX", 15)
          .attr("refY", -0.5)
          .attr("markerWidth", 6)
          .attr("markerHeight", 6)
          .attr("orient", "auto")
        .append("path")
          .attr("fill", color)
          .attr("d", "M0,-5L10,0L0,5");
          const link = svg.append("g")
          .attr("fill", "none")
          .attr("stroke-width", 1.5)
        .selectAll("path")
        .data(links)
        .join("path")
          .attr("stroke", d => color(d.type))
          //.attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, location)})`);
          const node = svg.append("g")
          .attr("fill", "currentColor")
          .attr("stroke-linecap", "round")
          .attr("stroke-linejoin", "round")
      .selectAll("g")
      .data(nodes)
      .join("g");
      
      node.append("circle")
          .attr("stroke", "white")
          .attr("stroke-width", 1.5)
          .attr("r", 4);
          node.append("text")
          .attr("x", 8)
          .attr("y", "0.31em")
          .text(d => d.name)
        .clone(true).lower()
          .attr("fill", "none")
          .attr("stroke", "white")
          .attr("stroke-width", 3);
    
      simulation.on("tick", () => {
        link.attr("d", linkArc);
        node.attr("transform", d => `translate(${d.x},${d.y})`);
      });
    
    }
    useEffect(()=>{
        makeDataViz();
    },[])

    return (
        <Container>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <svg ref={svgRef} width="50em" height="50em"></svg>
        </Box>
        </Container>
    )
}