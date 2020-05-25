const Http = new XMLHttpRequest();
var obj = {};
var responseText = {};
function getGlobalData() {
    const url = 'https://api.covid19api.com/summary';
    Http.open("GET", url, true);
    Http.send();


    Http.onreadystatechange = (e) => {
        // document.getElementById("result").innerHTML = Http.responseText;
        // let a = document.getElementById('data');
        // var att = document.createAttribute("class");
        // att.value = "se-pre-con"; 
        // a.setAttributeNode(att);

        // if (this.readyState == 4 && this.status == 200) {


        this.responseText = Http.responseText;
        let a = document.getElementById('data');
        var att = document.createAttribute("class");
        att.value = "se-pre-con";
        a.setAttributeNode(att);
        obj = JSON.parse(this.responseText);
        let b = document.getElementById('data');
        var att = document.createAttribute("class");
        att.value = "se";
        a.setAttributeNode(att);
        document.getElementById("total-confirmed").innerHTML = obj.Global.TotalConfirmed;
        document.getElementById("new-confirmed").innerHTML = obj.Global.NewConfirmed;
        document.getElementById("new-deaths").innerHTML = obj.Global.NewDeaths;
        document.getElementById("new-recovered").innerHTML = obj.Global.NewRecovered;
        document.getElementById("total-recovered").innerHTML = obj.Global.TotalRecovered;


        obj.Countries.forEach(element => {
            var node1 = document.createElement("tr");
            var node2 = document.createElement("td");
            var node3 = document.createElement("td");
            var node4 = document.createElement("td");
            var node5 = document.createElement("td");
            var node6 = document.createElement("td");
            var node7 = document.createElement("td");
            var node8 = document.createElement("td");
            //<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
            var link = document.createElement('a');
            var textnode = document.createTextNode(`${element.Country}`);
            link.appendChild(textnode);
            link.setAttribute('onclick', `getCountryData("${element.Country}")`);
            node2.appendChild(link);
            link.href = "./CoronaStatusByCountry.html"
            node3.appendChild(document.createTextNode(`${element.NewConfirmed}`))
            node4.appendChild(document.createTextNode(`${element.TotalConfirmed}`))
            node5.appendChild(document.createTextNode(`${element.NewDeaths}`))
            node6.appendChild(document.createTextNode(`${element.TotalDeaths}`))
            node7.appendChild(document.createTextNode(`${element.NewRecovered}`))
            node8.appendChild(document.createTextNode(`${element.TotalRecovered}`))
            document.getElementById('country-data').appendChild(node1)
            document.getElementById('country-data').appendChild(node2)
            document.getElementById('country-data').appendChild(node3)
            document.getElementById('country-data').appendChild(node4)
            document.getElementById('country-data').appendChild(node5)
            document.getElementById('country-data').appendChild(node6)
            document.getElementById('country-data').appendChild(node7)
            document.getElementById('country-data').appendChild(node8)

        });


    }

    // const interval = setInterval(function () {
    //     getGlobalData()();
    // }, 60000);

}


function getCountryData(countryName) {
    const url = `https://api.covid19api.com/dayone/country/${countryName}`;
    Http.open("GET", url, true);
    Http.send();


    Http.onreadystatechange = (e) => {
        this.responseText = Http.responseText;
        obj = JSON.parse(this.responseText);
        document.getElementById("confirmed").innerHTML = obj.slice(-1).pop().Confirmed;
        document.getElementById("deaths").innerHTML = obj.slice(-1).pop().Deaths;
        document.getElementById("recovered").innerHTML = obj.slice(-1).pop().Recovered;
        document.getElementById("active").innerHTML = obj.slice(-1).pop().Active;


        // obj.Countries.forEach(element => {
        //     var node1 = document.createElement("tr");
        //     var node2 = document.createElement("td");
        //     var node3 = document.createElement("td");
        //     var node4 = document.createElement("td");
        //     var node5 = document.createElement("td");
        //     var node6 = document.createElement("td");
        //     var node7 = document.createElement("td");
        //     var node8 = document.createElement("td");
        //     //<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
        //     var link = document.createElement('a');
        //     var textnode = document.createTextNode(`${element.Country}`);
        //     link.appendChild(textnode);
        //     node2.appendChild(link);
        //     link.href = "./CoronaStatusByCountry.html"
        //     node3.appendChild(document.createTextNode(`${element.NewConfirmed}`))
        //     node4.appendChild(document.createTextNode(`${element.TotalConfirmed}`))
        //     node5.appendChild(document.createTextNode(`${element.NewDeaths}`))
        //     node6.appendChild(document.createTextNode(`${element.TotalDeaths}`))
        //     node7.appendChild(document.createTextNode(`${element.NewRecovered}`))
        //     node8.appendChild(document.createTextNode(`${element.TotalRecovered}`))
        //     document.getElementById('country-data').appendChild(node1)
        //     document.getElementById('country-data').appendChild(node2)
        //     document.getElementById('country-data').appendChild(node3)
        //     document.getElementById('country-data').appendChild(node4)
        //     document.getElementById('country-data').appendChild(node5)
        //     document.getElementById('country-data').appendChild(node6)
        //     document.getElementById('country-data').appendChild(node7)
        //     document.getElementById('country-data').appendChild(node8)

        // });


    }

    const interval = setInterval(function () {
        getCountryData();
    }, 30000);

}