/*const precoGasolina = 5.50;
const precoEtanol = 3.50;
const kmPorLitroGasolina = 10;
const kmPorLitroEtanol = 6;
const percursokm = 500;


const totalGasolina = percursokm/kmPorLitroGasolina
const totalEtanol = percursokm/kmPorLitroEtanol


const gastoViagemGasolina = totalGasolina*precoGasolina;
const gastoViagemEtanol = totalEtanol*precoEtanol;
let gasolina = false

let etanol = false



if (gasolina) {
    console.log("Seu gasto com combustivel nessa viagem foi "+ gastoViagemGasolina + " Reais.");
}
else if (etanol) {
    console.log("Seu gasto com combustivel nessa viagem foi "+ gastoViagemEtanol.toFixed(2) + " Reais.");
}

else {
    console.log("Você não viajou.");
}



const aluno = 'evanio';
const n1 = 0;
const n2 = 8;
const n3 = 6;
const media = (n1+ n2+n3)/3;



if (media < 5) {
    
    console.log('Sua media é ' + media.toFixed(1) +' '+aluno+ ' Você está reprovado');
}
else if (media >=5 && media <=7) {
    
    console.log('Sua media é ' + media +' '+aluno+ ' Você está de recuperação');
    
} else {
    console.log('Sua media é ' + media +' '+aluno+ ' Você passou de semestre');
}


const peso = 89
const altura = 1.78
const imc = peso/ (altura*altura)

if (imc < 18.5) {
    console.log('Abaixo do peso');
}
else if (imc >= 18.5 && imc <25) {
    console.log('Peso normal');
}
else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
}
else if (imc >=30 && imc <=40) {
    console.log('obeso');
}
else {
    console.log('Obesidade Grave');
} */


const produto = 100;
const debito = produto - (100/100*10);
const moneyOrPix = produto -(100/100*15);
const emAte2x = produto;
const emMaisDe2x = produto + (100/100*10);
let selectPay = emAte2x;



if (selectPay === debito) {
    console.log('Valor a pagar: ' + selectPay + ' Reais')
}
else if (selectPay === moneyOrPix) {
    console.log('Valor a pagar: ' + selectPay + ' Reais')
}
else if (selectPay === emAte2x) {
    console.log('Valor a pagar: ' + selectPay + ' Reais')
}
else {
    console.log('Valor a pagar: ' + selectPay + ' Reais')
}
