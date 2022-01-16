export default function change() {
    (document.getElementById("tittle1").innerText=="Binary Digits")?changingTittle():changingTittleReverse();
}

function changingTittle() {
    let tittleBinary = document.getElementById("tittle1");
    let tittleDecimal = document.getElementById("tittle2");
    

    tittleBinary.innerText = "Decimal Digits";
    tittleDecimal.innerText = "Binary Result";
}
let changingTittleReverse = () => {
    let tittleBinary = document.getElementById("tittle1");
    let tittleDecimal = document.getElementById("tittle2");
    

    tittleBinary.innerText = "Binary Digits";
    tittleDecimal.innerText = "Decimal Result";
}
