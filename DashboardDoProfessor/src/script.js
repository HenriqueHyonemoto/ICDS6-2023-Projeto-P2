var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 4,
    
    gLCORE = svg.append("g").attr("transform", "translate(" + 140 + "," + 120 + ")");
    gLSURF = svg.append("g").attr("transform", "translate(" + 140  + "," + 360 + ")");
    gLBP = svg.append("g").attr("transform", "translate(" + 290  + "," + 590 + ")");
    gLO2 = svg.append("g").attr("transform", "translate(" + 640 + "," + 640+ ")");
    gBPSTBL = svg.append("g").attr("transform", "translate(" + 990 + "," + 590 + ")");
    gSURFSTBL = svg.append("g").attr("transform", "translate(" + 1140  + "," + 360 + ")");
    gCORESTBL = svg.append("g").attr("transform", "translate(" + 1140  + "," + 120 + ")");
    
var colorHMLLCORE = d3.scaleOrdinal(["red", "green","orange"]);
var colorHMLLSURF = d3.scaleOrdinal(["red", "green","orange"]);
var colorEGFPLO2 = d3.scaleOrdinal(["#258bf8", "green", "orange","red"]);
var colorHMLLBP = d3.scaleOrdinal(["red", "green","orange"]);
var colorSMUSURFSTBL = d3.scaleOrdinal(["green", "orange","red"]);
var colorSMUCORESTBL = d3.scaleOrdinal(["green", "orange","red"]);
var colorSMUBPSTBL = d3.scaleOrdinal(["green", "orange","red"]);
var colorISADECISION = d3.scaleOrdinal(["red", "green","orange"]);

var pieLCORE = d3.pie()
  .sort(null)
  .value(function(d) { return d.LCORE; });
var path = d3.arc()
  .outerRadius(radius - 108)
  .innerRadius(40);
var label = d3.arc()
  .outerRadius(radius - 108)
  .innerRadius(radius - 47);
d3.csv("../data/DatasetAgrupado220621.csv", function(d) { d.LCORE = +d.LCORE;
    return d;
}, function(error, data) {    
  if (error) throw error;
   var arc = gLCORE.selectAll(".arc")
    .data(pieLCORE(data))
    .enter().append("g")
    .attr("class", "arc");

//high mid low label
    svg.append("text")             
    .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("LOW")
  .style("stroke", "orange")
    .attr("transform", "translate(" + 300 + "," + 700 + ")");

  svg.append("text")             
    .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("MID")
  .style("stroke", "green")
    .attr("transform", "translate(" + 260 + "," + 700 + ")");

  svg.append("text")             
    .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("HIGH")
  .style("stroke", "red")
    .attr("transform", "translate(" + 340 + "," + 700 + ")");

//stable mod-stable unstable label
svg.append("text")             
.attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
.style("text-anchor", "middle")
.text("STABLE")
.style("stroke", "green")
.attr("transform", "translate(" + 884 + "," + 700 + ")");

svg.append("text")             
.attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
.style("text-anchor", "middle")
.text("MOD-STABLE")
.style("stroke", "orange")
.attr("transform", "translate(" + 948+ "," + 700 + ")");

svg.append("text")             
.attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
.style("text-anchor", "middle")
.text("UNSTABLE")
.style("stroke", "red")
.attr("transform", "translate(" + 1020 + "," + 700 + ")");


//excellent good fail poor label
svg.append("text")             
.attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
.style("text-anchor", "middle")
.text("EXCELLENT")
.style("stroke", "#258bf8")
.attr("transform", "translate(" + 490 + "," + 700 + ")");

svg.append("text")             
.attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
.style("text-anchor", "middle")
.text("GOOD")
.style("stroke", "green")
.attr("transform", "translate(" + 550+ "," + 700 + ")");

svg.append("text")             
.attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
.style("text-anchor", "middle")
.text("FAIL")
.style("stroke", "orange")
.attr("transform", "translate(" +730 + "," + 700 + ")");

svg.append("text")             
.attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
.style("text-anchor", "middle")
.text("POOR")
.style("stroke", "red")
.attr("transform", "translate(" + 780 + "," + 700 + ")");


  //L-CORE PieChart     
  arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return colorHMLLCORE(d.data.LCORE); });
  /*arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "0em")
      .text(function(d) { 
        if(d.data.LCORE >0) // REMOVENDO STATUS COM ZERO ELEMENTOS         
        return d.data.STATUSCS; });      
    */
        arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "1.05em")
      .text(function(d) { 
if(d.data.LCORE >0) // REMOVENDO STATUS COM ZERO ELEMENTOS       
        return d3.format(".2f")(d.data.LCORE/0.9) +"%" ; });       
       arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
        .attr("dy", "2.05em")
        .text(function(d) { 
  if(d.data.LCORE >0) // REMOVENDO STATUS COM ZERO ELEMENTOS       
          return d.data.LCORE; });      
      arc.append("text")
      .attr("text-anchor","middle")
      .text(function(d) { return "L-CORE"; });
    });


