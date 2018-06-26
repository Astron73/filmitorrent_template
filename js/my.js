'use strict'
// $('#enter') замість document.getElementById('')
$(document).ready(function () {
//=========об'єкт для існуючого користувача==================
    $('#enter').on('click', function () {
            var obj = {
                login: $('#login').val()
                , pass: $('#pass').val()
            };
            $.ajax({
                url: 'http://localhost:8080/test2'
                , data: obj
                , method: 'POST'
                , success: function (data) {
                    alert(data);
                }
            })
        })
 //=============об'єкт для нового користувача=====================
    
    
    
    
    
    $('#registrate').on('click', function () {
        var newObj = {
            newLogin: $('#newLogin').val()
            , newPass: $('#newPassword').val()
        };
        $.ajax({
            url: 'http://localhost:8080/newUser'
            , data: newObj
            , method: 'POST'
            , success: function (data) {
                alert(data);
            }
        })
    })
})