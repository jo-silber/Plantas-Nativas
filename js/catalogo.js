fetch('js/JSON.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    data.forEach(planta => {
      console.log(`Nombre común: ${planta.nombreComun}`);
      console.log(`Nombre científico: ${planta.nombreCientifico}`);
    });
  })
  .catch(error => console.error('Error: ', error));
