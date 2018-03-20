var valor1, valor2;
function calculadora() {
    var valor1 = parseInt(prompt('Digite o primeiro número:  '));
    var valor2 = parseInt(prompt('Digite o segundo número: '));
    
    alert('A + B= '+ (valor1 + valor2) + 
         '\nA - B= '+ (valor1 - valor2) +
         '\nA * B= '+ (valor1 * valor2) + 
         '\nA / B= '+ (valor1 / valor2));
}