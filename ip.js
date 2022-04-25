
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

     document.getElementsByName("mapa").src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15833.207449695528!2d-34.85136865!3d-7.2063619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1650545403294!5m2!1spt-BR!2sbr";  
     

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

