$(document).ready(function () {
    $('.back').on('click', function () {
        var logare = document.getElementById('logare');
        if (!logare.classList.contains('animate__bounceInDown')) {
            logare.classList.remove('animate__bounceInDown');
        }
        if (!logare.classList.contains('animate__bounceOutUp')) {
            logare.classList.add('animate__bounceOutUp');
        }
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 550);
    });
});

(function ($) {
    "use strict";


     /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        var logged = document.getElementById('logare');

        $(thisAlert).addClass('alert-validate');
        $(logged).removeClass('animate__bounceInDown');
        $(logged).addClass('animate__shakeX');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        var logged = document.getElementById('logare');

        $(thisAlert).removeClass('alert-validate');
        $(logged).removeClass('animate__shakeX');

    }

})(jQuery);