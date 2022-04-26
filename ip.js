var lat =0;
var long =0;
var map = L.map('map').setView([lat, long], 1);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
     maxZoom: 18,
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
     id: 'mapbox/streets-v11',
     tileSize: 512,
     zoomOffset: -1
}).addTo(map);

$(function() {
     $.getJSON("http://ip-api.com/json/?fields=message,continent,country,region,regionName,city,isp,org,query",
        function(dados) {
             $.each(dados,function(p,s,){
               
               $(document.getElementById("meuip")).append("<td>&nbsp" +s+ " &nbsp</td>");           


          });

     });
  
     

})


function buscarip() {
     
     $("#buscar").click(function(){
          $('#saida').html("");
     });
     
     $.getJSON("http://ip-api.com/json/"+document.getElementById("nome").value+"?lang=pt-BR&fields=message,continent,country,region,regionName,city,isp,org,lat,lon,query",
        function(dados2) {
             $.each(dados2,function(r,a,){
               
               $(document.getElementById("saida")).append("<tr><td>"+r+"</td><td>"+a+"</td></tr>");
               

          });

     });
     
     $.getJSON("http://ip-api.com/json/"+document.getElementById("nome").value+"?lang=pt-BR&fields=lat",
        function(dados3) {
          
          $.each(dados3,function(j,f){
               lat = f;
                    

          });
                        

     });

     $.getJSON("http://ip-api.com/json/"+document.getElementById("nome").value+"?lang=pt-BR&fields=lon",
        function(dados4) {
          $.each(dados4,function(p,q){
               long = q; 
               

          });  
                 

          
     });

     var marker = L.marker([lat,long]).addTo(map);
     marker.bindPopup("<b>"+document.getElementById("nome").value+"</b><br>Estar Aproximadamente !<br>Aqui").openPopup();




}


const getElement = (...queries) => document.querySelector(...queries);

const button = getElement('.open-modal-button');
const container = getElement('.modal-container');
const modal = getElement('.modal');

const activeModalClass = 'modal-show';

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

button.addEventListener('click', openModal);
container.addEventListener('click', (event) => {
	if (modal.contains(event.target)) return;
	
	closeModal();
});

