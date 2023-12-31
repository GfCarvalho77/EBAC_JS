$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
    });
$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
})
resetForm();

function resetForm(){
    $('#hotelForm')[0].reset();
}

$('#telefone').mask('(00) 00000-0000');
/*placa de carro -> mask('sss-0000',{
    placeholder: 'ABC-1234})
Data de nascimento-> mask('00/00/000',{
    placeholder: '__/__/___'})
})*/
$('#CPF').mask('000.000.000.00');
$('#CEP').mask('00000-000')
        
$('form').validate({
    rules:{
        nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        telefone:{
            required: true
        },
        veículo_interesse:{
            required: true
        },
        mensagem:{
            required: true,
        },
        CPF:{
            required: true,
        },
       
    },
         messages:{
            nome: 'Por favor informe seu nome'                        
        },
        submitHandler: function(form){
            console.log(form)
            resetForm()
        },
        invalidHandler: function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
                console.log("Elemento que acionou o evento:", evento.target);
            }
        }
})

        $('.lista-suites button').click(function(){
            const destino = $('#contAnimate');

            const TipoAcomodacao = $(this).parent().find('h3').text
            ();
            /*const cliente = "Guilherme Carvalho"*/

            $('#acomodacao').val(TipoAcomodacao);
            /*$('#nome').val(cliente);*/

            $('html').animate({
            scrollTop: 1550/*destino.offset().top*/
            },1000)
        })
}) 
