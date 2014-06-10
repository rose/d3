// window.innerHeight / Width

var viewport = 
  d3.select("#d3")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400)
  .style("background-color", "yellow")

var circles = 
  viewport
  .selectAll(".text_circle")
  .data(["hello", "world", "this", "is", "a", "text"])
  .enter()
  .append("circle")

var style = 
  circles
  .attr("cy", function(d,i) {
    return i * 50 + 30;
  })
  .attr("cx", 25)
  .attr("r", function(d,i) {
    return d.length * 5;
  })
  .style("fill", "green")
