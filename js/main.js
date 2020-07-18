$(function(){
    $(".barra-progresso").hide();
    $(".tabela-cep").hide();
})

function consultaCep() {
    $(".barra-progresso").show();
    $(".tabela-cep").hide();

    setTimeout(function(){
        var cep = document.getElementById("cep").value;
        cep = cep.replace("-","");
        //var url = "http://viacep.com.br/ws/{cep}/json".replace("{cep}", cep);
        var url = `http://viacep.com.br/ws/${cep}/json`
        
        $.ajax({
            url: url, 
            type: "GET", 
            success: function(response) {
                console.log(response);

                $("#titulo_cep").html("CEP " + response.cep);
                $("#logradouro").html(response.logradouro);
                $("#bairro").html(response.bairro);
                $("#localidade").html(response.localidade);
                $("#uf").html(response.uf);
                $(".tabela-cep").show();
                $(".barra-progresso").hide();

                document.getElementById("logradouro1").innerHTML = response.logradouro;
                document.getElementById("bairro1").innerHTML = response.bairro;
                document.getElementById("localidade1").innerHTML = response.localidade;
                document.getElementById("uf1").innerHTML = response.uf;

                $("#logradouro2").html(response.logradouro);
                $("#bairro2").html(response.bairro);
                $("#localidade2").html(response.localidade);
                $("#uf2").html(response.uf);

            }
        })
    }, 1000);
}