var pieLSURF = d3.pie()
  .sort(null)
  .value(function(d) { return d.LSURF; });
d3.csv("../data/DatasetAgrupado220621.csv", function(d) {  d.LSURF = +d.LSURF;
    return d;
}, function(error, data) {    
  if (error) throw error;
   var arc = gLSURF.selectAll(".arc")
    .data(pieLSURF(data))
    .enter().append("g")
      .attr("class", "arc");

//L-SURF PieChart
  arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return colorHMLLSURF(d.data.LSURF); });
  /*arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "0em")
      .text(function(d) { 
          if(d.data.LSURF >0) // REMOVENDO STATUS COM ZERO ELEMENTO
          return d.data.STATUSCS; });
  */
          arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "1.05em")
      .text(function(d) { 
          if(d.data.LSURF >0) // REMOVENDO STATUS COM ZERO ELEMENTO
          return d3.format(".2f")(d.data.LSURF/0.9) +"%" ; });
          arc.append("text")
          .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
          .attr("dy", "2.05em")
          .text(function(d) { 
    if(d.data.LSURF >0) // REMOVENDO STATUS COM ZERO ELEMENTOS       
            return d.data.LSURF; });   
          arc.append("text")
      .attr("text-anchor","middle")
      .text(function(d) { return "L-SURF"; });
    });


var pieLBP = d3.pie()
    .sort(null)
    .value(function(d) { return d.LBP; });  
  d3.csv("../data/DatasetAgrupado220621.csv", function(d) {  d.LBP = +d.LBP;
      return d;
  }, function(error, data) {    
    if (error) throw error;
     var arc = gLBP.selectAll(".arc")
      .data(pieLBP(data))
      .enter().append("g")
        .attr("class", "arc");

    //L-BP PieChart
arc.append("path")
.attr("d", path)
.attr("fill", function(d) { return colorHMLLBP(d.data.LBP); });
/*arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "0em")
.text(function(d) { 
    if(d.data.LBP >0) // REMOVENDO STATUS COM ZERO ELEMENTOS
    return d.data.STATUSLBP; });
*/
    arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "1.05em")
.text(function(d) { 
    if(d.data.LBP >0) // REMOVENDO STATUS COM ZERO ELEMENTOS
    return d3.format(".2f")(d.data.LBP/0.9) +"%" ; });
    arc.append("text")
    .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
    .attr("dy", "2.05em")
    .text(function(d) { 
if(d.data.LBP >0) // REMOVENDO STATUS COM ZERO ELEMENTOS       
      return d.data.LBP; });     
    arc.append("text")
.attr("text-anchor","middle")
.text(function(d) { return "L-BP"; });
});



var pieLO2 = d3.pie()
    .sort(null)
    .value(function(d) { return d.LO2; });  
  d3.csv("../data/DatasetAgrupado220621.csv", function(d) {  d.LO2 = +d.LO2;
      return d;
  }, function(error, data) {    
    if (error) throw error;
     var arc = gLO2.selectAll(".arc")
      .data(pieLO2(data))
      .enter().append("g")
        .attr("class", "arc");

//L-O2 PieChart
arc.append("path")
.attr("d", path)
.attr("fill", function(d) { return colorEGFPLO2(d.data.LO2); });
/*arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "0em")
.text(function(d) { 
    if(d.data.LO2 >0) // REMOVENDO STATUS COM ZERO ELEMENTOS    
    return d.data.STATUSLO2; });
*/
    arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "1.05em")
.text(function(d) { 
    if(d.data.LO2 >0) // REMOVENDO STATUS COM ZERO ELEMENTOS
    return d3.format(".2f")(d.data.LO2/0.9) +"%" ; });
    arc.append("text")
    .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
    .attr("dy", "2.05em")
    .text(function(d) { 
if(d.data.LO2 >0) // REMOVENDO STATUS COM ZERO ELEMENTOS       
      return d.data.LO2; });     
    arc.append("text")
.attr("text-anchor","middle")
.text(function(d) { return "L-O2"; });
});


