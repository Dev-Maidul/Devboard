let completedButton= document.querySelectorAll('.completed');
// all Dynamic time and date
let cardCurTime=new Date();
let timeFormat=timeAndDate(cardCurTime);
let setTimes=document.querySelectorAll('.cur-time');
for(let time of setTimes)
{
    time.innerHTML=timeFormat;
}

let historyTime=document.getElementById('history-time');
let taskTime=timeAndDate2(cardCurTime);
historyTime.innerHTML=taskTime;
// add event listner for all button
for(let i=0; i<completedButton.length; i++)
{
    let button=completedButton[i];
    button.addEventListener('click',function(event){
        // 1.Alert Board updated Successfully
    alert("Board updated Successfully");
    // Handle Last button double alert 
    if(i===completedButton.length-1)
    {
        alert("Congrates !!! You have completed all the current task.")
    }
    // 2.Decrease  Task assign value
    let taskAssign=getelementByIdandValue('Task-assign');
    let dueTask=taskAssign-1;
    document.getElementById('Task-assign').innerText=dueTask;
    // 3. Increase Complite Task value
    let compltedTask=getelementByIdandValue('complete-task');
    let updatedCompletedTask=compltedTask+1;
    document.getElementById('complete-task').innerText=updatedCompletedTask;
    // 4. button disable 
    button.setAttribute('disabled', ''); 
    // 6. Passing message to activity log + dynamic title +  dynamic time 
    let cardTitle = button.closest('.card-item-container').querySelector('.card-title').innerText;
    let curTime=new Date().toLocaleString();
    let div=document.createElement('div');
    div.innerHTML=`
        <strong>You have completed ${cardTitle} at ${curTime}</strong>
    `
    div.classList.add('bg-gray-100', 'rounded-lg', 'shadow-sm', 'p-4');
     document.getElementById('message-box').appendChild(div);


    })
}
// Clear Activity History button
document.getElementById('clear-history').addEventListener('click',function(event){
    let messageBox=document.getElementById('message-box');
    messageBox.innerText="";


})
// Discover today 
const discover=document.getElementById('discover-today').addEventListener('click',function(event){
    window.location.href='blog.html';
})



// Coler picker
document.getElementById("theme").addEventListener("click", function () {
    const themeColor = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
    document.body.style.backgroundColor = themeColor;
  });