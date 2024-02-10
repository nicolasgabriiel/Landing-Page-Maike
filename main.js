$(document).ready(function () {
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')



    const botao = $('#btn-enviar')

    $('form').on('submit', (e)=>{
        e.preventDefault()
        criarLink()
    })

    let plano = ''
    $('input[name="opcao"]').change(function(){
        plano = $('input[name="opcao"]:checked').val();
       })
    function criarLink(){
        const name = $('#name').val()
        const cpf = $('#cpf').val()
        const cep = $('#cep').val()

        const mensagem = `Meu nome é *${name}*, meu CPF é *${cpf}* e meu CEP é *${cep}*\nGostaria de adquirir o *${plano}*.\nPode me Auxiliar?`
        
         let   link = "https://wa.me/5551982127726?text=" + encodeURIComponent(mensagem)
         window.open(link, "_blank")
        console.log(plano, name, cpf, cep)
    }
})