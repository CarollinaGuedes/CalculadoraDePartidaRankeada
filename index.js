function classificacao(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;
  
    if (saldo <= 10) {
      nivel = "Nível Ferro";
    } else if (saldo <= 20) {
      nivel = "Nível Bronze";
    } else if (saldo <= 50) {
      nivel = "Nível Prata";
    } else if (saldo <= 80) {
      nivel = "Nível Ouro";
    } else if (saldo <= 90) {
      nivel = "Nível Diamante";
    } else if (saldo <= 100) {
      nivel = "Nível Lendário";
    } else {
      nivel = "Imortal";
    }
  
    return nivel;
  }
  
  let vitorias = 100;
  let derrotas = 0;
  let resultado = classificacao(vitorias, derrotas);
  
  console.log(`O Herói tem um saldo de ${vitorias - derrotas} está no nível de ${resultado}`);
  