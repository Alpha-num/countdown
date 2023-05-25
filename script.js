 targetDate = new Date('2023-05-27').getTime() //Update target date here

countDown = setInterval(()=>{
    let currentDate = new Date() //gets current date
    let distanceLeft = targetDate - currentDate; //subtracts current date from target date to get the remaining days
    // next section calculates the seconds, hours, days etc from DistanceLeft
    let seconds = Math.floor(distanceLeft / 1000);
    let hours = Math.floor(distanceLeft / (1000 * 60 * 60));
    let minutes = Math.floor((distanceLeft % (1000 * 60 * 60)) / (1000 * 60));
    let day = Math.floor(distanceLeft / (1000 * 60 * 60 * 24));
    // this section updates the html elements
    document.querySelector('.days').innerHTML = day +'d';
    document.querySelector('.hours').innerHTML = hours + 'h';
    document.querySelector('.minutes').innerHTML = minutes +'m';
    document.querySelector('.seconds').innerHTML = seconds + 's';
    //this section checks if countdown is over, then it stops the interval function and updates the html element to 00.
    if(distanceLeft < 0) {
        clearInterval(countDown);
        document.querySelector('.heading-text').innerHTML = "COUNTDOWN EXPIRED";
        document.querySelector('.days').innerHTML = 00;
        document.querySelector('.hours').innerHTML = 00;
        document.querySelector('.minutes').innerHTML = 00;
        document.querySelector('.seconds').innerHTML = 00;
    
    }

}, 1000)

