//import $ from "https://cdn.skypack.dev/jquery@3.6.1";
$('#menu > div').on('click', function(){
    $('#conteudo > div').removeClass('visivel');
    $('#conteudo > div.' + this.id).addClass('visivel');
});
