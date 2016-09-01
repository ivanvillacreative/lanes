(function(){

  function ajax(url){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
        logData(data);
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

  function logData(data){
    console.log(data);
  }

  ajax("/data/mockData.json");

})();
