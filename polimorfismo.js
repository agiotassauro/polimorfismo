class Arma {
  constructor(tipo, preço, nome) {
      this.nome = nome;
      this.tipo = tipo;
      this.preço = preço;
  }

  Analisar() {
      return ` A arma é ${this.tipo}, e custa ${this.preço}`
  }

}

class ArmaBranca extends Arma {
  constructor(nome, preço, metal, tipo) {
  super(nome, preço, tipo);
  this.metal = metal;
  }

  Brandir(){
      sorteio1 = ["bom","ruim"];
      resultado = sorteio1[Math.floor(Math.random() * sorteio1.length)]
      return resultado

  }
}

class ArmaDeFogo extends Arma {
  constructor(nome, preço, calibre, tipo) {
      super(nome, preço, tipo);
      this.calibre = calibre

  }

  Atirar() {
     sorteio2 = ["boa","pessíma"];
     resultado2 = sorteio2[Math.floor(Math.random() * sorteio2.length)]
     return resultado2 
  }
}