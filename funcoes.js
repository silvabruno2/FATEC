function ex2(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var n3 = Number(document.getElementById("n3").value);
    
    var multi = n1*n2*n3;
    
    document.getElementById("saida").innerHTML = "A multiplicação de todos os números é: " + multi.toFixed(2);
}

function ex5(){
    var n1 = Number(document.getElementById("n1").value);
    
    var preco = (n1 - (n1*(10/100)));

    document.getElementById("saida").innerHTML = "O valor do produto com desconto é: " + preco.toFixed(2);
}

function ex7(){
    var peso = Number(document.getElementById("peso").value);

    var gordo=peso+(peso*(15/100));
    var magro=peso-(peso*(20/100));
    
    document.getElementById("saida1").innerHTML = "Se engordar vai pesar: " + gordo.toFixed(2);
    document.getElementById("saida2").innerHTML = "Se emagrecer vai pesar: " + magro.toFixed(2);
}

function ex14(){
    var ano= Number(document.getElementById("ano").value);
    var nasc= Number(document.getElementById("nasc").value);
    

    var idade = ano - nasc;
    var meses = idade * 12;
    var dias = idade * 365;
    var semanas = idade * 52;


    document.getElementById("saida1").innerHTML = "A idade dessa pessoa em anos é: " + idade.toFixed(2) ;
    document.getElementById("saida2").innerHTML = "A idade dessa pessoa em meses é: " + meses.toFixed(2);
    document.getElementById("saida3").innerHTML = "A idade dessa pessoa em dias é: " + dias.toFixed(2);
    document.getElementById("saida4").innerHTML = "A idade dessa pessoa em semanas é: " + semanas.toFixed(2);

}

function ex21(){
    var sal = Number(document.getElementById("sal").value);
    var horas = Number(document.getElementById("horas").value);
    var ex = Number(document.getElementById("ex").value);

    var aux1 = sal/8;
    var aux2 = sal/4;

    var final = ((horas*aux1) + (ex*aux2));

    document.getElementById("saida").innerHTML = "O salario a receber sera de " + final.toFixed(2) + " reais";
}

function ex24(){
    var real = Number(document.getElementById("real").value);
    
    var dolar = real*1.80;
    var marco = real*2;
    var libra = real*3.57;

    
    document.getElementById("saida1").innerHTML = " Você possui " + dolar.toFixed(2) + " Doláres"; 
    document.getElementById("saida2").innerHTML = "Você possui " + marco.toFixed(2) + " Marcos Alemães"; 
    document.getElementById("saida3").innerHTML = "Você possui " + libra.toFixed(2) + " Libras Esterlinas";
    alert ("Boa Viagem !");
}
