function click_Action(){
    alert("hello all")

}
function load(){
    let name=prompt("enter your name:")
    alert("hey "+name+" welcome")
}
function getValue(){
    let uname=document.getElementById("username").value
    alert(uname)
}
function getSum(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    // alert(a+b)
    let s=a+b
    document.getElementById("re").value=s
}