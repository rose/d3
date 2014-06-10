// construct data

var labels = ["hello", "world", "this", "is", "a", "text"];
var node_data = [];

for (var i = 0; i < labels.length; i++) {
  node_data.push({ 
    label: labels[i],
    size: labels[i].length * 5,
    colour: "#" 
      + Math.floor(Math.random() * 4 + 4).toString(16)
      + Math.floor(Math.random() * 6 + 10).toString(16)
      + Math.floor(Math.random() * 4 + 4).toString(16),
    display: false
  });
}


// make viewports

var tree_port = 
  d3.select("#tree")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400)
  .style("background-color", "#cceeff")
  .style("display", "inline-block");

var poem_port = 
  d3.select("#poem")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200)
  .style("background-color", "#ffff88")
  .style("display", "inline-block");
  

// create display elements

var circles = 
  tree_port
  .selectAll(".text_circle")
  .data(node_data)
  .enter()
  .append("circle");

var text = 
  tree_port
  .selectAll(".text_content")
  .data(node_data)
  .enter()
  .append("text")
  .text(function(d,i) { return d.label; } )
  .attr("y", function(d,i) {
    return i * 50 + 30;
  })
  .attr("x", 25)

var style_circles = 
  circles
  .attr("cy", function(d,i) {
    return i * 50 + 30;
  })
  .attr("cx", 25)
  .attr("r", function(d,i) {
    return d.size;
  })
  .style("fill", function(d) {
    return d.colour;
  });
  
  
/*
var effects = 
  circles
  .on("mouseover", function(d, i) {
    d3.select("svg")
    .append("text")
    .attr("y", function(data, index) {
      return i * 50 + 30;
    })
    .attr("x", 25)
    .text(function(data) { return d; })
  });
 */
