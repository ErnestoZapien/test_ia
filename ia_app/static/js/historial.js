$(document).ready(function () {
    document.getElementById('container_chats').style.display = 'none';
});

$("#btn_chat").on('click', function () {
    $("#pills-profile").removeClass('show active');
    $("#pills-home").addClass('show active');
    document.getElementById('chat_user_1').style.backgroundColor = '#fff';
    document.getElementById('container_chats').style.display = 'none';
});

function showContent(id, nombre, imagen) {
    $("#pills-home").removeClass('show active');
    $("#pills-profile").addClass('show active');
    $("#txt_name").text(nombre)
    // $("#txt_msg").html().substr(0, 13);
    $("#img_bot").attr('src', imagen);
    $("#img_bot_chat").attr('src', imagen);
}

$("#chat_user_1").on('click', function () {
    document.getElementById('container_chats').style.display = 'block';
    document.getElementById('chat_user_1').style.backgroundColor = '#D1F2EB';
    document.getElementById('chat_user_2').style.backgroundColor = '#fff';
    document.getElementById('chat_user_3').style.backgroundColor = '#fff';
});

$("#chat_user_2").on('click', function () {
    document.getElementById('container_chats').style.display = 'block';
    document.getElementById('chat_user_1').style.backgroundColor = '#fff';
    document.getElementById('chat_user_2').style.backgroundColor = '#D1F2EB';
    document.getElementById('chat_user_3').style.backgroundColor = '#fff';
});

$("#chat_user_3").on('click', function () {
    document.getElementById('container_chats').style.display = 'block';
    document.getElementById('chat_user_1').style.backgroundColor = '#fff';
    document.getElementById('chat_user_2').style.backgroundColor = '#fff';
    document.getElementById('chat_user_3').style.backgroundColor = '#D1F2EB';
});