(function(){

  //Init Function
  function init() {
    ajax("/data/mockData.json", build);
  }

  //Grab data from API
  function ajax(url, callback){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
        callback(data);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

  //Build app once data is ready
  function build(obj){
    var lanes = new Vue({
        el: '#lanes',
        data:obj
    });
  }



  // Kick Off Application
  init();

})();
