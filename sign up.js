function show_hide_password(target){
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
      target.classList.add('view');
      input.setAttribute('type', 'text');
    } else {
      target.classList.remove('view');
      input.setAttribute('type', 'password');
    }
       return false;
    }

function show_hide_password2(target){
    var input = document.getElementById('password-input2');
    if (input.getAttribute('type') == 'password') {
      target.classList.add('view');
      input.setAttribute('type', 'text');
    } else {
      target.classList.remove('view');
      input.setAttribute('type', 'password');
    }
       return false;
    } 

    $(document).ready(function() {
        $("#rgs-form").submit(function(e) {
        e.preventDefault();
        var email = $('.email').val();
        var name = $('.name').val();
        var number = $('.number').val();
        var password = $('.psw').val();
        var password2 = $('.confirm-password').val();
        $(".error1").remove();
        $(".error2").remove();
        $(".error3").remove();
        $(".error4").remove();
        $(".error5").remove();
        $(".error6").remove();
        if (email.length< 1) {
          $('.email').after('<span class="error1">Это поле обязательно</span>');
        }
        if (name.length< 1) {
          $('.name').after('<span class="error2">Это поле обязательно</span>');
        }
        if (number.length< 1) {
          $('.number').after('<span class="error3">Это поле обязательно</span>');
        } else {
          var regEx = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var validEmail = regEx.test(email);
          if (!validEmail) {
            $('.email').after('<span class="error4">Введите правильный email</span>');
          }
        }
        if (password.length< 8) {
          $('.psw').after('<span class="error5">Пароль должен содержать не менее 8 символов</span>');
        }
        if(password != password2){
            $('.confirm-password').after('<span class="error6">Пароли должны быть одинаковыми</span>');
        }
      });
    });

