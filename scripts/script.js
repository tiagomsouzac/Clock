    //  CONSTANTS

const SCREENCLOCK = document.getElementById('screen')

const BUTTONS = document.querySelectorAll(".btn")
const TIMERBUTTONS = document.querySelectorAll(".n")

const PLUSBTN = document.getElementById("plus-btn")

const OKBTN = document.getElementById("ok-btn")

const STOPWATCH = document.getElementById("stopwatch-screen")
const CLOCK = document.getElementById("clock-screen")
const TIMER = document.getElementById("timer-screen")
const ALARM = document.getElementById("alarm-screen")
const ALARMSET = document.getElementById("alarm-screen-setting")
    //  VARIABLES

//  stopwatch variables
var seg = document.getElementById("seg")
var miliseg = document.getElementById("miliseg")
var stopwatchDone
var stopwatchStarted = false

//  clock variables
var hour = document.getElementById("textHours-clock")
var day = document.getElementById("day-clock")

//  timer variables
var s = ""
var m = ""
var ho = ""
var numbersTimer = ["0","0","0","0","0","0"]
var firstNumber = false
var i = 5
var startTimer
var startedTimer = false

//  clock title
var h = document.getElementById("clock-type")

//  setting clock subjects
//ALARM.style.setProperty("display", "none")
TIMER.style.setProperty("display", "none")
CLOCK.style.setProperty("display", "none")
STOPWATCH.style.setProperty("display", "none")
ALARMSET.style.setProperty("display", "none")

//  setting PLUS start
//PLUSBTN.style.setProperty("visibility", "hidden")

    //  functions
    
//  accessing minimenu buttons
menuButtons = (e) => {
    var value = e.target.textContent
    switch (value){
        case "Alarm":
            h.textContent = 'Alarm'

            PLUSBTN.textContent = "+"
            PLUSBTN.style.setProperty("visibility", "visible")

            ALARM.style.setProperty("visibility", "visible")
            ALARM.style.setProperty("display", "")

            CLOCK.style.setProperty("visibility", "hidden")
            CLOCK.style.setProperty("display", "none")

            TIMER.style.setProperty("visibility", "hidden")
            TIMER.style.setProperty("display", "none")

            STOPWATCH.style.setProperty("visibility", "hidden")
            STOPWATCH.style.setProperty("display", "none")

            ALARMSET.style.setProperty("display", "none")
            break

        case "Clock":
            h.textContent = 'Clock'

            PLUSBTN.style.setProperty("visibility", "hidden")

            CLOCK.style.setProperty("visibility", "visible")
            CLOCK.style.setProperty("display", "")

            ALARM.style.setProperty("visibility", "hidden")
            ALARM.style.setProperty("display", "none")

            TIMER.style.setProperty("visibility", "hidden")
            TIMER.style.setProperty("display", "none")

            STOPWATCH.style.setProperty("visibility", "hidden")
            STOPWATCH.style.setProperty("display", "none")

            ALARMSET.style.setProperty("display", "none")
            break

        case "Timer":
            h.textContent = 'Timer'
            if (firstNumber){
                PLUSBTN.style.setProperty("visibility", "visible")
                if(startedTimer){
                    console.log(2)
                    PLUSBTN.textContent = "||"
                } else {
                    PLUSBTN.textContent = "►"
                }
            } else {
                PLUSBTN.style.setProperty("visibility", "hidden")                
            }


            TIMER.style.setProperty("visibility", "visible")
            TIMER.style.setProperty("display", "")

            ALARM.style.setProperty("visibility", "hidden")
            ALARM.style.setProperty("display", "none")

            STOPWATCH.style.setProperty("visibility", "hidden")
            STOPWATCH.style.setProperty("display", "none")

            CLOCK.style.setProperty("visibility", "hidden")
            CLOCK.style.setProperty("display", "none")

            ALARMSET.style.setProperty("display", "none")
            break

        case "Stopwatch":
            h.textContent = 'Stopwatch'

            if (stopwatchStarted == true){
                PLUSBTN.textContent = "||"
            } else {
                PLUSBTN.textContent = "►"
            }
            
            PLUSBTN.style.setProperty("visibility", "visible")

            STOPWATCH.style.setProperty("visibility", "visible")
            STOPWATCH.style.setProperty("display", "")

            ALARM.style.setProperty("visibility", "hidden")
            ALARM.style.setProperty("display", "none")

            CLOCK.style.setProperty("visibility", "hidden")
            CLOCK.style.setProperty("display", "none")

            TIMER.style.setProperty("visibility", "hidden")
            TIMER.style.setProperty("display", "none")

            ALARMSET.style.setProperty("display", "none")
            break
    }
}

