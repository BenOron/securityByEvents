var firsload = true;
window.allowAccess = false;

Lobibox.notify("warning", {
 delay: 15000,
 msg: "SaPower is watching you !! ",
 showClass: '.wobble', // Show animation class
 hideClass: 'zoomOut', // Hide animation class
 position: 'top right' //AVAILABLE OPTIONS: 'top left', 'top right', 'bottom left', 'bottom right'
});
function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}

function addStyleString(str) {
  var node = document.createElement('style');
  node.innerHTML = str;
  document.body.appendChild(node);
 }

addStyleString('.lobibox-backdrop{background:rgba(15, 16, 16, 0.81)}');



function logMouseMove(e) {
 var evt = e.type;
 while (evt.length < 11)
  evt += ' ';
 console.log(e);
 var from = e.relatedTarget ? e.relatedTarget : e.fromElement;
 var to = e.target ? e.target : e.toElement;

 //console.log("from:" + from + ", to:" + to);
 var textElm = document.getElementById("textElm");
 if (textElm) {
  textElm.textContent = objToString(e).substring(0, 300);
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
   var pre = '  <div class="navbar navbar-default navbar-fixed-bottom" style="min-height: 40px;background-color: lightblue;"> <img alt="Brand" src="http://toyourheartscontent.co.uk/wp-content/uploads/2014/11/Auge.gif"  width="100px" style="position: absolute;margin-left: 13%;margin-top: 39px;">';
   var $container = '<div id="sapPowerContainer"class="sapPowerContainer container"> ';
   var BtnShow = '<button id="loadIframe" onclick="loadIframe()" type="button" style="display:none"class="btn btn-info btn-sm">Small Info Button</button>'
   var p = '<div id="textElm" class="h5 text-muted" style=" color: #111010; font-size: 24px; font-style: italic;"></div>';

   $("body").append(pre);
   $(".navbar-fixed-bottom").append($container);
   $(".sapPowerContainer").append(p, BtnShow);
  }


  firsload = false;
 }
};






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


function loadIframe1() {
 if( $('.lobibox-prompt').length >0 ){
  $('.lobibox-prompt').data('lobibox').destroy();
}
 var message = "";
 Lobibox.prompt('text', {
 sound: false, 
  title: "Security Alert",
  draggable   : true,
  modal: true,
  size: 'large',
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
if( $('.lobibox-error').length >0){
  $('.lobibox-error').data('lobibox').destroy();
}
Lobibox.alert("error", //AVAILABLE TYPES: "error", "info", "success", "warning"
  {
   sound: false, 
   draggable   : true,
   size: 'large',
   closeButton: false,
   closeOnEsc: false,
   title: "Security Alert !!!!",
   msg: "Your authentication failed.You now need to be authenticated by face recognition.",
   buttons: {
    custom: {
     'class': 'btn btn-warning',
     text: ' Start recognition'
    }
   },
   callback: function(lobibox, type) {
    appendSpinner();
    loadFaceRec();
   }
  });
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
 var url;
 if (window.allowAccess === true) {
  url = "https://preview.c9users.io/benoron/securitybyevents/face/lib/BRF_NXT_JS_EXAMPLES/bin/index.html?allowAccess=" + window.allowAccess;
  }
 else {
  url = "https://preview.c9users.io/benoron/securitybyevents/face/lib/BRF_NXT_JS_EXAMPLES/bin/index.html?allowAccess=" + window.allowAccess;
 }
 PopupCenter(url, "640", "480");
}


function successAlert() {
 if( $('.lobibox-notify').length >0){
  $('.lobibox-notify').data('lobibox').destroy();
}
 Lobibox.notify("success", {
  position: "top right",
  msg: getSuccessText()
 });
}

function failedAlert() {
  if( $('.lobibox-notify').length >0){
  $('.lobibox-notify').data('lobibox').destroy();
}
 Lobibox.notify("error", {
  position: "top right",
  msg: getFailedText()
 });
}


function appendSpinner() {
 if($("#spinnerBtn").length>0){
  $("#spinnerBtn").remove();
 }
 var target = $('.lobibox-body-text-wrapper');
 target.append('<p id="spinnerBtn" style="padding-left: 36%;"><img src="http://www.vogue.fr/images/ajax-loader.gif" height="30px" width="30px"></p>');
}

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

/* if (evtobj.keyCode == 81 && evtobj.ctrlKey) {
  console.log("You pressed CTRL + Q");
  //$("#spinnerBtn").remove();
 
 }
*/
 if (evtobj.keyCode == 90 && evtobj.ctrlKey) {
  console.log("You pressed CTRL + Z");
  $("#spinnerBtn").children()[0].width = 0;
  if(window.allowAccess === true){
    $('.lobibox-error').data('lobibox').hide();
  successAlert();
  }else{
    failedAlert();
  }
 
 }
}
document.onkeydown = KeyPress;
//'<label for="questionsmodal" class="control-label">What is the name of your first pat? </label> <input type="text" class="form-control input-5" id="questionsmodal"> ';