var pieBPSTBL = d3.pie()
    .sort(null)
    .value(function(d) { return d.BPSTBL; }); 
  d3.csv("../data/DatasetAgrupado220621.csv", function(d) {  d.BPSTBL = +d.BPSTBL;
      return d;
  }, function(error, data) {    
    if (error) throw error;
     var arc = gBPSTBL.selectAll(".arc")
      .data(pieBPSTBL(data))
      .enter().append("g")
        .attr("class", "arc");

//BP-STBL PieChart
arc.append("path")
.attr("d", path)
.attr("fill", function(d) { return colorSMUBPSTBL(d.data.BPSTBL); });
/*arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "0em")
.text(function(d) { 
    if(d.data.BPSTBL >0) // REMOVENDO STATUS COM ZERO ELEMENTOS
    return d.data.STATUSSCB; });
*/
 arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "1.05em")
.text(function(d) { 
    if(d.data.BPSTBL >0) // REMOVENDO STATUS COM ZERO ELEMENTOS
    return d3.format(".2f")(d.data.BPSTBL/0.9) +"%" ; });
    arc.append("text")
    .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
    .attr("dy", "2.05em")
    .text(function(d) { 
if(d.data.BPSTBL >0) // REMOVENDO STATUS COM ZERO ELEMENTOS       
      return d.data.BPSTBL; }); 
    arc.append("text")
.attr("text-anchor","middle")
.text(function(d) { return "BP-STBL"; });
});


var pieSURFSTBL = d3.pie()
    .sort(null)
    .value(function(d) { return d.SURFSTBL; });  
  d3.csv("../data/DatasetAgrupado220621.csv", function(d) {  d.SURFSTBL = +d.SURFSTBL;
      return d;
  }, function(error, data) {    
    if (error) throw error;
     var arc = gSURFSTBL.selectAll(".arc")
      .data(pieSURFSTBL(data))
      .enter().append("g")
        .attr("class", "arc");

//SURF-STBL PieChart
arc.append("path")
.attr("d", path)
.attr("fill", function(d) { return colorSMUSURFSTBL(d.data.CORESTBL); });
/*arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "0em")
.text(function(d) { 
    if(d.data.SURFSTBL >0) // REMOVENDO STATUS COM ZERO ELEMENTOS
    return d.data.STATUSSCB; });
*/
    arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "1.05em")
.text(function(d) { 
    if(d.data.SURFSTBL >0) // REMOVENDO STATUS COM ZERO ELEMENTOS
    return d3.format(".2f")(d.data.SURFSTBL/0.9) +"%" ; });
    arc.append("text")
    .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
    .attr("dy", "2.05em")
    .text(function(d) { 
if(d.data.SURFSTBL >0) // REMOVENDO STATUS COM ZERO ELEMENTOS       
      return d.data.SURFSTBL; }); 
  arc.append("text")
.attr("text-anchor","middle")
.text(function(d) { return "SURF-STBL"; });
});


var pieCORESTBL = d3.pie()
    .sort(null)
    .value(function(d) { return d.CORESTBL; });  
  d3.csv("../data/DatasetAgrupado220621.csv", function(d) {  d.CORESTBL = +d.CORESTBL;
      return d;
  }, function(error, data) {    
    if (error) throw error;
     var arc = gCORESTBL.selectAll(".arc")
      .data(pieCORESTBL(data))
      .enter().append("g")
        .attr("class", "arc");       
        
//CORE-STBL PieChart
arc.append("path")
.attr("d", path)
.attr("fill", function(d) { return colorSMUCORESTBL(d.data.CORESTBL); });
/*arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "0em")
.text(function(d) { 
    if(d.data.CORESTBL >0) // REMOVENDO STATUS COM ZERO ELEMENTOS
    return d.data.STATUSSCB ; });  
*/
 arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "1.05em")
.text(function(d) { 
    if(d.data.CORESTBL >0) // REMOVENDO STATUS COM ZERO ELEMENTOS
    return d3.format(".2f")(d.data.CORESTBL/0.9) +"%"; });
arc.append("text")
.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
.attr("dy", "2.05em")
.text(function(d) { 
if(d.data.CORESTBL >0) // REMOVENDO STATUS COM ZERO ELEMENTOS       
      return d.data.CORESTBL; }); 
arc.append("text")
.attr("text-anchor","middle")
.text(function(d) { return "CORE-STBL"; });
});

