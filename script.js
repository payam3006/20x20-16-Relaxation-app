q = console.log;

const mainBreathe = document.getElementById("mainBreathe");
const breatheIn = document.getElementById("breatheIn");
const breatheOut = document.getElementById("breatheOut");
const hold = document.getElementById("hold");
const rotatingCircle = document.getElementById("rotatingCircle");

setTimeout(() => {
  rotatingCircle.classList.add("breatheRotate");
  oneCycle();
}, 1);

const oneCycle = () => {
  mainBreathe.classList.add("mainBreatheIn");
  setTimeout(() => {
    breatheIn.classList.add("hidden");
    hold.classList.remove("hidden");
  }, 3325);
  setTimeout(() => {
    mainBreathe.classList.remove("mainBreatheIn");
    breatheOut.classList.remove("hidden");
    hold.classList.add("hidden");
  }, 4655);
  breatheIn.classList.remove("hidden");
  breatheOut.classList.add("hidden");
};

setInterval(oneCycle, 7980);
