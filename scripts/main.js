let completedButton= document.querySelectorAll('.completed');



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
    

    })
}