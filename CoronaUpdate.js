const Http = new XMLHttpRequest();
function getData() {
    const url = 'https://api.covid19api.com/summary';
    Http.open("GET", url, true);
    Http.send();


    Http.onreadystatechange = (e) => {
        // document.getElementById("result").innerHTML = Http.responseText;
        var obj = JSON.parse(Http.responseText);
        document.getElementById("total-confirmed").innerHTML = obj.Global.TotalConfirmed;
        document.getElementById("new-confirmed").innerHTML = obj.Global.NewConfirmed;
        document.getElementById("new-deaths").innerHTML = obj.Global.NewDeaths;
        document.getElementById("new-recovered").innerHTML = obj.Global.NewRecovered;
        document.getElementById("total-recovered").innerHTML = obj.Global.TotalRecovered;
        if (this.readyState == 4 && this.status == 200) {
            this.responseText = Http.responseText;
        }
        

    }
}


// function getData() {
//     const url = 'https://api.covid19api.com/summary';
//     Http.open("GET", url);
//     console.log(Http.responseText)
// }
