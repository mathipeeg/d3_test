document.addEventListener('DOMContentLoaded', function(e){
    d3.select('h1').style('color', 'blue')
        .attr('id', 'heading')
        .text('Updated hello');

    d3.select('p').style('color', 'green');

    d3.select('body').append('p')
        .text('a new paragraph')

    let data = [100, 200, 300];
    let paragraph = d3.select("body")
        .selectAll("p")
        .data(data)
        .text(function (d, i) {
            console.log("d: " + d);
            console.log("i: " + i);
            console.log("this: " + this);

            return d;
        });

    d3.selectAll("h2").style("color", function(d, i) {
        let text = this.innerText;

        if (text.indexOf("Error") >= 0) {
            return "red";
        } else if (text.indexOf("Warning") >= 0) {
            return "yellow";
        }
    });

    d3.selectAll("div")
        .on("mouseover", function(){
            d3.select(this)
                .style("background-color", "orange");

            // Get current event info
            console.log(d3.event);

            // Get x & y co-ordinates
            console.log(d3.mouse(this));
        })
        .on("mouseout", function(){
            d3.select(this)
                .style("background-color", "steelblue")
        });
})