$(document).ready(() => {
    $('#form').on('submit', (e) => {
        e.preventDefault()
    })

    $('#telefone').mask('(00) 00000-0000', {placeholder: '(DD) 00000-0000'})

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                rangelength: [14, 15]
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Insira seu nome.',
            email: 'Insira seu email (exemplo@mail.com).',
            telefone: 'Insira seu telefone ((DD) 00000-0000).',
            mensagem: 'Insira sua mensagem.'
        },
        submitHandler: (form) => {
            form.submit()

            $('#nome').val('')
            $('#email').val('')
            $('#telefone').val('')
            $('#mensagem').val('')
        }
    })
})