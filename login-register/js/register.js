$(document).ready(function () {
    $("#signup-form").submit(function (e) {
      e.preventDefault();
      
      var username = $("input[name='username']").val();
      var email = $("input[name='email']").val();
      var password = $("input[name='password']").val();
      var age=$("input[name='age']").val();
      var number=$("input[name='number']").val();

      $.ajax({
        url: "php/register.php",
        method: "POST",
        data: {
          username: username,
          email: email,
          password: password,
          number:number,
          age:age,
        },
        success: function (data) {
          window.location.href = 'login.html';
          $("#signup-form")[0].reset();
        },
      });
    });
  });