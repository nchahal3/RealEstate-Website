function price_save() {
    var buttonText = "Price"

    if (document.getElementById("priceMin").value == "" && document.getElementById("priceMax").value == "" ) {
    } else if (document.getElementById("priceMin").value == "" && document.getElementById("priceMax").value != "") {
        var max = parseInt(document.getElementById("priceMax").value)
        if (max >= 1000000) {
            max = Math.floor(max/1000000) + "M"
        } else if (max > 999) {
            max = Math.floor(max/1000) + "K"
        }
        buttonText = "< " + "$" + max
    } else if (document.getElementById("priceMin").value != "" && document.getElementById("priceMax").value == "") {
        var min = parseInt(document.getElementById("priceMin").value)
        if (min >= 1000000) {
            min = Math.floor(min/1000000) + "M"
        } else if (min > 999) {
            min = Math.floor(min/1000) + "K"
        }
        buttonText = "> " + "$" + min
    } else {
        var min = parseInt(document.getElementById("priceMin").value)
        if (min >= 1000000) {
            min = Math.floor(min/1000000) + "M"
        } else if (min > 999) {
            min = Math.floor(min/1000) + "K"
        }
        var max = parseInt(document.getElementById("priceMax").value)
        if (max >= 1000000) {
            max = Math.floor(max/1000000) + "M"
        } else if (max > 999) {
            max = Math.floor(max/1000) + "K"
        }
        buttonText = "$" + min + " - " + "$" + max
    }
    document.getElementById("priceButton").textContent = buttonText
}

function bed_save() {
    var buttonText = "Bed"

    if (document.getElementById("bedMin").value == "" && document.getElementById("bedMax").value == "" ) {
    } else if (document.getElementById("bedMin").value == "" && document.getElementById("bedMax").value != "") {
        buttonText += ": " + "< " + document.getElementById("bedMax").value
    } else if (document.getElementById("bedMin").value != "" && document.getElementById("bedMax").value == "") {
        buttonText += ": " + "> " + document.getElementById("bedMin").value
    } else {
        buttonText += ": " + document.getElementById("bedMin").value + " - " + document.getElementById("bedMax").value
    }
    document.getElementById("bedButton").textContent = buttonText
}

function bath_save() {
    var buttonText = "Bath"

    if (document.getElementById("bathMin").value == "" && document.getElementById("bathMax").value == "" ) {
    } else if (document.getElementById("bathMin").value == "" && document.getElementById("bathMax").value != "") {
        buttonText += ": " + "< " +  document.getElementById("bathMax").value
    } else if (document.getElementById("bathMin").value != "" && document.getElementById("bathMax").value == "") {
        buttonText += ": " + "> " + document.getElementById("bathMin").value
    } else {
        buttonText += ": " + document.getElementById("bathMin").value + " - " + document.getElementById("bathMax").value
    }
    document.getElementById("bathButton").textContent = buttonText
}

function map_zoom() {
    let arr = document.getElementById("map-img").src.split("/")
    let file_name = arr[arr.length - 1]
    if(file_name == "max_zoom.png") {
        document.getElementById("map-img").src = "/LandingPage/min_zoom.png";
    } else {
        document.getElementById("map-img").src = "/LandingPage/max_zoom.png";
    }
}


function filter() {
    document.getElementById("map-img").src = "/LandingPage/filtered.png";
}


function parks() {
    let arr = document.getElementById("minimap-img").src.split("/")
    let file_name = arr[arr.length - 1]
    if(file_name == "parks.png") {
        document.getElementById("minimap-img").src = "/minimap/none.png";
    } else {
        document.getElementById("minimap-img").src = "/minimap/parks.png";
    }
}


function schools() {
    let arr = document.getElementById("minimap-img").src.split("/")
    let file_name = arr[arr.length - 1]
    if(file_name == "schools.png") {
        document.getElementById("minimap-img").src = "/minimap/parks.png";
    } else {
        document.getElementById("minimap-img").src = "/minimap/schools.png";
    }
}

function gyms() {
    let arr = document.getElementById("minimap-img").src.split("/")
    let file_name = arr[arr.length - 1]
    if(file_name == "gyms.png") {
        document.getElementById("minimap-img").src = "/minimap/schools.png";
    } else {
        document.getElementById("minimap-img").src = "/minimap/gyms.png";
    }
}