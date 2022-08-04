let st1=prompt("nhap x :","");

let x=Number(st1);

function numberOneTriangle(x){
    for (let i=1; i<=x; i++){
        for (let j=1; j<=i; j++){
            document.write('*')
        }
        document.write('<br/>')
    }
}

numberOneTriangle(x);