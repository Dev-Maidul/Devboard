let completedButton= document.querySelectorAll('.completed');



// add event listner for all button
for(let i=0; i<completedButton.length; i++)
{
    let button=completedButton[i];
    button.addEventListener('click',function(event){
    alert("Board updated Successfully");
    let taskAssign=getelementByIdandValue('Task-assign');
    let dueTask=taskAssign-1;
    document.getElementById('Task-assign').innerText=dueTask;
    // Complte task 
    let compltedTask=getelementByIdandValue('complete-task');
    let updatedCompletedTask=compltedTask+1;
    document.getElementById('complete-task').innerText=updatedCompletedTask;
    console.log(updatedCompletedTask);

    })
}