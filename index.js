const endDate = "25 December 2023 11:59:59 PM."

document.getElementById('endDate').innerText=endDate;

// function clock(){
//     const end= new Date(endDate);
//     const now=new Date();
//     //console.log(end, now);
//     // OR
//     console.log(end);
//     console.log(now);

//     let difference= end-now;
//     console.log(difference);
//     // Now converting these milliseconds into Seconds.
//     let newdiff= (difference / 1000);
//     console.log(newdiff);

//     // 1 Day = 24Hrs
//     // 1 Hr  = 60Min
//     // 60Min = 3600Sec
//     // Thus........

//     console.log(Math.floor(newdiff/3600/24));        // Used 'Math.floor' just to see the exact round-off number.
// }
// clock();



// Now adding all the values to their respective places.
let inputs=document.querySelectorAll('input');

function clock(){
    const end= new Date(endDate);
    const now=new Date();

    let difference= (end-now)/1000;

    if(difference<0) return;            // It is implemented to stop the coutdown from moving into negative values.

    console.log(difference);
    inputs[0].value=Math.floor(difference/3600/24);   // Inserted the value at input 0th key.
    inputs[1].value=Math.floor((difference/3600)%24); // Calculation of Hours Remaining
    inputs[2].value=Math.floor((difference/60)%60);   // Calculation of Minutes Remaining
    inputs[3].value=Math.floor(difference%60);        // Calculation of Seconds Remaining.
}
clock();

setInterval(
    ()=>{
        clock(1000);
    }
)