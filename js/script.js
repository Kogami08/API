let xmlData;

function loadFile() {
  let file = document.getElementById('myFile').files[0];
  let reader = new FileReader();
  reader.onload = function(e) {
    xmlData = e.target.result;
    console.log(xmlData);
  };
  reader.readAsText(file);
}

function downloadFile() {
  if (!xmlData) {
    alert('No hay datos para descargar. Por favor, carga un archivo primero.');
    return;
  }

  let a = document.createElement('a');
  let blob = new Blob([xmlData], {type: 'text/xml'});
  a.href = URL.createObjectURL(blob);
  a.download = 'descarga.xml';
  a.click();
}


