var firsload = true;
if (!window.jQuery) {
 var script = document.createElement("SCRIPT");
 script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
 script.type = 'text/javascript';
 document.getElementsByTagName("head")[0].appendChild(script);

}
loadFiles();

// Load the script
function logMouseMove(e) {
 if (!window.jQuery) {
  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName("head")[0].appendChild(script);

 }
 var evt = e.type;
 while (evt.length < 11)
  evt += ' ';
 console.log(e);
 var from = e.relatedTarget ? e.relatedTarget : e.fromElement;
 var to = e.target ? e.target : e.toElement;

 console.log("from:" + from + ", to:" + to);
 //$("#textElm").text(e.timeStamp + " - " + e.type + ":Collecting Data...");
 var textElm = document.getElementById("textElm");
 textElm.textContent = "User hover on: " + getMouseoverDet(e).substring(0, 300);
 console.log(window.video);


 return false;
}

+
$(document).mousedown(function(event) {
 logMouseMove(event);
});

$(document).mousedown(function(event) {
 logMouseMove(event);
});

$(document).mouseleave(function(event) {
 logMouseMove(event);
});

$(document).mouseout(function(event) {
 logMouseMove(event);
});

$(document).mousemove(function(event) {
 firstload();
 //logMouseMove(event);

});

$(document).mouseover(function(event) {
 logMouseMove(event);
});

$(document).mouseup(function(event) {
 logMouseMove(event);
});

$(document).contextmenu(function(event) {
 logMouseMove(event);
});

$(document).mouseenter(function(event) {
 logMouseMove(event);
});

/*$(document).ready(function() {
   firstload()*/
/*var $textElm = '<div class="textElm" id="textDip"></div>';
var $messageElm = '<div class="messageElm" width="100%" backgroundcolor="black" style="height:23px;background-color: rgba(10, 10, 10, 0.93);border-radius: 3px; color: rgb(239, 239, 239); text-indent:20px; position:absolute;top: 96%;min-width: 100%;z-index: 999999999999999999999999999;">';
$("body").append($messageElm);
$(".messageElm").append($textElm);
}) */

//height: 23px;border-radius: 3px;color: rgb(239, 239, 239); text-indent: 20px; position: absolute;top: 1649px;min-width: 99%; z-index: 2147483647;background-color: ;
/*})*/

function resizeElementHeight() {
 /* var element = $(".messageElm");
  var height = 0;
  var body = window.document.body;
  if (window.innerHeight) {
   height = window.innerHeight;
  }
  else if (body.parentElement.clientHeight) {
   height = body.parentElement.clientHeight;
  }
  else if (body && body.clientHeight) {
   height = body.clientHeight;
  }
  var afterMove = window.innerHeight + window.scrollY - 26;
  element[0].style.top = (afterMove + "px");*/
}

function firstload() {
 if (firsload === true) {
  // $('<script>$(document).on("keydown",function(o){!o.ctrlKey||"c"!==String.fromCharCode(o.which)&&"C"!==String.fromCharCode(o.which)||console.log("You pressed CTRL + C");window.video="true";});</' + 'script>').appendTo(document.body);
  if ($(".messageElm").length < 1) {
   var pre = '  <div class="navbar navbar-default navbar-fixed-bottom" style="min-height: 40px;background-color: lightblue;">';
   var $container = '<div id="sapPowerContainer"class="sapPowerContainer container">';
   /*var $alert = '<div id="sapPowerAlert" class="sapPowerAlert alert alert-info>';
   var $messageElm = '<strong>Success!</strong> This alert box could indicate a successful or positive action.';*/
   var BtnShow = '<button id="loadIframe" onclick="loadIframe()" type="button" style="display:none"class="btn btn-info btn-sm">Small Info Button</button>'
   var p = '<div id="textElm" class="h5 text-muted"></div>';
   /*var $textElm = '<div class="textElm" id="textDip"></div>';
   var $messageElm = '<div class="messageElm" width="100%" backgroundcolor="black" style="height:23px;background-color: rgba(10, 10, 10, 0.93);border-radius: 3px; color: rgb(239, 239, 239); text-indent:20px; position:absolute;top: 96%;min-width: 100%;z-index: 999999999999999999999999999;">';
   */
   $("body").append(pre);
   $(".navbar-fixed-bottom").append($container);
   $(".sapPowerContainer").append(p, BtnShow);

   $.getScript("https://preview.c9users.io/benoron/benoron/Js/radialIndicator.js", function() {
    $('#indicatorContainer').radialIndicator({
     barColor: '#87CEEB',
     barWidth: 10,
     initValue: 40,
     roundCorner: true,
     percentage: true
    });
   });



   //$(".sapPowerAlert").append($messageElm);
  }
  firsload = false;
 }



};