//  start or pause stopwatch
stopwathFuntion = () => {
    if (PLUSBTN.textContent == "►"){
        let ms = 0
        let s = 0
        miliseg.textContent, seg.textContent = "00"
        PLUSBTN.textContent = "||"
        stopwatchStarted = true
        stopwatchDone = setInterval(() => {
            ms++
            if(ms < 10){
                miliseg.textContent = `0${ms}`
            }else{
                miliseg.textContent = ms
            }
            if (ms == 100) {
                ms = 0
                s++
                if(s < 10){
                    seg.textContent = `0${s}`
                }else{
                    seg.textContent = s
                }

            }
        })    
    } else {
        clearInterval(stopwatchDone)
        stopwatchStarted = false
        PLUSBTN.textContent = "►"
    }

}

//  input number in timer
timerFunction = (e) => {
    let tn = document.getElementById("tn")

    if(!startedTimer){
        //  clear timer
        if(e.target.textContent == "←"){
            s = ""
            m = ""
            ho = ""
            numbersTimer = ["0","0","0","0","0","0"]
            firstNumber = false
            i = 5
            tn.textContent = '00:00:00'
            PLUSBTN.style.setProperty("visibility", "hidden")
            clearInterval(startTimer)

        //  input numbers
        } else{
            PLUSBTN.textContent = "►"
            PLUSBTN.style.setProperty("visibility", "visible")
            if(i > 0) {
            if (firstNumber) {
                    //  00 input
                    if (e.target.textContent == "00"){
                        if (i != 1){
                            for(let c = 0; c < 5; c++){
                                numbersTimer[c] = numbersTimer[c+2]
                            }
                            numbersTimer[4] = "0"
                            numbersTimer[5] = "0"
                            i -= 2 
                        }    
                    //  single number input
                    }else {
                        for(let c = 0; c < 5; c++) {
                            numbersTimer[c] = numbersTimer[c+1]
                        }   
                        numbersTimer[5] = e.target.textContent
                        i--
                    }  
                }
                if (!firstNumber && e.target.textContent != "0" && e.target.textContent != "00"){
                    numbersTimer[5] = e.target.textContent
                    firstNumber = true
                }
            }
            s = numbersTimer[4] + numbersTimer[5]
            m = numbersTimer[2] + numbersTimer[3]
            ho = numbersTimer[0] + numbersTimer[1]
            tn.textContent = `${ho}:${m}:${s}`
        }    
    } 
}

//  start or pause timer
startTimerFunction = () => {
    if (PLUSBTN.textContent == "►"){
        PLUSBTN.textContent = "||"
        startedTimer = true
        startTimer = setInterval(() =>{
            if(s > 0){
                if (s > 60){
                    s = Number(s) - 60
                    m = Number(m) + 1
                }
                s = Number(s) - 1
            }
            if(m > 59){
                m = Number(m) - 60
                ho = Number(ho) + 1
                s = 59
            }
            if (s == 0){
                if ((Number(m) == 0) && (Number(ho) == 0)){
                    numbersTimer = ["0","0","0","0","0","0"]
                    s = "00"
                    m = "00"
                    ho = "00"
                    clearInterval(startTimer)
                    startedTimer = false
                    PLUSBTN.style.setProperty("visibility", "hidden")
                } if(m > 0){
                    m = Number(m) - 1
                    s = 59
                } if (m == 0){
                    if (ho > 0){
                        ho = Number(ho) - 1
                        m = 59
                    }
                }
            }
            tn.textContent = `${ho}:${m}:${s}`
        }, 1000)
    } else {
        PLUSBTN.textContent = "►"
        startedTimer = false
        clearInterval(startTimer)
    }
}

