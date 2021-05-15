
var tableData = data;


var buttonFilter = d3.select("#filter-btn");


var buttonReset = d3.select("#reset-btn");


var tbody = d3.select("tbody");


data.forEach((ufoSighting) => {
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]){
        var cell = tbody.append("td");
        cell.text(value);
    });
});



buttonFilter.on("click", runEnter);
buttonReset.on("click", runReset);


function runEnter() {

    
    d3.event.preventDefault();

    
    tbody.selectAll('*').remove();

    
    var inputElementDate = d3.select("#datetime");
    var inputValueDate = inputElementDate.property("value").trim();

    
    var inputElementCity = d3.select("#loccity");
    var inputValueCity = inputElementCity.property("value").toLowerCase().trim();

    
    var inputElementState = d3.select("#locstate");
    var inputValueState = inputElementState.property("value").toLowerCase().trim();

    
    var inputElementCountry = d3.select("#loccountry");
    var inputValueCountry = inputElementCountry.property("value").toLowerCase().trim();

    
    var inputElementShape = d3.select("#ufoshape");
    var inputValueShape = inputElementShape.property("value").toLowerCase().trim();


    
    if(inputValueDate.length == 0) {
        var filteredData = tableData;
    } else {
        var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime === inputValueDate);
    }
    if(inputValueCity.length == 0) {
        var filteredData = filteredData;
    } else {
        var filteredData = filteredData.filter(ufoEvent => ufoEvent.city === inputValueCity);
    }
    if(inputValueState.length == 0) {
        var filteredData = filteredData;
    } else {
        var filteredData = filteredData.filter(ufoEvent => ufoEvent.state === inputValueState)
    }
    if(inputValueCountry.length == 0) {
        var filteredData = filteredData;
    } else {
        var filteredData = filteredData.filter(ufoEvent => ufoEvent.country === inputValueCountry)
    }
    if(inputValueShape.length == 0) {
        var filteredData = filteredData;
    } else {
        var filteredData = filteredData.filter(ufoEvent => ufoEvent.shape === inputValueShape)
    }
    if(filteredData.length == 0) {
        alert("Sorry no sightings found with your criterias!");
        var filteredData = [{
            datetime: "N/A",
            city: "N/A",
            state: "N/A",
            country: "N/A",
            shape: "N/A",
            durationMinutes: "N/A",
            comments: "N/A"
          }];
    }

    
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");

        Object.entries(ufoSighting).forEach(function([key, value]){
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

};

function runReset() {
    location.reload();
}