/*function loadFiles() {
    var cssId = 'myCss'; // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId)) {
     var head = document.getElementsByTagName('head')[0];
     var link = document.createElement('link');
     link.id = cssId;
     link.rel = 'stylesheet';
     link.type = 'text/css';
     link.href = 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
     link.media = 'all';
     head.appendChild(link);
    }

    $.getScript("http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js", function() {
     console.log("bootstrap.min.js");
    });


   }
*/
//==================================================
//https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?utm_source=chrome-app-launcher-info-dialog 

/*

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.css';
    link.media = 'all';
    head.appendChild(link);
}
$.getScript("//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.js", function(){
Command: toastr["info"]("saPower watching you .. ")
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
});

 $.getScript("http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js", function() {
      var cssId = 'mybootstrapCss'; // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId)) {
     var head = document.getElementsByTagName('head')[0];
     var link = document.createElement('link');
     link.id = cssId;
     link.rel = 'stylesheet';
     link.type = 'text/css';
     link.href = 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
     link.media = 'all';
     head.appendChild(link);
    }
      $.getScript("https://preview.c9users.io/benoron/benoron/Js/saPower.js", function(){
});
    });

*/
function loadFiles() {
 var cssId = 'myCss'; // you could encode the css path itself to generate id..
 if (!document.getElementById(cssId)) {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.id = cssId;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.css';
  link.media = 'all';
  head.appendChild(link);
 }
 $.getScript("//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.js", function() {
  Command: toastr["info"]("saPower watching you .. ")

toastr.options = {
  "closeButton": false,
  "debug": true,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
 });

 $.getScript("https://preview.c9users.io/benoron/benoron/Js/bootstrap.min.js", function() {
  var cssId = 'mybootstrapCss'; // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId)) {
   var head = document.getElementsByTagName('head')[0];
   var link = document.createElement('link');
   link.id = cssId;
   link.rel = 'stylesheet';
   link.type = 'text/css';
   link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
   link.media = 'all';
   head.appendChild(link);
  }

  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.9/js/bootstrap-dialog.min.js", function() {});
  /* $.getScript("http://bootboxjs.com/v2.x/bootbox.min.js", function(){
});*/
 });

 //a for load first q, b for the 2nd q, t for secuess recoginze, f for failed recognize; 

 function KeyPress(e) {
  var evtobj = window.event ? event : e

  if (evtobj.keyCode == 88 && evtobj.ctrlKey) {
   $("#loadIframe").trigger("click");
   console.log("You pressed CTRL + X first question");
  }

  if (evtobj.keyCode == 67 && evtobj.ctrlKey) {
  loadIframe2();
   console.log("You pressed CTRL + C");
  }

  if (evtobj.keyCode == 86 && evtobj.ctrlKey) {
   window.video = true;
   console.log("You pressed CTRL + V");
  }

  if (evtobj.keyCode == 66 && evtobj.ctrlKey) {
   window.video = false;
   console.log("You pressed CTRL + B");
  }
 }

 document.onkeydown = KeyPress;

}

function getMouseoverDet(e) {
 var hoverElement = e.target.innerText.length > 0 ? e.target.innerText : e.target.currentSrc !== undefined ? e.target.currentSrc : e.target.href !== undefined ? e.target.href : e.target.innerHTML;
 hoverElement.length < 1 ? hoverElement = e.target.id : "";
 return hoverElement;
}

function loadIframe() {
 var BtnShow = '<button id="hiddenBtn" onclick="loadIframe1()" type="button" class="btn btn-info btn-sm">Small Info Button</button>'
 $("body").append(BtnShow);
 $("#hiddenBtn").trigger("click");


}


function videoBtn() {
 var videoBtn = '<button id="videoBtnhidden" onclick="loadFaceRec()" type="button" class="btn btn-info btn-sm">Small Info Button</button>'
 $("body").append(videoBtn);
 $("#videoBtnhidden").trigger("click");
}


