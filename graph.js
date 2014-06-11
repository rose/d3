
var labels = "hello world this is a test of much more text than was used before".split(" ");

var nodes = {};

for (var i = 0; i < labels.length; i++) {
  var parent_num = Math.floor(Math.random() * i);
  if (parent_num == 0) {
    var parent = undefined;
  } else {
    var parent = nodes[labels[parent_num]];
  }
  nodes[labels[i]] = {
    name: labels[i],
    parent: parent,
    colour: "#"
      + Math.floor(Math.random() * 4 + 4).toString(16)
      + Math.floor(Math.random() * 6 + 10).toString(16)
      + Math.floor(Math.random() * 4 + 4).toString(16)
  }
}

var links = [];

for (var i = 0; i < labels.length; i++) {
  var child = nodes[labels[i]];
  if (child.parent) {
    links.push({
      source: child.parent.name,
      target: child.name,
      type: "suit",
      colour: child.colour
    });
  }
}

// Compute the distinct nodes from the links.
links.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
});

var width = 960,
    height = 500;

var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(60)
    .charge(-300)
    .on("tick", tick)
    .start();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link")
    .data(force.links())
  .enter().append("line")
    .attr("class", "link");

var node = svg.selectAll(".node")
    .data(force.nodes())
  .enter().append("g")
    .attr("class", "node")
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
    .call(force.drag);

node.append("circle")
    .attr("r", 8)
    .style("fill", function(d) {
      return d.colour;
    });

node.append("text")
    .attr("x", 12)
    .attr("dy", ".35em")
    .text(function(d) { return d.name; });

function tick() {
  link
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function mouseover() {
  d3.select(this).select("circle").transition()
      .duration(750)
      .attr("r", 16);
}

function mouseout() {
  d3.select(this).select("circle").transition()
      .duration(750)
      .attr("r", 8);
}

