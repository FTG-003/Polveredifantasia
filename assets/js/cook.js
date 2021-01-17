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
       toastr.info("<p'>Cookies help us deliver our services. By using our services, you agree to our use of cookies. <a href='#' target='_new'>More details</a></p>");
      });