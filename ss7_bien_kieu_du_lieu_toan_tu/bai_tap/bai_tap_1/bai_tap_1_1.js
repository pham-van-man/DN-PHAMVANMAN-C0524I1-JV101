 c
function tb() {
    let a = +document.getElementById("t").value
    let b = +document.getElementById("l").value
    let c = +document.getElementById("h").value
    let d = (a+ b+ c) /3
    let e = a + b + c
    document.getElementById('k').innerHTML="diem trung binh la " + d;
    document.getElementById('tong').innerHTML="diem tong la " + e;
}