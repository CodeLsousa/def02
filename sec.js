function calcularRank(vitorias, derrotas) {
    return vitorias - derrotas;
}

function exibirMensagem(rank, vitorias, derrotas) {
    switch (true) {
        case rank <= 10:
            console.log("Você tem " + vitorias + " Vitórias, " + derrotas + " Derrotas! Você é Ferro!");
            break;

        case rank >= 11 && rank <= 20:
            console.log("Você tem " + vitorias + " Vitórias, " + derrotas + " Derrotas! Você é Bronze!");
            break;

        case rank >= 21 && rank <= 50:
            console.log("Você tem " + vitorias + " Vitórias, " + derrotas + " Derrotas! Você é Prata!");
            break;

        case rank >= 51 && rank <= 80:
            console.log("Você tem " + vitorias + " Vitórias, " + derrotas + " Derrotas! Seu rank é Ouro!");
            break;

        case rank >= 81 && rank <= 90:
            console.log("Você tem " + vitorias + " Vitórias, " + derrotas + " Derrotas! Você é Diamante!");
            break;

        case rank >= 91 && rank <= 100:
            console.log("Você tem " + vitorias + " Vitórias, " + derrotas + " Derrotas! Você é Lendário");
            break;

        case rank >= 101:
            console.log("Você tem " + vitorias + " Vitórias, " + derrotas + " Derrotas! Você é Imortal!!");
            break;

        default:
            console.log("Rank desconhecido");
    }
}

let rodadas = 5; 

while (rodadas > 0) {
    let vitorias = Math.floor(Math.random() * 100); 

    let rankdojogador = calcularRank(vitorias, derrotas);
    exibirMensagem(rankdojogador, vitorias, derrotas);

    rodadas--;
}
