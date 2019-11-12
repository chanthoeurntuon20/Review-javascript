var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+person&image_type=photo&pretty=true";

///use fetch

// fetch(url)
// .then(response => response.json())
// .then (data => {
//    data.hits.forEach(element => {
//        var card = document.getElementById("card");
//    });
// })
// .catch (() => console.log("Cannot"));

/////////////// use XMLHttpRequest

// var ajax = new XMLHttpRequest();
// var method = "GET";
// var async = true;
// ajax.open(method,url,async);
// ajax.onload = () =>{
//     var data = JSON.parse(ajax.response);
//     data.hits.forEach(element => {
//         console.log(element);
//     });
// }
// ajax.send();

///////Get data by async and await

async function getdata(){
    var response = await fetch(url);
    var data = await response.json();
    var result = document.getElementById('card');
    data.hits.forEach(element => {
       result.innerHTML += `
         <div class="card shadow-lg mt-5">
            <div class="card-header">
            <img src = "${element.userImageURL}" class = "img-fluid rounded-circle" width = "40">
            ${element.user}
            <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${element.id}">Veiew
            </div>
            <div class="card-body">
            <img src = "${element.largeImageURL}" class = "img-fluid">
            </div>
        </div>

                <div class="modal fade" id="myModal${element.id}">
            <div class="modal-dialog">
            <div class="modal-content">
            
                <!-- Modal Header -->
                <div class="modal-header">
                <img src = "${element.userImageURL}" class = "img-fluid rounded-circle" width = "40">
                ${element.user}
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body">
                 <img src = "${element.largeImageURL}" class = "img-fluid">
                </div>
                
            </div>
            </div>
        </div>
       `
    });
}
getdata();