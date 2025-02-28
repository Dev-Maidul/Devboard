function getelementByIdandValue(id)
{
    let value=document.getElementById(id).innerText;
    let convertedValue=parseInt(value);
    return convertedValue;
}