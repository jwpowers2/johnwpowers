import * as d3 from 'd3';
import {Box,Container} from "@mui/material";
import {useEffect, useState, useRef} from 'react';

export default function SkillsBox(props) {
    let [height, setHeight] = useState("30em");
    let [width, setWidth] = useState("50em");
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
                "name": "Flexgen"
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
                "name": "Auth"
            },
            {
                "id": 8,
                "type": "job",
                "name": "Select Group"
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
                "name": "regex"
            },
            {
                "id": 13,
                "type": "skill",
                "name": "Vue.js"
            },
            {
                "id": 14,
                "type": "skill",
                "name": "Data Viz"
            },
            {
                "id": 15,
                "type": "skill",
                "name": "MUI"
            },
            {
                "id": 16,
                "type": "skill",
                "name": "Javascript"
            },
            {
                "id": 17,
                "type": "skill",
                "name": "R & D"
            },
            {
                "id": 18,
                "type": "skill",
                "name": "PWA"
            },
            {
                "id": 19,
                "type": "skill",
                "name": "MongoDB"
            },
            {
                "id": 20,
                "type": "skill",
                "name": "Postgres"
            },
        ],
        links: [
            {source: 0, target: 1},
            {source: 1, target: 7},
            {source: 16, target: 1},
            {source: 16, target: 8},
            {source: 2, target: 1},
            {source: 2, target: 8},
            {source: 3, target: 8},
            {source: 3, target: 1},
            {source: 4, target: 8},
            {source: 4, target: 10},
            {source: 4, target: 1},
            {source: 10, target: 11},
            {source: 9, target: 12},
            {source: 10, target: 12},
            {source: 6, target: 1},
            {source: 13, target: 8},
            {source: 1, target: 5},
            {source: 14, target: 8},
            {source: 15, target: 1},
            {source: 17, target: 9},
            {source: 17, target: 1},
            {source: 20, target: 1},
            {source: 20, target: 10},
        ]
    }
    function handleMobile() {
        if (props.mobile === true){
            setHeight("20em");
            setWidth("30em");
        }
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
        const width = 500
        const color = d3.scaleOrdinal(types, d3.schemeCategory10)
        const height = 250
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
          //.attr("stroke", d => color(d.type))
          .attr("stroke", d => "#e65c00")
          //.attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, location)})`);
          const node = svg.append("g")
          .attr("fill", "currentColor")
          .attr("stroke-linecap", "square")
          .attr("stroke-linejoin", "square")
      .selectAll("g")
      .data(nodes)
      .join("g");
      
      node.append("circle")
          .attr("stroke", "white")
          .attr("stroke-width", 1.5)
          .attr("r", (d)=> (d.type === "job")? 5 : 2);
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
        handleMobile();
        makeDataViz();
    },[])

    return (
    
        <Box
            style={{"width":"100%"}}
        >
            <svg ref={svgRef} width={width} height={height}></svg>
        </Box>
        
    )
}