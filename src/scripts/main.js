// Variáveis globais para controle do cronômetro
var milliseconds = 0; // Milissegundos acumulados
var seconds = 0;      // Segundos acumulados
var minutes = 0;      // Minutos acumulados
var hours = 0;        // Horas acumuladas
var control;          // Identificador do intervalo para controle do cronômetro

// Função para iniciar o cronômetro
function inicio() {
    console.log("Cronômetro iniciado"); // Mensagem de depuração
    control = setInterval(cronometro, 10); // Define a execução de 'cronometro' a cada 10ms

    // Atualiza os botões para refletir o estado atual
    document.getElementById("startBtn").style.display = "none";   // Esconde o botão "Iniciar"
    document.getElementById("pauseBtn").style.display = "inline"; // Mostra o botão "Pausar"
    document.getElementById("resumeBtn").style.display = "none";  // Esconde o botão "Continuar"
    document.getElementById("resetBtn").style.display = "inline"; // Mostra o botão "Resetar"
}

// Função para pausar o cronômetro
function parar() {
    console.log("Cronômetro pausado"); // Mensagem de depuração
    clearInterval(control); // Interrompe o intervalo em execução

    // Atualiza os botões para refletir o estado atual
    document.getElementById("pauseBtn").style.display = "none";   // Esconde o botão "Pausar"
    document.getElementById("resumeBtn").style.display = "inline"; // Mostra o botão "Continuar"
}

// Função para reiniciar o cronômetro
function reinicio() {
    console.log("Cronômetro reiniciado"); // Mensagem de depuração
    clearInterval(control); // Para o cronômetro

    // Reseta as variáveis de tempo
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Atualiza o display com valores zerados
    document.getElementById("milliseconds").innerHTML = "000";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";

    // Atualiza os botões para refletir o estado inicial
    document.getElementById("startBtn").style.display = "inline";  // Mostra o botão "Iniciar"
    document.getElementById("pauseBtn").style.display = "none"; // Esconde o botão "Pausar"
    document.getElementById("resumeBtn").style.display = "none"; // Esconde o botão "Continuar"
    document.getElementById("resetBtn").style.display = "none"; // Esconde o botão "Resetar"
}

// Função principal que controla o comportamento do cronômetro
function cronometro() {
    // Incrementa os milissegundos
    milliseconds += 10;

    // Verifica se os milissegundos ultrapassaram 999 (1 segundo)
    if (milliseconds >= 1000) {
        milliseconds = 0; // Reseta os milissegundos
        seconds++;        // Incrementa os segundos
    }

    // Verifica se os segundos ultrapassaram 59 (1 minuto)
    if (seconds >= 60) {
        seconds = 0;     // Reseta os segundos
        minutes++;       // Incrementa os minutos
    }

    // Verifica se os minutos ultrapassaram 59 (1 hora)
    if (minutes >= 60) {
        minutes = 0;     // Reseta os minutos
        hours++;         // Incrementa as horas
    }

    // Atualiza o display de tempo com os valores formatados

    // Formatação de milissegundos
    document.getElementById("milliseconds").innerHTML = (milliseconds < 100 ? "0" : "") + milliseconds;
    // Formatação de segundos
    document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;
    // Formatação de minutos
    document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
    // Formatação de horas
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
}

// Associar os eventos aos botões
document.getElementById("startBtn").onclick = inicio;    // Iniciar cronômetro
document.getElementById("pauseBtn").onclick = parar;     // Pausar cronômetro
document.getElementById("resumeBtn").onclick = inicio;   // Continuar cronômetro
document.getElementById("resetBtn").onclick = reinicio;  // Resetar cronômetro