var ip = document.getElementById("ip");


$(function() {
     $.getJSON("http://ip-api.com/json/?fields=message,continent,country,region,regionName,city,isp,org,query",
        function(dados) {
             $.each(dados,function(p,s,){
               
               $("h3").append("<td> " +s+ " </td>");
                //$("h4").append("<tr><td>"+p+"</td><td>"+s+"</td></tr>");
                // const fator = ["h3"]
                // const iptopo =fator.filter((value) = {
                   

                // })


          });

     });
            

})

document.getElementById("submit").addEventListener("click", buscarip);
function buscarip(){
     $.getJSON("http://ip-api.com/json/{query}?fields=message,continent,country,region,regionName,city,isp,org,query",
          function(dados2){
               $.each(dados2,function(r,a){
                $("h4").append("<tr><td>"+r+"</td><td>"+a+"</td></tr>");
          });

     });

     

}


//$.getJSON("http://ip-api.com/json/?fields=status,message,continent,country,region,regionName,city,isp,org,query",
