const videoElement = document.getElementById('video');
const button = document.getElementById('button')

// Promt to select media Stream, pass to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
    console.log('Error here:', error)
    }
}

button.addEventListener('click', async() => {
    // Reset button
    button.disabled = false;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // disable button
    button.disabled = true;
});

// On load
selectMediaStream();