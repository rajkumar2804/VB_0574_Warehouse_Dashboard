//document Reday
$(document).ready(function() {

    //Initialisation

    //Fetch the initial Map
    createMap();

   // Fetch the initial Chart
    createHighcharts();

     //Datatable
     var table =  $('#table_id').dataTable({
                       "dom": '<"pull-left"f><"pull-right"p>t',
                       "bServerSide":false,
                       "bProcessing": false,
                       "scrollX": true,
                       "iDisplayLength" : 7,
                       "columnDefs": [{"className": "dt-center", "targets": "_all"}],
                       "sAjaxDataProp": "feed.entry",
                       "sAjaxSource": "https://spreadsheets.google.com/feeds/list/1LJ0ytMWevPm9rwXjQ2snqIyrZDuWF_Qxz0JcW-qr3Xs/5/public/full?alt=json" ,
                        "aoColumns": [
                                     { "mDataProp": "gsx$orderid.$t" },
                                     { "mDataProp": "gsx$item.$t" },
                                     { "mDataProp": "gsx$priority.$t" },
                                     { "mDataProp": "gsx$orderquantity.$t" },
                                     { "mDataProp": "gsx$city.$t" },
                                     { "mDataProp": "gsx$dispatched.$t" },
                                     { "mDataProp": "gsx$shipped.$t" },
                                     { "mDataProp": "gsx$orderdateandtime.$t" },
                                     { "mDataProp": "gsx$dispatchdateandtime.$t" },
                                     { "mDataProp": "gsx$shippeddateandtime.$t" },
                                     { "mDataProp": "gsx$timetaken.$t"}]

                      });


   // Fetch every 1 second
   setInterval(refreshTable, 1000, table);
   setInterval(refresMap, 1000);
   setInterval(refreshchart, 1000);

   });
    

 //Load the table
function refreshTable(table){

    table.api().ajax.reload(null, false);
    
}
