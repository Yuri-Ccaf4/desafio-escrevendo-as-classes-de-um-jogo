class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }


    ataque() {
        let ataque = "";
        switch (this.classe) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                console.log("Classe inválida");
                break;
        }
        console.log(`O ${this.classe} atacou usando ${ataque}`);
    }
}

let mago = new Heroi("Cafeína", 22, "mago");
mago.ataque();

let guerreiro = new Heroi("Café", 39, "guerreiro");
guerreiro.ataque();