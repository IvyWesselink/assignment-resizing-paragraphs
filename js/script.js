let sizes = [4, 8, 15, 16, 23, 42];

let p = d3.selectAll("p");

p.style("font-size", function(d,i,arr){
    return `${sizes[i]}px`
});


d3.select('#noParagraphsPresent')
    .selectAll('p')
    .data(sizes)
    .enter()
    .append('p')
    .text('Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa hic aut facilis impedit cum architecto beatae, vel quisquam suscipit.')
    .style("font-size", function(d,i,arr){
        return `${sizes[i]}px`
    });