//CONFORT BarChart
// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 358 - margin.left - margin.right,
    height = 160 - margin.top - margin.bottom;
// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
/*var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
*/
    // Read data
  d3.csv("../data/DatasetAgrupado220621.csv", function(d) {  d.CONFORT = +d.CONFORT;
    return d;
}, function(error, data) {   
  if (error) throw error;
  // format the data
  data.forEach(function(d) {
    d.CONFORT = +d.CONFORT;
  });
  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.STATUSC; }));
  y.domain([0, d3.max(data, function(d) { return d.CONFORT; })]);
  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.STATUSC); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.CONFORT); })
      .attr("height", function(d) { return height - y(d.CONFORT); })
      .attr("transform", "translate(" + 330 + "," + 40 + ")");;
  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .attr("transform", "translate(" + 330 + "," + 150 + ")");
  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y))      
      .attr("transform", "translate(" + 330 + "," + 40 + ")");
  // Label in X axis
  svg.append("text")             
      .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("CONFORT")
      .style("stroke", "black")
      .attr("transform", "translate(" + 480 + "," + 180 + ")");


//GERAL PARCOORDS Chart

// set the dimensions and margins of the graph
var margin2 = {top: 30, right: 50, bottom: 10, left: 50},
  width2 = 340 - margin.left - margin.right,
  height2 = 180 - margin.top - margin.bottom;

