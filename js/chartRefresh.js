//Refresh Chart
function refreshchart() {
  
        //Arrays to store the Json Data
        const dataArray = [];
        //Id
       	OrderId = [];   
        //Food     
        FoodDelivery = [];
        //Clothes
        ClothesDelivery =[];
        //Medicine
        MedicineDelivery = [];

        //get json data
        $.getJSON('https://spreadsheets.google.com/feeds/list/1LJ0ytMWevPm9rwXjQ2snqIyrZDuWF_Qxz0JcW-qr3Xs/5/public/full?alt=json' , function(data) {
  
          //go through entry
          for (var i = 0; i < data.feed.entry.length; ++i) {
            
                //Push the Data to the respective array
                OrderId.push(data.feed.entry[i].gsx$orderid.$t);
                 
                 if (data.feed.entry[i].gsx$priority.$t == "HP"){
                     MedicineDelivery.push([i,parseFloat(data.feed.entry[i].gsx$timetaken.$t)])}

                 else if (data.feed.entry[i].gsx$priority.$t == "MP"){
                   FoodDelivery.push([i,parseFloat(data.feed.entry[i].gsx$timetaken.$t)])}
    
                 else if (data.feed.entry[i].gsx$priority.$t == "LP"){
                     ClothesDelivery .push([i,parseFloat(data.feed.entry[i].gsx$timetaken.$t)])}

               }

             //Push the data to Master Array
             Arraydata.push(OrderId , MedicineDelivery ,FoodDelivery , ClothesDelivery );

             //Update the Chart
             chart.xAxis[0].categories = OrderId ;
             chart.series[0].setData(MedicineDelivery);
             chart.series[1].setData(FoodDelivery);
             chart.series[2].setData(ClothesDelivery);
             
           });
        }


