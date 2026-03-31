var num1='',num2='',symbol='',key='',flag=0,op='',ip='',prev=false;
function calc()
{
    if(symbol==="+")
        symbol = add;
    else if(symbol==="-")
        symbol = sub;
    else if(symbol==="X")
        symbol = mul;
    else
        symbol = div;
    return symbol(parseFloat(num1),parseFloat(num2));
}
function add(a,b)
{
    return a + b;
}
function sub(a,b)
{
    return a - b;
}
function mul(a,b)
{
    return a * b;
}
function div(a,b)
{
    return a / b;
}
$("button").click(function()
{
    key = this.textContent;
    ip = (prev==true)?op:ip;
    prev = false;
    ip = (key==="=")?ip:((key==="CLR")?"":ip+key);
    if((key==="+")||(key==="-")||(key==="X")||(key==="/"))
    {
        flag = 1;
        symbol = key;
    }
    else if((key==="=")||(key==="CLR"))
    {
        flag = 0;
        op = (key==="CLR")?'':calc();
        if(key==="=")
        {
            prev = true;
            num1 = op;
            num2 = "";
        }
    }
    else
    {
        if(flag==1)
            num2 += key;
        else
            num1 += key;
    }
    $("#datascreen").html("<span>"+ip+"</span>");
    $("#resscreen").text(op);
});