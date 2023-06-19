'use client';
import { useEffect } from 'react';


const Tabs = ({ ergebnisse, menergebnisse, teamergebnissewomen, teamergebnisse } : any ) => {

    // ADJUST Funktionen damit RESPONSIVE erhalten bleibt
const fc = () =>{
    $(document).ready(function(){ 
      $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {     
      const mytable = $('#runner_data').DataTable();
      mytable.columns.adjust();
      });  
    }); 
  }
  
  const mc = () =>{
    $(document).ready(function(){ 
      $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {     
      const mytable = $('#runnermen_data').DataTable();
      mytable.columns.adjust();
      });  
    }); 
  }
  
  const tw = () =>{
    $(document).ready(function(){ 
      $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
      const mytable = $('#teamwomen_data').DataTable();
      mytable.columns.adjust();
      });  
    }); 
  }
      
  const tm = () =>{
    $(document).ready(function(){   
      $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
      const mytable = $('#team_data').DataTable();
      mytable.columns.adjust();
      });
  }); 
  }


    useEffect(() => {
        
    //    console.log(ergebnisse)
    //    console.log(menergebnisse)

        var data_arr_f : any = [];

        ergebnisse.map((ergebnis:any) =>{
               data_arr_f.push([
                 ergebnis.rn,
                 ergebnis.vorname,
                 ergebnis.name,
                 ergebnis.ak,
                 ergebnis.verein,
                 ergebnis.orderdate_1,
                 ergebnis.orderdate_2,
                 ergebnis.gesamtzeit,
                 ergebnis.wettbewerbdate_1,
                 ergebnis.wettbewerbdate_2
               ]             
               );
           });
       
        $('#runner_data').DataTable({
         responsive: true,
         language: {
           "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
           },
         ordering: false,
         lengthChange: false,
         info: false,
         data: data_arr_f,
         columnDefs: [
           { targets: [5, 6], visible: false },
           {
           targets: [8, 9],
           createdCell: function (td, cellData, rowData, row, col) {
             
             if ( cellData == rowData[6] ) {
               $(td).css('color', 'orange')
            
             }
             if ( cellData == rowData[5] ) {
               $(td).css('color', 'green')
             
             }
             if ( rowData[3] == 'W30'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W35'){
               var color_to_set = '#d1eee1'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W40'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W45'){
               var color_to_set = '#d1eee1'
               $(td).css('background-color', color_to_set)
             }
             /*if ( rowData[3] == 'W50'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }*/
             if ( rowData[3] == 'W55'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W60'){
               var color_to_set = '#d1eee1'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W65'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W70'){
               var color_to_set = '#d1eee1'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W75'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W80'){
               var color_to_set = '#d1eee1'
               $(td).css('background-color', color_to_set)
             }
           }
         },
         {
           targets: [0,1,2,3,4,5,6,7],
           createdCell: function(td, cellData, rowData, row, col){
             if ( rowData[3] == 'W30'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W35'){
               var color_to_set = '#d1eee1'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W40'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W45'){
               var color_to_set = '#d1eee1'
               $(td).css('background-color', color_to_set)
             }
             /*if ( rowData[3] == 'W50'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }*/
             if ( rowData[3] == 'W55'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W60'){
               var color_to_set = '#d1eee1'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W65'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W70'){
               var color_to_set = '#d1eee1'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W75'){
               var color_to_set = '#f1f9f6'
               $(td).css('background-color', color_to_set)
             }
             if ( rowData[3] == 'W80'){
               var color_to_set = '#d1eee1'
               $(td).css('background-color', color_to_set)
             }
           }
         }
       ]
       
         });
       
         $("#runner_data").children("thead").css('visibility', 'visible')
        
         // Männer
        
        var data_arr_m : any = [];

        menergebnisse.map((ergebnis:any) =>{
            data_arr_m.push([
            ergebnis.rn,
            ergebnis.vorname,
            ergebnis.name,
            ergebnis.ak,
            ergebnis.verein,
            ergebnis.orderdate_1,
            ergebnis.orderdate_2,
            ergebnis.gesamtzeit,
            ergebnis.wettbewerbdate_1,
            ergebnis.wettbewerbdate_2
        ]             
        );
    });

  $('#runnermen_data').DataTable({
      responsive: true,
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
    },
    ordering: false,
    lengthChange: false,
    info: false,
    data: data_arr_m,
    columnDefs:[
      { targets: [5, 6], visible: false },
      {
        targets: [8, 9],
        createdCell: function (td, cellData, rowData, row, col) {
          
          if ( cellData == rowData[6] ) {
            $(td).css('color', 'orange')
          
          }
          if ( cellData == rowData[5] ) {
            $(td).css('color', 'green')
          
          }
          if ( rowData[3] == 'M30'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M35'){
            var color_to_set = '#d1eee1'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M40'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M45'){
            var color_to_set = '#d1eee1'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M50'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M55'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M60'){
            var color_to_set = '#d1eee1'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M65'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M70'){
            var color_to_set = '#d1eee1'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M75'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[4] == 'M80'){
            var color_to_set = '#d1eee1'
            $(td).css('background-color', color_to_set)
          }
        }
      },
      {
        targets: [0,1,2,3,4,5,6,7],
        createdCell: function(td, cellData, rowData, row, col){
          if ( rowData[3] == 'M30'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M35'){
            var color_to_set = '#d1eee1'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M40'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M45'){
            var color_to_set = '#d1eee1'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M50'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M55'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M60'){
            var color_to_set = '#d1eee1'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M65'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M70'){
            var color_to_set = '#d1eee1'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M75'){
            var color_to_set = '#f1f9f6'
            $(td).css('background-color', color_to_set)
          }
          if ( rowData[3] == 'M80'){
            var color_to_set = '#d1eee1'
            $(td).css('background-color', color_to_set)
          }
        }
      }
    ]
    });

    // Frauenteam
    var data_arr_tw : any = [];

  teamergebnissewomen.map((ergebnis:any) =>{
         data_arr_tw.push([
             ergebnis.row,
             ergebnis.teamname,
             ergebnis.orderdate_1,
             ergebnis.orderdate_2,
             ergebnis.gesamtzeit,
             ergebnis.wettbewerbdate_1,
             ergebnis.wettbewerbdate_2]             
         );
     });

  $('#teamwomen_data').DataTable({
    responsive:true,
    language: {
      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
    },
    ordering: false,
    searching: false,
    paging:false,
    info: false,
    data: data_arr_tw,
    columnDefs: [
      { targets: [2, 3], visible: false },
      {
      targets: [5, 6],
      createdCell: function (td, cellData, rowData, row, col) {
        
        if ( cellData == rowData[3] ) {
          $(td).css('color', 'orange')     
        }
        if ( cellData == rowData[2] ) {
          $(td).css('color', 'green')
        }
        
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
       
      }
      },
      {
      targets: [0, 1, 2, 3, 4],
      createdCell: function (td, cellData, rowData, row, col) {
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)     
      }
      }
    ]
  
  });