// Parse the Data
 // d3.csv("../data/DatasetNormatizadoF.csv", function(data){ 
    d3.csv("../data/postoperativePesos.csv", function(data){ 

  // Color scale: give me a specie name, I return a color
  var color = d3.scaleOrdinal()
    .domain(["1", "2", "3"])
    .range([ "red", "orange", "green"])

  // Here I set the list of dimension manually to control the order of axis:
  dimensions = ["LBP", "DECISION",  "LO2"]

  // For each dimension, I build a linear scale. I store all in a y object
  var y = {}
  for (i in dimensions) {
    name2 = dimensions[i]
    y[name2] = d3.scaleLinear()
      .domain( [1,4] ) // --> Same axis range for each group
  // --> different axis range for each group --> .domain( [d3.extent(data, function(d) { return +d[name]; })] )
      .range([height2, 0])
  }
  // Build the X scale -> it find the best position for each Y axis
  x = d3.scalePoint()
    .range([0, width2])
    .domain(dimensions);    

  // Highlight the DECISION
  var highlight2 = function(d){
    selected_DECISION = d.DECISION
    // first every group turns grey
    d3.selectAll(".line")
      .transition().duration(200)
      .style("stroke", "lightgrey")
      .style("opacity", "0.2")
      
    // Second the hovered DECISION takes its color
    d3.selectAll("." + selected_DECISION)
      .transition().duration(200)
      .style("stroke", color(selected_DECISION))
      .style("opacity", "1")
  }

  // Unhighlight
  var doNotHighlight2 = function(d){
    d3.selectAll(".line")
      .transition().duration(200).delay(1000)
      .style("stroke", function(d){ return( color(d.DECISION))} )
      .style("opacity", "1")
  }

  // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
  function path(d) {
      return d3.line()(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
  }

  // Draw the lines
  svg
    .selectAll("myPath")
    .data(data)
    .enter()
    .append("path")
      .attr("class", function (d) { return "line " + d.DECISION } ) // 2 class for each line: 'line' and the group name
      .attr("d",  path)
      .style("fill", "none" )
      .style("stroke", function(d){ return( color(d.DECISION))} )
      .style("opacity", 0.5)
      .on("mouseover", highlight2)
      .on("mouseleave", doNotHighlight2 )
      .attr("transform", "translate(" + 670 + "," + 40 + ")");;

  // Draw the axis:
  svg.selectAll("myAxis")
    // For each dimension of the dataset I add a 'g' element:
    .data(dimensions).enter()
    .append("g")
    .attr("class", "axis")
    // I translate this element to its right position on the x axis
    //.attr("transform", function(d) { return "translate(" + x(d) + ")"; })
    .attr("transform", function(d) { return "translate(" + (x(d)+ 670) + "," + 40 + ")"; })

    // And I build the axis with the call function
    .each(function(d) { d3.select(this).call(d3.axisLeft().ticks(5).scale(y[d])); })
    // Add axis title
    .append("text")
      .style("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) { return d; })
      .style("fill", "black")
})



/*
//GERAL PARCOORDS 2 Chart

// set the dimensions and margins of the graph
var margin3 = {top: 30, right: 50, bottom: 10, left: 50},
  width3 = 300 - margin.left - margin.right,
  height3 = 260 - margin.top - margin.bottom;

// Parse the Data
 // d3.csv("../data/DatasetNormatizadoF.csv", function(data){ 
    d3.csv("../data/postoperativePesos2.csv", function(data){ 

  // Color scale: give me a specie name, I return a color
  var color = d3.scaleOrdinal()
    .domain(["1", "2", "3"])
    .range([ "red","orange","green"])

  // Here I set the list of dimension manually to control the order of axis:
  dimensions = ["LCORE", "DECISION", "BPSTBL" ,  ]

  // For each dimension, I build a linear scale. I store all in a y object
  var y = {}
  for (i in dimensions) {
    name3 = dimensions[i]
    y[name3] = d3.scaleLinear()
      .domain( [1,4] ) // --> Same axis range for each group
  // --> different axis range for each group --> .domain( [d3.extent(data, function(d) { return +d[name]; })] )
      .range([height3, 0])
  }
  // Build the X scale -> it find the best position for each Y axis
  x = d3.scalePoint()
    .range([0, width3])
    .domain(dimensions);    

  // Highlight the DECISION
  var highlight2 = function(d){
    selected_DECISION = d.DECISION
    // first every group turns grey
    d3.selectAll(".line")
      .transition().duration(200)
      .style("stroke", "lightgrey")
      .style("opacity", "0.2")
      
    // Second the hovered DECISION takes its color
    d3.selectAll("." + selected_DECISION)
      .transition().duration(200)
      .style("stroke", color(selected_DECISION))
      .style("opacity", "1")
  }

  // Unhighlight
  var doNotHighlight2 = function(d){
    d3.selectAll(".line")
      .transition().duration(200).delay(1000)
      .style("stroke", function(d){ return( color(d.DECISION))} )
      .style("opacity", "1")
  }

  // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
  function path(d) {
      return d3.line()(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
  }

  // Draw the lines
  svg
    .selectAll("myPath")
    .data(data)
    .enter()
    .append("path")
      .attr("class", function (d) { return "line " + d.DECISION } ) // 2 class for each line: 'line' and the group name
      .attr("d",  path)
      .style("fill", "none" )
      .style("stroke", function(d){ return( color(d.DECISION))} )
      .style("opacity", 0.5)
      .on("mouseover", highlight2)
      .on("mouseleave", doNotHighlight2 )
      .attr("transform", "translate(" + 700 + "," + 60 + ")");;

  // Draw the axis:
  svg.selectAll("myAxis")
    // For each dimension of the dataset I add a 'g' element:
    .data(dimensions).enter()
    .append("g")
    .attr("class", "axis")
    // I translate this element to its right position on the x axis
    //.attr("transform", function(d) { return "translate(" + x(d) + ")"; })
    .attr("transform", function(d) { return "translate(" + (x(d)+ 700) + "," + 60 + ")"; })

    // And I build the axis with the call function
    .each(function(d) { d3.select(this).call(d3.axisLeft().ticks(5).scale(y[d])); })
    // Add axis title
    .append("text")
      .style("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) { return d; })
      .style("fill", "black")
})
*/


/*
var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
	*/				
      //////////////////////// Set-Up ////////////////////////////// 
      var margin4 = {top: 30, right: 50, bottom: 10, left: 50},
          width4 = 345 - margin.left - margin.right,
          height4 = 345 - margin.top - margin.bottom; 
              
          ////////////////////////// Data ////////////////////////////// 
      var data = [
                [//S ALTA GREEN
                  {axis:"CORE-STBL (stable)",value:0.875},
                  {axis:"CORE-STBL (mod-stable)",value:0.0},
                  {axis:"CORE-STBL (unstable)",value:0.125},
                  {axis:"SURF-STBL (stable)",value:0.50},
                  {axis:"SURF-STBL (mod-stable)",value:0.0},
                  {axis:"SURF-STBL (unstable)",value:0.50},
                  {axis:"BP-STBL (stable)",value:0.6250},
                  {axis:"BP-STBL (mod-stable)",value:0.1667},
                  {axis:"BP-STBL (unstable)",value:0.2083},
                  {axis:"L-O2 (excellent)",value:0.4583},
                  {axis:"L-O2 (good)",value:0.5417},
                  {axis:"L-O2 (fail)",value:0.0},
                  {axis:"L-O2 (poor)",value:0.0},
                  {axis:"L-BP (high)",value:0.25},
                  {axis:"L-BP (mid)",value:0.75},
                  {axis:"L-BP (low)",value:0.0},
                  {axis:"L-SURF (high)",value:0.125},
                  {axis:"L-SURF (mid)",value:0.5833},
                  {axis:"L-SURF (low)",value:0.2917},
                  {axis:"L-CORE (high)",value:0.125},
                  {axis:"L-CORE (mid)",value:0.625},
                  {axis:"L-CORE (low)",value:0.25},
                          
                ],[//A ENFERMARIA ORANGE
                  {axis:"CORE-STBL (stable)",value:0.9375},
                  {axis:"CORE-STBL (mod-stable)",value:0.0156},
                  {axis:"CORE-STBL (unstable)",value:0.0468},
                  {axis:"SURF-STBL (stable)",value:0.5},
                  {axis:"SURF-STBL (mod-stable)",value:0.0},
                  {axis:"SURF-STBL (unstable)",value:0.50},
                  {axis:"BP-STBL (stable)",value:0.4687},
                  {axis:"BP-STBL (mod-stable)",value:0.2656},
                  {axis:"BP-STBL (unstable)",value:0.2656},
                  {axis:"L-O2 (excellent)",value:0.5},
                  {axis:"L-O2 (good)",value:0.5},
                  {axis:"L-O2 (fail)",value:0.0},
                  {axis:"L-O2 (poor)",value:0.0},
                  {axis:"L-BP (high)",value:0.3593},
                  {axis:"L-BP (mid)",value:0.5937},
                  {axis:"L-BP (low)",value:0.0468},
                  {axis:"L-SURF (high)",value:0.2187},
                  {axis:"L-SURF (mid)",value:0.5156},
                  {axis:"L-SURF (low)",value:0.2656},
                  {axis:"L-CORE (high)",value:0.1562},
                  {axis:"L-CORE (mid)",value:0.6562},
                  {axis:"L-CORE (low)",value:0.1875},
                ],[//I UTI RED
                  {axis:"CORE-STBL (stable)",value:1},
                  {axis:"CORE-STBL (mod-stable)",value:0.0},
                  {axis:"CORE-STBL (unstable)",value:0.0},
                  {axis:"SURF-STBL (stable)",value:0.5},
                  {axis:"SURF-STBL (mod-stable)",value:0.0},
                  {axis:"SURF-STBL (unstable)",value:0.5},
                  {axis:"BP-STBL (stable)",value:0.5},
                  {axis:"BP-STBL (mod-stable)",value:0.0},
                  {axis:"BP-STBL (unstable)",value:0.5},
                  {axis:"L-O2 (excellent)",value:0.0},
                  {axis:"L-O2 (good)",value:1},
                  {axis:"L-O2 (fail)",value:0.0},
                  {axis:"L-O2 (poor)",value:0.0},
                  {axis:"L-BP (high)",value:0.5},
                  {axis:"L-BP (mid)",value:0.50},
                  {axis:"L-BP (low)",value:0.0},
                  {axis:"L-SURF (high)",value:0.0},
                  {axis:"L-SURF (mid)",value:0.5},
                  {axis:"L-SURF (low)",value:0.5},
                  {axis:"L-CORE (high)",value:0.0},
                  {axis:"L-CORE (mid)",value:0.5},
                  {axis:"L-CORE (low)",value:0.5},
                ]
              ];

      //////////////////// Draw the Chart ////////////////////////// 
      var color = d3.scale.ordinal()
          .range(["green","orange","red"]);
          
      var radarChartOptions = {
        w: width4,
        h: height4,
        margin: margin4,
        maxValue: 0.5,
        levels: 5,
        roundStrokes: true,
        color: color
      };
      //Call function to draw the Radar chart
      RadarChart(".radarChart", data, radarChartOptions);
  


});

     