//  adding alarm
addAlarm = () => {
    ALARM.style.setProperty("visibility", "hidden")
    ALARM.style.setProperty("display", "none")

    PLUSBTN.style.setProperty("visibility", "hidden")

    ALARMSET.style.setProperty("display", "")

    //  alarm variables
    const HOURALARM = document.getElementById("hourAlarm")
    const MINALARM = document.getElementById("minAlarm")
    const WEEKDAY = document.querySelectorAll("#weekDay")
    const AMAPM = document.getElementById("amApm")

    // alarmset variables
    const AMORPM = document.getElementById("pmOrAm")
    const TEXTHOURS = document.getElementById("textHours")
    const DAYS = document.getElementById("days")
    const CLOSEALARMSET = document.getElementById("close-alarmset")

    let week = ["Mon","Sun","Tue","Wed","Thu","Fri","Sat"]
    let daysChoose = ""

    //  unchecking week days
    for(let i = 0; i < week.length; i++){
        if(WEEKDAY[i].checked){
            WEEKDAY[i].checked = false
        }
    }

    CLOSEALARMSET.addEventListener("click", (e) => {
        e.preventDefault()
        ALARM.style.setProperty("visibility", "visible")
        ALARM.style.setProperty("display", "")
    
        PLUSBTN.style.setProperty("visibility", "visible")

        ALARMSET.style.setProperty("display", "none")
    })
    
    OKBTN.addEventListener("click", (e) => {
        e.preventDefault()

        //  chosen days
        for(let i = 0; i < week.length; i++){
            if(WEEKDAY[i].checked){
                daysChoose += `${week[i]} `
            }
        }
        
        //  checking the hours
        if (HOURALARM.value > 12 || HOURALARM < 0){
            window.alert("The hours are wrong!")
        
        //  checking the minutes
        } else if (MINALARM.value > 59 || MINALARM.value < 0) {
            window.alert("The minutes are wrong!")
        
        //  checking if a day was chosen
        } else if (daysChoose == "") {
            window.alert("You must to choose a day of week!")

        //  if nothing wrong, alarm changed
        }else {
            TEXTHOURS.textContent = `${HOURALARM.value < 10 ? `0${HOURALARM.value}` : HOURALARM.value}:${MINALARM.value < 10 ? `0${MINALARM.value}` : MINALARM.value}`
            DAYS.textContent = daysChoose
            AMAPM.textContent = AMORPM.value

            ALARM.style.setProperty("visibility", "visible")
            ALARM.style.setProperty("display", "")
        
            PLUSBTN.style.setProperty("visibility", "visible")

            ALARMSET.style.setProperty("display", "none")
        }
    })

}

//  plus button
plusClick = () => {
    switch(h.textContent){
        case "Alarm":
            addAlarm()
            break
        case "Stopwatch":
            stopwathFuntion()   
            break
        case "Timer":
            startTimerFunction()
            break
    }
}

    //  events

//  accessing to the minimenu buttons
BUTTONS.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        menuButtons(e)
    }) 
})

//  plus button
PLUSBTN.addEventListener("click", (e) =>{
    e.preventDefault()
    plusClick()
})

//  input numbers or del for the timer
TIMERBUTTONS.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        timerFunction(e)
    })
})

    //  intervals

//  day, week, month
setInterval(() =>{
    let date = new Date()

    let week = date.getDay()
    let month = date.getMonth()

    //  getting day of week
    switch(week){
        case 0:
            week = "Mon"
            break
        case 1:
            week = "Sun"
            break
        case 2:
            week = "Tue"
            break
        case 3:
            week = "Wed"
            break
        case 4:
            week = "Thue"
            break  
        case 5:
            week = "Fri"
            break  
        case 6:
            week = "Sat"
            break
    }

    //  getting month of year
    switch(month){
        case 0:
            month = "Jan"
            break
        case 1:
            month = "Feb"
            break
        case 2:
            month = "Mar"
            break
        case 3:
            month = "Apr"
            break
        case 4:
            month = "May"
            break  
        case 5:
            month = "Jun"
            break  
        case 6:
            month = "Jul"
            break 
        case 7:
            month = "Aug"
            break 
        case 8:
            month = "Set"
            break 
        case 9:
            month = "Oct"
            break
        case 10:
            month = "Nov"
            break
        case 11:
            month = "Dec"
            break
    }

    if (date.getHours() > 12) {
        hour.textContent = `${date.getHours() < 21 ? `0${date.getHours() - 12}` : date.getHours() - 12}:${date.getMinutes() > 10 ? date.getMinutes(): `0${date.getMinutes()}`}pm`   
    } else{
        hour.textContent = `${date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`}:${date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`}am`
    }
    day.textContent = `${week}, ${month} ${date.getDate()}`

}, 1000)