//Männerteam
var data_arr_tm : any = [];

  teamergebnisse.map((ergebnis:any) =>{
         data_arr_tm.push([
             ergebnis.row,
             ergebnis.teamname,
             ergebnis.orderdate_1,
             ergebnis.orderdate_2,
             ergebnis.gesamtzeit,
             ergebnis.wettbewerbdate_1,
             ergebnis.wettbewerbdate_2]             
         );
     });

 $('#team_data').DataTable({
  responsive:true,
  language: {
    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
    },
  ordering: false,
  searching: false,
  paging:false,
  info: false,
  data: data_arr_tm,
  columnDefs: [
    { targets: [2, 3], visible: false },
    {
      targets: [5, 6],
      createdCell: function (td, cellData, rowData, row, col) {
        
        if ( cellData == rowData[3] ) {
          $(td).css('color', 'orange')     
        }
        if ( cellData == rowData[2] ) {
          $(td).css('color', 'green')
        }
        
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
       
      }
    },
    {
      targets: [0, 1, 2, 3, 4],
      createdCell: function (td, cellData, rowData, row, col) {
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)     
      }
    }
]

});

         }, []);
       

  return (
    <div id="bodyDiv">
    
    <script src="https://code.jquery.com/jquery-3.5.1.js"/>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"/>
    <script src="https://cdn.datatables.net/responsive/2.4.1/js/dataTables.responsive.min.js" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
        
        <div className="sm:flex hidden ">    
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="einzel-tab" data-bs-toggle="tab" data-bs-target="#einzel" type="button" role="tab" aria-controls="einzel" aria-selected="true">Frauen</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="einzel-m-tab" data-bs-toggle="tab" data-bs-target="#einzel-m" type="button" role="tab" aria-controls="einzel-m" aria-selected="false">Männer</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="mannschaften-f-tab" data-bs-toggle="tab" data-bs-target="#mannschaften-f" type="button" role="tab" aria-controls="mannschaften-f" aria-selected="false">Mannschaften Frauen</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="mannschaften-m-tab" data-bs-toggle="tab" data-bs-target="#mannschaften-m" type="button" role="tab" aria-controls="mannschaften-m" aria-selected="false">Mannschaften Männer</button>
            </li>
        </ul> 
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="einzel-tab" data-bs-toggle="tab" data-bs-target="#einzel" type="button" role="tab" aria-controls="einzel" aria-selected="true"onClick={fc}>Frauen</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="einzel-m-tab" data-bs-toggle="tab" data-bs-target="#einzel-m" type="button" role="tab" aria-controls="einzel-m" aria-selected="false"onClick={mc}>Männer</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="mannschaften-f-tab" data-bs-toggle="tab" data-bs-target="#mannschaften-f" type="button" role="tab" aria-controls="mannschaften-f" aria-selected="false" onClick={tw}>Teams (F)</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="mannschaften-m-tab" data-bs-toggle="tab" data-bs-target="#mannschaften-m" type="button" role="tab" aria-controls="mannschaften-m" aria-selected="false" onClick={tm}>Teams (M)</button>
            </li>
        </ul>
        </div>

        <div className="tab-content" id="myTabContent">

            <div className="tab-pane fade show active" id="einzel" role="tabpanel" aria-labelledby="einzel-tab">
            
                <div className="card">         
                <div className="card-header" style={{color: "#228B22", background:"#F0FFF0", fontWeight: "bold"}}>Ergebnisse</div>
                
                <div className="card-body">      
                <div className="table-responsive">                   
                
                <table id="runner_data" className="responsive nowrap compact hover row-border" width={"100%"} cellSpacing={"0"} >
                <thead style={{ color: "#228B22", background:"#F0FFF0", border:"hidden", visibility:"hidden"}}>
              <tr>
                <th data-orderable="false">Platz</th>
                <th data-orderable="false">Name</th>
                <th data-orderable="false">Vorname</th>
                <th data-orderable="false">AK</th>
                <th data-orderable="false">Verein</th>
                <th data-orderable="false">Beste Zeit</th>
                <th data-orderable="false">Zweite Zeit</th>
                <th data-orderable="false">Gesamtzeit</th>
                <th data-orderable="false">Großweier</th>
                <th data-orderable="false">Biberach</th>
              </tr>
          </thead>            
                    
                </table>    
                </div>
                </div>
                </div>

            </div>

            <div className="tab-pane fade" id="einzel-m" role="tabpanel" aria-labelledby="einzel-m-tab">
            
                <div className="card">       
                <div className="card-header" style={{color: "#228B22", background:"#F0FFF0", fontWeight: "bold"}}>Ergebnisse</div>
                
                <div className="card-body">            
                <div className="table-responsive">                   
                    
                <table id="runnermen_data" className="responsive nowrap compact hover row-border" width={"100%"} cellSpacing={"0"} >
                <thead style={{ color: "#228B22", background:"#F0FFF0", border:"hidden"}}>
                        <tr>
                          <th data-orderable="false">Platz</th>
                          <th data-orderable="false">Name</th>
                          <th data-orderable="false">Vorname</th>
                          <th data-orderable="false">AK</th>
                          <th data-orderable="false">Verein</th>
                          <th data-orderable="false">Beste Zeit</th>
                          <th data-orderable="false">Zweite Zeit</th>
                          <th data-orderable="false">Gesamtzeit</th>
                          <th data-orderable="false">Großweier</th>
                          <th data-orderable="false">Biberach</th>
                        </tr>
                    </thead>           
                    
                </table>               
                </div>
                </div>
                </div>            
  
            </div>

            <div className="tab-pane fade" id="mannschaften-f" role="tabpanel" aria-labelledby="mannschaften-f-tab">
             
                <div className="card">       
                <div className="card-header" style={{color: "#228B22", background:"#F0FFF0", fontWeight: "bold"}}>Ergebnisse</div>
                
                <div className="card-body">
                <div className="table-responsive">                   
                
                <table id="teamwomen_data" className="responsive nowrap compact hover row-border" width={"100%"} cellSpacing={"0"} >                       
                <thead style={{ color: "#228B22", background:"#F0FFF0", border:"hidden"}}>
                <tr>
                  <th data-orderable="false">Platz</th>
                  <th data-orderable="false">Mannschaft</th>
                  <th data-orderable="false">Beste Zeit</th>
                  <th data-orderable="false">Zweite Zeit</th>
                  <th data-orderable="false">Gesamtzeit</th>
                  <th data-orderable="false">Großweier</th>
                  <th data-orderable="false">Biberach</th>
                </tr>
            </thead>
                                     
                </table>             
                </div> 
                </div>             
                </div>
              
            </div>

            <div className="tab-pane fade" id="mannschaften-m" role="tabpanel" aria-labelledby="mannschaften-m-tab">       
           

                <div className="card">
                <div className="card-header" style={{color: "#228B22", background:"#F0FFF0", fontWeight: "bold"}}>Ergebnisse</div>
                
                <div className="card-body"> 
                <div className="table-responsive">                   
                <table id="team_data" className="responsive nowrap compact hover row-border" width={"100%"} cellSpacing={"0"} >                       
                <thead style={{ color: "#228B22", background:"#F0FFF0", border:"hidden"}}>
                <tr>
                  <th data-orderable="false">Platz</th>
                  <th data-orderable="false">Mannschaft</th>
                  <th data-orderable="false">Beste Zeit</th>
                  <th data-orderable="false">Zweite Zeit</th>
                  <th data-orderable="false">Gesamtzeit</th>
                  <th data-orderable="false">Großweier</th>
                  <th data-orderable="false">Biberach</th>
                </tr>
            </thead>
                                       
                </table>             
                </div>  
                </div>         
                </div>         
      
            </div>

        </div>

        <div className="text-center p-2" style={{background:"#F0FFF0", marginTop: "10px"}}>
            <span style={{color:"green", marginLeft:"20px"}}>Beste Zeit</span>
            <span style={{color:"orange", marginLeft:"20px"}}>Zweite Zeit</span>
        </div>
        
    </div>

  )
}

export default Tabs