function loadIframe1() {
 d3e2body = '';

 function addStyleString(str) {
  var node = document.createElement('style');
  node.innerHTML = str;
  document.body.appendChild(node);
 }

 addStyleString('.modal .modal-content,  .modal .modal-footer{ padding: 0.3% !important };');
 addStyleString('.modal .modal-footer {background:rgba(173, 216, 230, 0.24)}');
 addStyleString('.modal-header {padding: 0;}');
 addStyleString('.modal {padding: 0;}');
 addStyleString('.alert {padding: 7px;}');
 addStyleString('.form-inline {margin: 10px;}');

 var title = 'Security Alert';
 var body = '<form class="form-inline" role="form"><div class="form-group"> <label for="questionsmodal">What is the name of your first pet?</label>  <input class="form-control" id="questionsmodal" placeholder="Enter Answer"> </div> </form>'
 d3el = '<div class="modal fade" id="basicModal" style="opacity:1; display: block; max-width: 100%; background-color: rgba(0, 0, 0, 0.73)"   tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true"> <div class="modal-dialog" style="margin-top: 15%;"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button> <h4 class="modal-title alert alert-warning" id="myModalLabel">' + title + '</h4> </div>' + body + '<div class="modal-footer" > <button type="button" onclick="onOk(this)" class="btn btn-primary">Ok</button> </div></div></div></div>';
 $("body").append(d3el);


}


function closeModel(e) {
 $("#basicModal").remove();
}

function onOk(e) {
 var dogname = "star";
 if ($("#questionsmodal").val().toLowerCase() === dogname) {
  closeModel();
  identifiedSuccess();
 }
 else {
  identifiedFailed();
  closeModel();
  loadIframe2();
 }

}

function identifiedSuccess() {
 Command: toastr["success"]("Authentication Succeeded !!!, Thanks. ")
 toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
 }
}

function identifiedFailed() {
 Command: toastr["error"]("Authentication Failed!!!, Please Try again.")
 toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
 }
}



function loadIframe2() {
  function addStyleString(str) {
  var node = document.createElement('style');
  node.innerHTML = str;
  document.body.appendChild(node);
 }

 addStyleString('.modal .modal-content,  .modal .modal-footer{ padding: 0.3% !important };');
 addStyleString('.modal .modal-footer {background:rgba(173, 216, 230, 0.24)}');
 addStyleString('.modal-header {padding: 0;}');
 addStyleString('.modal {padding: 0;}');
 addStyleString('.alert {padding: 7px;}');
 addStyleString('.form-inline {margin: 10px;}');
 
 var title = 'Security Alert !!!!';
 var body = '<h6>Your authentication failed.</h6><h6>You now need to be authenticated by face recognition.</h6><button type="button" class="btn  center-block btn-warning glyphicon glyphicon-facetime-video" onclick="videoBtn()">Warning</button>'
 d3e2 = '<div class="modal fade" id="basicModal1" style="opacity:1; display: block; max-width: 100%; background-color: rgba(0, 0, 0, 0.73)"   tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true"> <div class="modal-dialog" style="margin-top: 15%;"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close disabled" data-dismiss="modal" aria-hidden="true"></button> <h4 class="modal-title alert alert-danger" id="myModalLabe2">' + title + '</h4> </div>' + body + '<div class="modal-footer" ><button type="button" onclick="onOk1(this)" class="btn btn-primary">Ok</button> </div></div></div></div>';
 $("body").append(d3e2);
}



function closeModel(e) {
 $("#basicModal").remove();
}

function onOk(e) {
 var dogname = "linus";
 if ($("#questionsmodal").val().toLowerCase() === dogname) {
  closeModel();
  identifiedSuccess();
 }
 else {
  identifiedFailed();
  closeModel();
  loadIframe2();
 }

}

function PopupCenter(url, w, h) {
 // Fixes dual-screen position                         Most browsers      Firefox
 var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
 var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

 var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
 var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

 var left = ((width / 2) - (w / 2)) + dualScreenLeft;
 var top = ((height / 2) - (h / 2)) + dualScreenTop;
 window.first = "1";
 var newWindow = window.open(url, "sapPower", 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

 // Puts focus on the newWindow
 if (window.focus) {
  newWindow.focus();
 }

 window.videoScreen = newWindow;
}

function loadFaceRec() {
 var url = "https://preview.c9users.io/benoron/benoron/face/lib/BRF_NXT_JS_EXAMPLES/bin/index.html";
 if (window.video === true) {
  setTimeout(function() {
   closeModel1();
   identifiedSuccess();
  }, 13000);

 }
 else {
  setTimeout(function() {
   identifiedFailed();
  }, 13000);


 }


 var url = "https://preview.c9users.io/benoron/benoron/face/lib/BRF_NXT_JS_EXAMPLES/bin/index.html";

 PopupCenter(url, "640", "480");
}



function closeModel1(e) {
 $("#basicModal1").remove();
}


function onOk1(e) {

}




//'<label for="questionsmodal" class="control-label">What is the name of your first pat? </label> <input type="text" class="form-control input-5" id="questionsmodal"> ';