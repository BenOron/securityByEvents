document.onreadystatechange = function() {
 var cssEs = 0;
 var scriptEs = 0; 
 if (document.readyState === 'complete') {
  
  if (!document.getElementById('lobiboxCss')) {
   var head = document.getElementsByTagName('head')[0];
   var link = document.createElement('link');
   link.id = 'lobiboxCss';
   link.rel = 'stylesheet';
   link.type = 'text/css';
   link.href = 'https://preview.c9users.io/benoron/securitybyevents/style/css/lobibox.min.css';
   link.media = 'all';
   head.appendChild(link);
   cssEs++
   //console.log(link.id + "-loaded" + "-number-" + cssEs++);
   
  }
  
  if (!document.getElementById('bootstrapCss')) {
   var head = document.getElementsByTagName('head')[0];
   var link = document.createElement('link');
   link.id = 'bootstrapCss';
   link.rel = 'stylesheet';
   link.type = 'text/css';
   link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
   link.media = 'all';
   head.appendChild(link);
   cssEs++
  //console.log(link.id + "-loaded" + "-number-" + cssEs++);
  }
  
  if (!document.getElementById('toastrCss')) {
   var head = document.getElementsByTagName('head')[0];
   var link = document.createElement('link');
   link.id = 'toastrCss';
   link.rel = 'stylesheet';
   link.type = 'text/css';
   link.href = '//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.css';
   link.media = 'all';
   head.appendChild(link);
   cssEs++
  //console.log(link.id + "-loaded" + "-number-" + cssEs++);
  }
  
  if(cssEs === 3){
     console.log("saPower " + cssEs + " Css loaded");
  }
  //inject scripts
  
  if (!document.getElementById("jquryScript")) {
   var script = document.createElement("script");
   script.id = "jquryScript",
   script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
   script.type = 'text/javascript';
   document.getElementsByTagName("head")[0].appendChild(script);
   scriptEs++
   // console.log(script.id + "-loaded" + "-number-" + scriptEs++ );
  }
  if (!document.getElementById("bootstrapScript")) {
   var script = document.createElement("script");
   script.id = "bootstrapScript",
   script.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js';
   script.type = 'text/javascript';
   document.getElementsByTagName("head")[0].appendChild(script);
   scriptEs++
  //console.log(script.id + "-loaded" + "-number-" + scriptEs++ );
   
  }
  
  if (!document.getElementById("toastrScript")) {
   var script = document.createElement("script");
   script.id = "toastrScript",
   script.src = '//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.js';
   script.type = 'text/javascript';
   document.getElementsByTagName("head")[0].appendChild(script);
   scriptEs++
  //console.log(script.id + "-loaded" + "-number-" + scriptEs++ );
  }
  
  if (!document.getElementById("bootstrap-dialogScript")) {
   var script = document.createElement("script");
   script.id = "toastrScrpit",
   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.9/js/bootstrap-dialog.min.js';
   script.type = 'text/javascript';
   document.getElementsByTagName("head")[0].appendChild(script);
   scriptEs++
   //console.log(script.id + "-loaded" + "-number-" + scriptEs++ );
  }
  
  if (!document.getElementById("lobiboxScript")) {
   var script = document.createElement("script");
   script.id = "lobiboxScript",
   script.src = 'https://preview.c9users.io/benoron/securitybyevents/Js/lobibox.min.js';
   script.type = 'text/javascript';
   document.getElementsByTagName("head")[0].appendChild(script);
   scriptEs++
   //console.log(script.id + "-loaded" + "-number-" + scriptEs++ );
  }
  
   if (!document.getElementById("saPowerScript")) {
   var script = document.createElement("script");
   script.id = "saPowerScript",
   script.src = 'https://preview.c9users.io/benoron/securitybyevents/Js/saPower.js';
   script.type = 'text/javascript';
   document.getElementsByTagName("head")[0].appendChild(script);
   scriptEs++
   //console.log(script.id + "-loaded" + "-number-" + scriptEs++ );
  }
  
  if(scriptEs === 6){
     console.log("saPower " + scriptEs + " Scripts loaded !!");
  }
  
  
   if (!document.getElementById("canvasScript")) {
   var script = document.createElement("script");
   script.id = "canvasScript",
   script.src = 'https://preview.c9users.io/benoron/securitybyevents/Js/heatmap.js';
   script.type = 'text/javascript';
   document.getElementsByTagName("head")[0].appendChild(script);
   scriptEs++
   //console.log(script.id + "-loaded" + "-number-" + scriptEs++ );
  }
  
  $(document.body).append('<script type="text/javascript"> window._pt_lt = new Date().getTime();  window._pt_sp_2 = [];  _pt_sp_2.push("setAccount,46f97731");  var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");  (function() {    var atag = document.createElement("script"); atag.type = "text/javascript"; atag.async = true; atag.src = _protocol + "cjs.ptengine.com/pta_en.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(atag, s);})();</script>');
  }};

