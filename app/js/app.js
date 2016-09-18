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
        data:obj,
        methods:{
          logs: function(a,b){
            var sort = {
              backlog:0,
              review:1,
              "in progress":2,
              waiting:3
            }
             return sort[b.status] - sort[a.status];
          }
        }
    });
    appReady();
  }

  //fade in appl when ready
  function appReady() {
    var app = document.getElementById('body');
    app.style.opacity="1";
  }


  // Kick Off Application
  init();

})();
