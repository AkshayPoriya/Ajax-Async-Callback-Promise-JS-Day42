// This function return current time
function showTime()
{
    const date= new Date();
    return date.getHours()+"Hrs:"+date.getMinutes()+"Mins:"+date.getSeconds()+"Secs";
}
// This function prints session expired and corresponding time
function showSessionExpire()
{
    console.log("Activity-B Your session expired at"+showTime());
}
// Program will  start from here
// Printing A triggered B at time
console.log("Acitivity A: Triggering Activity B at "+showTime());
// ShowSessionExpire function will be called in 5 secs
setTimeout(showSessionExpire,5000);
// In sync-prog language the main thread would have been waiting for 5 seconds to execute below commands
// But in js a child thread will execute this command in parallel to main thread
// Notice that no external library is used for this thing, which implies js is async in nature
console.log("Activity-A:Triggered Activity-B at "+showTime()+ "will execute after 5 seconds");