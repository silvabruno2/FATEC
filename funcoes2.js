function ex1(){
    
        var n1 = Number(document.getElementById("n1").value);
        var n2 = Number(document.getElementById("n2").value);
        var n3 = Number(document.getElementById("n3").value);
        var n4 = Number(document.getElementById("n4").value);
        
        media = (n1+n2+n3+n4)/4
        
        if (media < 7){
            sit = "REPROVADO";
        }
            else{
                sit = "APROVADO";
            }

    document.getElementById("saida").innerHTML = "Sua nota foi " + media.toFixed(2) + " e voce está " + sit;

}

function ex2(){
    
        n5 = Number(document.getElementById("n5").value);
        n6 = Number(document.getElementById("n6").value);
        
        media = (n5+n6)/2
        
        if ((media >= 0) && (media < 3)){
            sit = " REPROVADO";
        }
            else if ((media >=3) && (media < 7)){ 
                sit = " de EXAME";
            }
                else {
                    sit = " APROVADO";
            } 

    document.getElementById("saida2").innerHTML = "Sua nota foi " + media.toFixed(2) + " e voce está " + sit;

}

function ex3(){
    
        n7 = Number(document.getElementById("n7").value);
        n8 = Number(document.getElementById("n8").value);
        
        if (n7 < n8){
            aux = n7;
        }
                else if (n8<n7){
                    aux = n8;
            }
                else{
                    aux = "nenhum, os números são iguais."
                } 

    document.getElementById("saida3").innerHTML = "O menor número digitado foi " + aux;
}

function ex4(){
    
        n9 = Number(document.getElementById("n9").value);
        n10 = Number(document.getElementById("n10").value);
        n11 = Number(document.getElementById("n11").value);
        
        if (n9==n10 && n9==n11){
            aux = "nenhum, todos são iguais"
        }
            else if ((n9 <= n10) && (n11 <= n10)){
            aux = n10;
        }
            else if ((n10 <= n9) && (n11 <= n9)) {
                    aux = n9;
            } 
            else {
                    aux = n11;
                }
    document.getElementById("saida4").innerHTML = "O maior número digitado foi " + aux;
}

function ex5(){




    var n12 = Number(document.getElementById("n12").value);
    var n13 = Number(document.getElementById("n13").value);
    var calc = Number(document.getElementById("calc").value);

    var resultado;
    switch(calc){
        case 1: resultado = Number((n12+n13)/2);
        break;
        case 2: if (n12>n13){
            resultado = Number(n12-n13);
            }
            else{
                resultado = Number(n13-n12);
            }
        break;
        case 3: resultado = Number(n12*n13);
        break;
        case 4: if (n13 == 0){
            resultado = "Inválido";
        }
                else{
             resultado = Number(n12/n13);
        }
            break;
        default: resultado = "inválido";
    
    }
    document.getElementById("saida5").innerHTML = "O resultado é " + resultado.toFixed(2)
}

function ex7(){
    
        n14 = Number(document.getElementById("n14").value);
        
        if (n14 < 500){
           sal = n14 + ((n14*30)/100) + " O FUNCIONÁRIO TEVE DIREITO AO AUMENTO";
        }
                else {
                    sal = n14 + " O FUNCIONÁRIO NÃO TEM DIREITO AO AUMENTO";
            } 

    document.getElementById("saida7").innerHTML = "O salário será de R$ " + sal;
}

function ex6(){

    var n15 = Number(document.getElementById("n15").value);
    var n16 = Number(document.getElementById("n16").value);
    var calc2 = Number(document.getElementById("calc2").value);

    var resultado;
    switch(calc2){
        case 1: resultado = Number(Math.pow(n15, n16));
        break;
        case 2: resultado = "raíz quadrada, respectivamente " + Number(Math.sqrt(n15)) + " e " + Number(Math.sqrt(n16)); 
        break;
        case 3: resultado = "raíz cúbica, respectivamente " + Number(Math.cbrt(n15)) + " e " + Number(Math.cbrt(n16));
        break;
        default: resultado = "inválido";
        }
    document.getElementById("saida6").innerHTML = "O resultado é " + resultado
}

function ex22(){
    var n17 = Number(document.getElementById("n17").value);
    var n18 = Number(document.getElementById("n18").value);

    var risco;
    if (n17 < 20){
        if (n18 <60){
            risco = 9;
        }
        else if ((n18>=60) && (n18<=90)){
                risco = 8;
        }
                else
                risco = 7;
    }
    else if ((n17 >= 20) && (n17 <=50)){
            if (n18<60){
                risco = 6;
            }
            else if ((n18>=60) && (n18<=90)){
                        risco = 5;
                    }
                    else 
                        risco = 4;
            }
        else
            if (n18<60){
                    risco = 3;
            }
            else if ((n18>=60) && (n18<=90)){
                            risco = 2;
                 }
                 else
                    risco = 1;
            
    document.getElementById("saida22").innerHTML = "O risco sera: " + risco
}