let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
scanner.addListener('scan', function (content) {
    console.log(content);
    if(content == "C15212186"){
        console.log("Asistencia!");
        alert("Asistencia!");
    }
  });
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      alert("Cantidad de camaras: " + cameras.length);
      scanner.start(cameras[0]);

    } else {
      console.error('No cameras found.');
    }
  }).catch(function (e) {
    console.error(e);
  });