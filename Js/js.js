document.onreadystatechange = function(){
     if(document.readyState === 'complete'){
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

            $.getScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js", function() {
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
                $.getScript("https://preview.c9users.io/benoron/benoron/Js/saPower.js", function() {});
            });
 }
};