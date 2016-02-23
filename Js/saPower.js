var firsload = true;
window.allowAccess = false;

Lobibox.notify("info", {
 delay: 15000,
 msg: "SaPower watching you !! ",
 showClass: '.wobble', // Show animation class
 hideClass: 'zoomOut', // Hide animation class
 position: 'top right' //AVAILABLE OPTIONS: 'top left', 'top right', 'bottom left', 'bottom right'
});


function logMouseMove(e) {
 var evt = e.type;
 while (evt.length < 11)
  evt += ' ';
 console.log(e);
 var from = e.relatedTarget ? e.relatedTarget : e.fromElement;
 var to = e.target ? e.target : e.toElement;

 console.log("from:" + from + ", to:" + to);
 var textElm = document.getElementById("textElm");
 if (textElm) {
  textElm.textContent = "User hover on: " + getMouseoverDet(e).substring(0, 300);
 }

 console.log(window.allowAccess);


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


function firstload() {
 if (firsload === true) {
  if ($(".messageElm").length < 1) {
   var pre = '  <div class="navbar navbar-default navbar-fixed-bottom" style="min-height: 40px;background-color: lightblue;">';
   var $container = '<div id="sapPowerContainer"class="sapPowerContainer container">';
   var BtnShow = '<button id="loadIframe" onclick="loadIframe()" type="button" style="display:none"class="btn btn-info btn-sm">Small Info Button</button>'
   var p = '<div id="textElm" class="h5 text-muted"></div>';

   $("body").append(pre);
   $(".navbar-fixed-bottom").append($container);
   $(".sapPowerContainer").append(p, BtnShow);
  }


  firsload = false;
 }
};


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
  window.allowAccess = true;
  console.log("You pressed CTRL + V");
 }

 if (evtobj.keyCode == 66 && evtobj.ctrlKey) {
  window.allowAccess = false;
  console.log("You pressed CTRL + B");
 }
}
document.onkeydown = KeyPress;



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
 var message = "";
 Lobibox.prompt('text', {

  title: "Security Alert",
  //Attributes of <input>
  modal: true,
  size: 'large',
closeButton: false,
   closeOnEsc: false,
   label: 'What is the name of your first pet?',
  attrs: {
   placeholder: "Answer",
  },

  buttons: {
   ok: {
    'class': 'btn btn-info',
    closeOnClick: false
   }
  },

  callback: function(lobibox, type) {
   var btnType;
   if (type === 'ok') {
    if (lobibox.getValue().toLowerCase() === "linus") {
     btnType = 'success';
     message = getSuccessText();
     lobibox.hide();
    }
    else {
     btnType = 'error';
     message = getFailedText();
    }

   }
   Lobibox.notify(btnType, {
    size: 'mini',
    msg: capitalise(btnType) + " " + message,
    delay: 3000,
    showClass: 'wobble'
   });
  }
 });
}

function capitalise(string) {
 return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/*function closeModel(e) {
 $("#basicModal").remove();
}*/

/*function onOk(e) {
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
*/
/*function identifiedSuccess() {
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
*/
/*function identifiedFailed() {
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
*/

function getFailedText() {
 return "Authentication Failed!!!, Please Try again."
}

function getSuccessText() {
 return "Authentication Succeeded !!!, Thanks."
}


function videoPopupAutRequest() {
 Lobibox.alert("error", //AVAILABLE TYPES: "error", "info", "success", "warning"
  {
   msg: "Lorem ipsum dolor sit amet byron frown tumult minstrel wicked clouded bows columbine full"
  });
}


function loadIframe2() {
 /*function addStyleString(str) {
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
 $("body").append(d3e2);*/
 var faceRecognition = Lobibox.alert("error", //AVAILABLE TYPES: "error", "info", "success", "warning"
  {
   size: 'large',
   closeButton: false,
   closeOnEsc: false,
   title: "Security Alert !!!!",
   msg: "Your authentication failed.You now need to be authenticated by face recognition.",
   buttons: {
    custom: {
     'class': 'btn btn-warning',
     text: 'Start recognition'
    }
   },
   callback: function(lobibox, type) {
    loadFaceRec();
   }
  });
}



function closeModel(e) {
 $("#basicModal").remove();
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


function loadFaceRecognition() {

 Lobibox.window({
  url: "https://preview.c9users.io/benoron/securitybyevents/face/lib/BRF_NXT_JS_EXAMPLES/bin/index.html",
  autoload: true, // Auto load from given url when window is created
  loadMethod: 'GET', // Ajax method to load content
  showAfterLoad: true,
 });
}


function loadFaceRec() {
 var lobibox = $('.lobibox-error').data('lobibox');

 var url;
 if (window.allowAccess === true) {
  url = "https://preview.c9users.io/benoron/securitybyevents/face/lib/BRF_NXT_JS_EXAMPLES/bin/index.html?allowAccess=" + window.allowAccess;
  setTimeout(function() {
   lobibox.hide();
   successAlert();
  }, 13000);

 }
 else {
  url = "https://preview.c9users.io/benoron/securitybyevents/face/lib/BRF_NXT_JS_EXAMPLES/bin/index.html?allowAccess=" + window.allowAccess;
  setTimeout(function() {
    failedAlert();
  }, 13000);
 
 }

 function successAlert() {
  Lobibox.notify("success", {
    position:"top right",
  // size: 'large',
   //delay: 1000,
   msg: getSuccessText()
  });
 }

 function failedAlert() {
  Lobibox.notify("error", {
   position:"top right",
  // size: 'large',
    //  delay: 1000,
   msg: getFailedText()
  });
 }





 PopupCenter(url, "640", "480");
}



function closeModel1(e) {
 $("#basicModal1").remove();
}


function onOk1(e) {

}



//'<label for="questionsmodal" class="control-label">What is the name of your first pat? </label> <input type="text" class="form-control input-5" id="questionsmodal"> ';