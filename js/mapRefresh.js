//refresh the Map
function refresMap(){
      
        //Array Json Data
        var jsonDataObject =[];
       
        //Get Json Data
        $.getJSON('https://spreadsheets.google.com/feeds/list/1LJ0ytMWevPm9rwXjQ2snqIyrZDuWF_Qxz0JcW-qr3Xs/5/public/full?alt=json', function(data) {

        //feeding the Enteries
        for (var i = 0; i < data.feed.entry.length; ++i) {

            var json_data = {
                "OderID":data.feed.entry[i].gsx$orderid.$t,
                 "Item":  data.feed.entry[i].gsx$item.$t, 
                 "Priority" :  data.feed.entry[i].gsx$priority.$t,
                 "Quantity" : data.feed.entry[i].gsx$orderquantity.$t,
                 "City"  :    data.feed.entry[i].gsx$city.$t,
                "Disptached":  data.feed.entry[i].gsx$dispatched.$t,
                "Shipped" :    data.feed.entry[i].gsx$shipped.$t,
                "OrderDateandTime" :  data.feed.entry[i].gsx$orderdateandtime.$t,
                "DispatchDateandTime" : data.feed.entry[i].gsx$dispatchdateandtime.$t,
                "ShippedDateandTime" : data.feed.entry[i].gsx$shippeddateandtime.$t,
                "Time Taken": data.feed.entry[i].gsx$timetaken.$t,
                "Latitude":  parseFloat(data.feed.entry[i].gsx$latitude.$t),
                "Longitude" : parseFloat(data.feed.entry[i].gsx$longitude.$t) };

                jsonDataObject.push(json_data);

          }                   
           
        //Going through the JsonDataObject              
        for (var j = 0; j < jsonDataObject.length; j++) {
 

             //If Marker present Already 
             if (markergroup.getLayer(j+1)){

                            if (jsonDataObject[j].Shipped== "YES" ){
                                 markergroup.getLayer(j+1).setLatLng(L.latLng(parseFloat(jsonDataObject[j].Latitude), parseFloat(jsonDataObject[j].Longitude)));
                                  markergroup.getLayer(j+1).setIcon(greenIcon);
                                  }


                                else if (jsonDataObject[j].Disptached== "YES"){ 
                                         markergroup.getLayer(j+1).setLatLng(L.latLng(parseFloat(jsonDataObject[j].Latitude), parseFloat(jsonDataObject[j].Longitude)));
                                         markergroup.getLayer(j+1).setIcon(yellowIcon);
                                       }



                                else { 
                                        markergroup.getLayer(j+1).setLatLng(L.latLng(parseFloat(jsonDataObject[j].Latitude), parseFloat(jsonDataObject[j].Longitude)));
                                        markergroup.getLayer(j+1).setIcon(redIcon);
                                          }
                } 
                                         
            //Else       
             else {
             
                if (jsonDataObject[j].Shipped== "YES" ){       
                var marker = L.marker(L.latLng(parseFloat(jsonDataObject[j].Latitude), parseFloat(jsonDataObject[j].Longitude)),{icon: greenIcon});
                //Alloting Leaflet ID
                marker._leaflet_id = j+1 ;
                marker.bindPopup(jsonDataObject[j].City, {autoClose: false});
                marker.on('click', onClick_Marker);
               // Attach the corresponding JSON data to your marker:
                marker.myJsonData =jsonDataObject[j];
                markergroup.addLayer(marker);}
               
                
                else if (jsonDataObject[j].Disptached== "YES" ){       
                var marker = L.marker(L.latLng(parseFloat(jsonDataObject[j].Latitude), parseFloat(jsonDataObject[j].Longitude)),{icon: yellowIcon});
                //Alloting Leaflet ID
                marker._leaflet_id = j+1 ;
                marker.bindPopup(jsonDataObject[j].City, {autoClose: false});
                marker.on('click', onClick_Marker);
               // Attach the corresponding JSON data to your marker:
               marker.myJsonData =jsonDataObject[j];
               markergroup.addLayer(marker);}

                else {       
                var marker = L.marker(L.latLng(parseFloat(jsonDataObject[j].Latitude), parseFloat(jsonDataObject[j].Longitude)),{icon: redIcon});
                //Alloting Leaflet ID
                marker._leaflet_id = j+1 ;
                marker.bindPopup(jsonDataObject[j].City ,{autoClose: false});
                marker.on('click', onClick_Marker);
                // Attach the corresponding JSON data to your marker:
                marker.myJsonData =jsonDataObject[j];
                markergroup.addLayer(marker);}
                }
    
                //On click
                function onClick_Marker(e) {
                        var marker = e.target;
                        popup = L.popup().setLatLng(marker.getLatLng()).setContent("Order ID: " + marker.myJsonData.OderID + " || Item: " +   marker.myJsonData.Item) .openOn(map);
                    } 
                 
               }

              //Add Layer to Map
              markergroup.addTo(map);
        });  

    }

