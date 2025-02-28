function getelementByIdandValue(id)
{
    let value=document.getElementById(id).innerText;
    let convertedValue=parseInt(value);
    return convertedValue;
}
// Time and date function
function timeAndDate(date){
    const format={day:  '2-digit', month: 'long', year: 'numeric'};
    return date.toLocaleDateString('en-GB',format);
}