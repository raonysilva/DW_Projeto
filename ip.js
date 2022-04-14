
$(function() {
     $.getJSON("http://ip-api.com/json/?fields=message,continent,country,region,regionName,city,isp,org,query",
        function(dados) {
             $.each(dados,function(p,s,){
               
               $("h3").append("<td>&nbsp" +s+ " &nbsp</td>");
               //$("h4").append(ips.value);
               


          });

     });
  
     

})

function buscarip() {
     
     $.getJSON("http://ip-api.com/json/"+document.getElementById("nome").value+"?lang=pt-BR&fields=message,continent,country,region,regionName,city,isp,org,lat,lon,query",
        function(dados2) {
             $.each(dados2,function(r,a,){
               
               $(document.getElementById("saida")).append("<tr><td>"+r+"</td><td>"+a+"</td></tr>");
               


          });

     });
     
     

}



//$.getJSON("http://ip-api.com/json/?fields=status,message,continent,country,region,regionName,city,isp,org,query",
