function display(val)
{
    document.getElementById("result").value += val;
}
function clr()
{
    document.getElementById("result").value = "";
}
function equate()
{
    let x=document.getElementById("result").value;
    document.getElementById("result").value = eval(x);
}