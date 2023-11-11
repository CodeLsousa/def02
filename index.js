let vitorias = 81;
let derrotas = 0;

let rankdojogador = vitorias - derrotas;

switch (true) {
    case rankdojogador <= 10:
        console.log("Você tem " + vitorias + " Vitorias," + derrotas + " Derrotas! Você é Ferro!");
        break;

        case rankdojogador >= 11 && rankdojogador <=20:
            console.log("Você tem " + vitorias + " Vitorias," + derrotas + " Derrotas! Você é Bronze!");
            break;

    case rankdojogador >=21 && rankdojogador <= 50:
        console.log("Você tem " + vitorias + " Vitorias," + derrotas + " Derrotas! Você é Prata!"); 
        break;

        case rankdojogador >=51 && rankdojogador <= 80:
            console.log("Você tem " + vitorias + " Vitorias! E tem " + derrotas + " Derrotas! Seu rank é Ouro!");
            break;
            
            case rankdojogador >=81 && rankdojogador <= 90:
                console.log("Você tem " + vitorias + " Vitorias," + derrotas + " Derrotas! Você é Diamante!");
                break;

                case rankdojogador >=91 && rankdojogador <= 100:
                    console.log("Você tem " + vitorias + " Vitorias," + derrotas + " Derrotas! Você é Lendário");
                    break;

                    case rankdojogador >=101:
                        console.log("Você tem " + vitorias + " Vitorias," + derrotas + " Derrotas! Você é Imortal!!" )
                        default:
        console.log("Rank desconhecido");
}