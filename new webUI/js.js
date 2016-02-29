  var numOfBars = 0;

  function run_pb($element, stepInMs) {
   numOfBars++;
   var total = 100;
   var current = 0;
   var intervalRef = setInterval(function() {
    current += 5;
    //console.log('current = ' + current + ' total = ' + total);
    if (current > total) {
     numOfBars--;
     if (numOfBars == 0) {
      //showResult();
      if (getStatusAndUpdate()) {
       $('#message2').toggleClass('in');
           d3.json('data2.json', createCodeFlower);
      }
      else {
       $('#message1').toggleClass('in');
           d3.json('data2.json', createCodeFlower);
      }
     }
     //remove the hidden class of the given element
     $element.parent().parent().find('.gradeContainer').removeClass('hidden');
     $element.find('span.pb-number').text("");
     clearInterval(intervalRef);
     return; // stay on the safe side...
    }
    $element
    //change the progress bar size
     .find('.progress-bar').width(current + '%')
     //change progress bar text
     .find('span.pb-number').text(current + '%');
   }, stepInMs /*ms*/ );
  }

  /*  function start($element, stepInMs) {
        run_pb($element, stepInMs);
    }
  */


  $(document).ready(function() {
   setNewScroes(getStatusAndUpdate());
   if (getStatusAndUpdate()) {
    run_pb($('#pb1'), 250);
    
    run_pb($('#pb2'), 211);
    run_pb($('#pb3'), 166);
    run_pb($('#pb4'), 275);

    run_pb($('#pb5'), 194);
    run_pb($('#pb6'), 220);
   }
   else {
    run_pb($('#pb1'), 250);

    run_pb($('#pb2'), 211);
    run_pb($('#pb3'), 166);
    run_pb($('#pb4'), 275);
    run_pb($('#pb5'), 194);

    run_pb($('#pb6'), 220);
   }

  });

  function getUrlVars() {
   var vars = {};
   var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(m, key, value) {
     vars[key] = value;
    });
   return vars;
  }


  function getStatusAndUpdate() {
   var allowAccess = getUrlVars()["allowAccess"];
   return allowAccess === "false";
  }

  function setNewScroes(isfaid) {
   var successScors = [0, 97, 46, 92, 95, 87, 52];
   var faildScors = [0, 16, 11, 42, 19, 7, 41];
   var $el = '#grade_pb';
   for (var i = 1; i < 7; i++) {
    var el = $($el + i);
    $("#pb"+ i).children().attr( "aria-valuetransitiongoal" ,i)
    el.text(isfaid === true ? faildScors[i] : successScors[i])
   }
  }