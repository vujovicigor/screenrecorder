<script>
navigator.mediaDevices.enumerateDevices()
.then(function(devices) {
  devices.forEach(function(device) {
    let menu = document.getElementById("inputdevices");
    if (device.kind == "audioinput") {
      let item = document.createElement("option");
      item.innerHTML = device.label;
      item.value = device.deviceId;
      menu.appendChild(item);
    }
  });
});
</script>