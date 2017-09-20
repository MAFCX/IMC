//Realizar calculo IMC
function calcularImcs() {
    var trsPacientes = document.getElementsByClassName("paciente");//Criando um Array de tr

    for (var posiAtual = 0; posiAtual <= trsPacientes.length - 1; posiAtual++) {
        var pacienteTr = trsPacientes[posiAtual];

        var tdNome = pacienteTr.getElementsByClassName("info_nome")[0];
        var tdPeso = pacienteTr.getElementsByClassName("info_peso")[0];
        var tdAltura = pacienteTr.getElementsByClassName("info_altura")[0];
        var tdSituacao = pacienteTr.getElementsByClassName("info_situ")[0];

        var pacienteAtual = {
            nome: tdNome.textContent,
            peso: tdPeso.textContent,
            altura: tdAltura.textContent,
            calcImc: function () {
                if (this.altura >= 0) {
                    var imc = this.peso / (this.altura * this.altura);
                    return imc.toFixed(0);
                } else {
                    alert("Digite uma altura maior que zero!");
                }
            },
            situacao: function () {
                if (pacienteAtual.calcImc() <= 18.5) {
                    return "Abaixo do peso";
                } else if (pacienteAtual.calcImc() >= 18.6 && pacienteAtual.calcImc() <= 24.9) {
                    return "Peso ideal";
                } else if (pacienteAtual.calcImc() >= 25 && pacienteAtual.calcImc() <= 29.9) {
                    return "Levemente acima do peso"
                } else if (pacienteAtual.calcImc() >= 30 && pacienteAtual.calcImc() <= 34.9) {
                    return "Obesidade grau I";
                } else if (pacienteAtual.calcImc() >= 35 && pacienteAtual.calcImc() <= 39.9) {
                    return "Obesidade grau II (severa)";
                } else if (pacienteAtual.calcImc() >= 40) {
                    return "Obesidade III (mórbida)";
                }
            }
        };
        imc = pacienteAtual.calcImc();
        var situ = pacienteAtual.situacao();

        var tdImc = pacienteTr.getElementsByClassName("info_imc")[0];
        tdImc.textContent = imc;
        var tdsitu = pacienteTr.getElementsByClassName("info_situ")[0];
        tdsitu.textContent = situ;
    }

}

//Adicionar novo paciente na tabela
var btnNovoPaciente = document.querySelector("#addPaciente");

btnNovoPaciente.addEventListener("click", function (evento) {
    event.preventDefault();

    var campo_nome = document.querySelector("#campo_nome");
    var campo_peso = document.querySelector("#campo_peso");
    var campo_altura = document.querySelector("#campo_altura");

    var pacienteNovo = "<tr class='paciente'>" +
        "<td class='info_nome'>" + campo_nome.value + "</td>" +
        "<td class='info_peso'>" + campo_peso.value + "</td>" +
        "<td class='info_altura'>" + campo_altura.value + "</td>" +
        "<td class='info_imc'></td>" +
        "<td class='info_situ'></td>" +
        "</tr>";

    if (campo_nome.value == "" || campo_peso.value == "" || campo_altura.value == "") {
        alert("Favor, preencha todos os campos para realizar o calculo!");
    } else {

        var tabela = document.querySelector("table");
        tabela.innerHTML += pacienteNovo;

        campo_nome.value = "";
        campo_peso.value = "";
        campo_altura.value = "";
    }
})

function remPaciente() {
    var elemento = document.querySelectorAll('tr');
    var ultimo = elemento[elemento.length - 1];
    var quant = elemento.length;

    if (quant === 1) {
        alert("Tabela Vazia!");
        return;
    } else {
        ultimo.parentNode.removeChild(ultimo);
    }
}