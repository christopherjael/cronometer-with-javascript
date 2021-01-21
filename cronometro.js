const $hms = document.getElementById('hms')
const $start = document.querySelector('#start')
const $stop = document.querySelector('#stop')
const $reset = document.querySelector('#reset')

var s = "00";
var m = "00";
var h = "00";

const init = () => {
    cronoTrigger = setInterval(start,1)
    $start.removeEventListener('click', init)
}

const start = () => {

    s++
    s = s.toString().padStart(2, '00')

    if (s > 59){
        s = "00"
        m++
        m = m.toString().padStart(2, '00')
    }

    if( m > 59){
        m = "00"
        h++
        h = h.toString().padStart(2, '00')
    }

    if ( h > 24 ){
        h = "00"
    }

    $hms.textContent = h+":"+m+":"+s
}

const stop = () => {
    clearInterval(cronoTrigger)
    $start.addEventListener('click', init)
}

const reset = () => {
    clearInterval(cronoTrigger)
    h = "00"
    m = "00"
    s = "00"
    $start.addEventListener('click', init)
    $hms.textContent = h+":"+m+":"+s
}

$start.addEventListener('click', init)
$stop.addEventListener('click', stop)
$reset.addEventListener('click', reset)

$start.addEventListener('click', (e) => {
    e.target.classList.toggle('animation-click')
})

$stop.addEventListener('click', (e) => {
    e.target.classList.toggle('animation-click')
})

$reset.addEventListener('click', (e) => {
    e.target.classList.toggle('animation-click')
})