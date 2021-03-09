const video = document.getElementById("video");
const canvas = document.getElementById("picture");
const picturebutton = document.querySelector("a");
const startwebcam = document.querySelector(".startwebcam");
const webcam = new Webcam(video, "user", canvas);

startwebcam.addEventListener("click", () => {
    webcam.start();
})

picturebutton.addEventListener("click", () => {
    let picture = webcam.snap();
    picturebutton.href = picture;
})