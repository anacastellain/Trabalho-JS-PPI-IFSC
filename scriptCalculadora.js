const visor = document.getElementById('visor'); // para chamar apenas o visor || tag
const botoes = document.querySelectorAll('.btn'); // para chamar todos os botoes || . para chamar todos os elementos de valor btn || class
// #visor chamaria uma id 

botoes.forEach((botao) => { // percorre cada um dos botoes dentro da lista "para cada" | um por um || => {função de seta pra definir o que vai ser feito com cada botao}
      botao.addEventListener('click', () => { // "quando o usuário clicar no botao expecifico vai acontecer esse evento {}" 
      const valor = botao.dataset.valor; // vai dentro do botao e le oq ta escrito

    // Se o botão tiver um data-valor (números e operadores), adiciona no visor
    if (valor) { 
      visor.value += valor; // "pegue o que já está escrito no visor e cole o novo valor no final"
    }
  }); // fecha add listener 
}); // fecha o for each
const btnLimpar = document.getElementById('limpar');
btnLimpar.addEventListener('click', () =>{
    visor.value = '';
}); // chama o limpar e fala pra ele limpar o visor do usuario 

const btnIgual = document.getElementById('igual');

btnIgual.addEventListener('click', () =>{
    try{
        if (visor.value !==''){
            visor.value = eval(visor.value); // lê a expressão e faz o cálculo em JS, respeitando ordem de mult., div...
        }
    }
    catch (erro){
        visor.value = 'Erro';
    } // blocos de segurança "tenta" = fazer a conta e "capturar" se fizer a digitação errada da conta, da erro e mostra pro usuario
});
const btnApagar = document.getElementById('apagar');

btnApagar.addEventListener('click', () => {
  // O String() garante que funciona mesmo logo após um cálculo (onde o visor vira número)
  visor.value = String(visor.value).slice(0, -1);
});