<script>
let video_el
let videoStream 
let audioStream
let recording = false
let recordedChunks = [];
let mediaRecorder
var intervalFn
var countDown = 4

function start(){
  recordedChunks = []
  getAudioStream()
  .then( getScreenStream )
  //.then( startRecording )
  .then(()=>{
    countDown--
    intervalFn = setInterval( function(){
      countDown--
      if (countDown<=0) {
        countDown = 4
        clearInterval(intervalFn)
        startRecording()
      }
    }, 1000)
  })

}


function stop(){
  audioStream.getTracks().forEach(function(track) {
    track.stop();
  });
  videoStream.getTracks().forEach(function(track) {
    track.stop();
  });
  mediaRecorder.stop(); 
  //video_el.stop()
}

async function getAudioStream() {
  try {
    audioStream = await navigator.mediaDevices.getUserMedia( {audio: true} );
    return audioStream
  } catch(err) { console.log('audioStream err ', err) }
}

async function getScreenStream() {
  try {
    videoStream = await navigator.mediaDevices.getDisplayMedia( {video: true, audio: false} );
    video_el.srcObject = videoStream;
    video_el.play();
    // on "stop share" from system dialog
    videoStream.addEventListener('inactive', e => {
      console.log('incative', mediaRecorder)
      if (mediaRecorder && mediaRecorder.state != 'inactive') mediaRecorder.stop();
    });       
    return videoStream
  } catch(err) { console.log('videoStream err ', err) }
}

function startRecording(){
  if (!videoStream) {
    alert('Video stream missing !')
    return
  }
  recording = true
  // mix video and audio tracks
  let mixedStream = new MediaStream([ videoStream.getTracks()[0], audioStream?audioStream.getTracks()[0]:null ]);
  var options = { mimeType: "video/webm; codecs=vp9" };
  mediaRecorder = new MediaRecorder(mixedStream, options);

  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.onstop = download;
  mediaRecorder.start();

}
function handleDataAvailable(event) {
  if (event.data.size > 0) 
    recordedChunks.push(event.data);
}

function download() {
  recording = false
  var blob = new Blob(recordedChunks, {
    type: "video/webm"
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "Record.webm";
  a.click();
  setTimeout(() => {
    window.URL.revokeObjectURL(url);
    recordedChunks = []
    document.body.removeChild(a);
  }, 0)
  //window.URL.revokeObjectURL(url);
}


</script>
<center>
{#if recording}
  <button style="color:red" on:click={()=>stop()}> &#9673; Stop Recording  </button>
{:else if countDown==4}
  <button on:click={()=>start()}> &#9658; Start recording screen </button>
{:else}
  <button> &#9673; Screen recording starts in {countDown} sec </button>
{/if}
</center>

<center>
<video bind:this={video_el} autoplay style="width:20em; "></video>
</center>
