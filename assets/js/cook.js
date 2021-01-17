$(function() {
          toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": false,
          "progressBar": true,
          "positionClass": "toast-bottom-right",
          "preventDuplicates": false,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
          }
       toastr.info("<p'>I cookie ci aiutano a migliorare i nostri servizi. Continuando la visualizzzione, si accetta il loro utilizzo.<a href='./policy.html' target='_new'>More details</a></p>");
      });