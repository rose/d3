// window.innerHeight / Width
var words = ["hello", "world", "this", "is", "a", "text"]
var viewport = 
  d3.select("#d3")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400)
  .style("background-color", "yellow");

var circles = 
  viewport
  .selectAll(".text_circle")
  .data(words)
  .enter()
  .append("circle");

var style = 
  circles
  .attr("cy", function(d,i) {
    return i * 50 + 30;
  })
  .attr("cx", 25)
  .attr("r", function(d,i) {
    return d.length * 5;
  })
  .style("fill", "green");
  
var text = viewport.selectAll(".text")
  .data(words)
  .enter()
  .append("text")
  .attr("y", function(d,i) {
    return i * 50 + 30;
  })
  .attr("x", 25)
  .text(function(d) { return d; })
  .attr("fg", "red")

//var effects = 
  //circles
  //.on("mouseover", function(d, i) {
    //d3.select(this)
    //.insert("text")
    //.text(d);
  //});
