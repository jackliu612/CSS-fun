const setTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById("hourContainer").style.transform = `translate(-50%, -50%) rotate(${hours%12*30}deg)`
    document.getElementById("hour").style.animationDelay = `-${minutes*60+seconds}s`

    document.getElementById("minContainer").style.transform = `translate(-50%, -50%) rotate(${minutes*6}deg)`
    document.getElementById("min").style.animationDelay = `-${seconds}s`

    document.getElementById("secondContainer").style.transform = `translate(-50%, -50%) rotate(${seconds*6}deg)`

    console.log(`The time is ${hours}:${minutes}:${seconds}`);
}

window.onload = setTime;