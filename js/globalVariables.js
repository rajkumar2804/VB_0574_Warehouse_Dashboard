//Gloabal Variables
var markergroup = new L.LayerGroup();
var Arraydata = [] ;

//HighChart Variable
var chart = Highcharts.chart('chart', {
    chart: { 
       
          type:'column'
               
    },
    title: {
        text: 'TIME TAKEN  BY ITEMS TO BE SHIPPED'
    },
    xAxis: {
        categories: Arraydata[0] ,       
         title: {
            text: 'OrderId'
        },min: 0,
        max: 4,
        scrollbar: {
            enabled: true
        }
    },
    yAxis: {
        min:0,
        title: {
            text: 'Time Taken (secs)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">OderId: <b>{point.key}</b></span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name} -Time Taken: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} secs</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

   plotOptions: {
            column: {
                grouping: false
            }
        },

   series: [{
        name: 'Medicine',
        data: Arraydata[1],
        color: 'red'

    }, {
        name: 'Food',
        data: Arraydata[2],
        color: 'green'

    }, {
        name: 'Clothes',
        data: Arraydata[3],
        color: 'yellow'

    }]
});

//Icons 
 
    //greenIcon
    var greenIcon = new L.Icon({
                             iconUrl:   'img/greenIcon.png',
                             shadowUrl: 'img/iconShadow.png',
                             iconSize: [25, 41],
                             iconAnchor: [12, 41],
                             popupAnchor: [1, -34],
                             shadowSize: [41, 41]});
 
    //redIcon
    var redIcon = new L.Icon({
                             iconUrl: 'img/redIcon.png',
                             shadowUrl: 'img/iconShadow.png',
                             iconSize: [25, 41],
                             iconAnchor: [12, 41],
                             popupAnchor: [1, -34],
                             shadowSize: [41, 41]});

   //yellowIcon
    var yellowIcon = new L.Icon({
                             iconUrl: 'img/yellowIcon.png',
                             shadowUrl: 'img/iconShadow.png',
                             iconSize: [25, 41],
                             iconAnchor: [12, 41],
                             popupAnchor: [1, -34],
                             shadowSize: [41, 41]});

   var map = L.map('map').setView([20.5937, 78.9629], 4);

   var Layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);














