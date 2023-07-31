//Leer archivos para luego convertirlos en XML

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








//Transformar XML a JSON


const fs = require('fs');
const { parseString } = require('xml2js');

// Ruta del archivo XML de entrada
const xmlFilePath = 'C://ConvertSharepoint//descarga.xml';

// Función para leer el archivo XML y convertirlo a JSON
function convertXmlToJson(xmlFilePath) {
  fs.readFile(xmlFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo XML:', err);
    } else {
      // Convertir el XML a JSON
      parseString(data, (err, result) => {
        if (err) {
          console.error('Error al convertir el XML a JSON:', err);
        } else {
          // Convertir el resultado a una cadena JSON formateada
          const jsonData = JSON.stringify(result, null, 2);

          // Ruta del archivo de salida JSON
          const jsonFilePath = 'C://ConvertSharepoint//archivo.json';

          // Almacenar el JSON en el disco local
          fs.writeFile(jsonFilePath, jsonData, 'utf-8', (err) => {
            if (err) {
              console.error('Error al almacenar el archivo JSON:', err);
            } else {
              console.log('¡Archivo JSON almacenado exitosamente!');
            }
          });
        }
      });
    }
  });
}

// Llamar a la función para convertir el archivo XML a JSON
convertXmlToJson(xmlFilePath);




//Leer correctamente el archivo JSON y reflejarlos en la consola

// Tu fragmento de JSON en forma de ruta para luego darle el jsonfile path  y json.parse para poder leer el archivo
const jsonFilePath = 'C://ConvertSharepoint//archivo.json';

const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

function miFuncion() {
  console.log(data);
}

miFuncion();

function findValues(data) {
  const valuesArray = [];

  // Recorrer cada elemento en el arreglo "entry"
  for (const entry of data.feed.entry) {
    // Verificar si el elemento actual tiene la propiedad "content"
    if (entry.hasOwnProperty('content')) {
      // Si tiene la propiedad "content", acceder a la propiedad "m:properties" dentro de "content"
      const mProperties = entry.content[0]['m:properties'];

      // Verificar si "m:properties" es un objeto y tiene las propiedades "d:Aguascalientes", "d:Austin" y "d:Title"
      if (mProperties 

        
      && mProperties[0].hasOwnProperty('d:Aguascalientes') 
      && mProperties[0].hasOwnProperty('d:Althofen') 
      && mProperties[0].hasOwnProperty('d:Penang_x0028_P1_x0029_') 
      && mProperties[0].hasOwnProperty('d:Penang_x0028_P5_x0029_') 
      && mProperties[0].hasOwnProperty('d:Austin') 
      && mProperties[0].hasOwnProperty('d:Title')) {
        
        
        // Si existen todas las propiedades, obtener sus valores
        const titleEntry = mProperties[0]['d:Title'][0];
        const titleValue = titleEntry.hasOwnProperty('_') ? titleEntry['_'] : titleEntry;
        const aguascalientesValue = mProperties[0]['d:Aguascalientes'][0]['_'];
        const AlthofenValue = mProperties[0]['d:Althofen'][0]['_'];
        const austinValue = mProperties[0]['d:Austin'][0]['_'];
        const FuyongValue = mProperties[0]['d:Fuyong'][0]['_'];
        const JaguariunaValue = mProperties[0]['d:Jaguariuna'][0]['_'];
        const ManausValue = mProperties[0]['d:Manaus'][0]['_'];
        const PenangP1Value = mProperties[0]['d:Penang_x0028_P1_x0029_'][0]['_'];
        const PenangP5Value = mProperties[0]['d:Penang_x0028_P5_x0029_'][0]['_'];
        const SorocabaValue = mProperties[0]['d:Sorocaba'][0]['_'];
        const SuHongValue = mProperties[0]['d:SuHong'][0]['_'];
        const SuQianValue = mProperties[0]['d:SuQian'][0]['_'];
        const TczewValue = mProperties[0]['d:Tczew'][0]['_'];
        const ZhuhaiCECValue = mProperties[0]['d:Zhuhai_x0028_CEC_x0029_'][0]['_'];
        const ZhuhaiLSValue = mProperties[0]['d:Zhuhai_x0028_LifeStyle_x0029_'][0]['_'];
        const TotalValue = mProperties[0]['d:Total'][0]['_'];

        // Agregar un objeto con los valores de "Aguascalientes", "Austin" y "Title" al arreglo valuesArray
        valuesArray.push({Title: titleValue , Aguascalientes: aguascalientesValue, Althofen: AlthofenValue, Austin: austinValue, Fuyong: FuyongValue, Jaguariuna: JaguariunaValue, Manaus: ManausValue, PenangP1: PenangP1Value, PenangP5: PenangP5Value, Sorocaba: SorocabaValue, SuHong: SuHongValue, SuQian: SuQianValue, Tczew: TczewValue, ZhuhaiCEC: ZhuhaiCECValue, ZhuhaiLS: ZhuhaiLSValue, Total: TotalValue });
      }
    }
  }

  return valuesArray;
}

// Llamar a la función para obtener los valores de "Aguascalientes", "Austin" y "Title"
const values = findValues(data);

// Imprimir los valores de "Aguascalientes", "Austin" y "Title" si se encontraron
if (values.length > 0) {
  console.log('Valores de Title, Aguascalientes, Althofen, Austin, Fuyong, Jaguariuna, Manaus, PenangP1, PenangP5, Sorocaba, SuHong, SuQian, Tczew , Zhuhai(CEC), Zhuhai(LifeStyle), Total:', values);
} else {
  console.log('No se encontraron propiedades Title, Aguascalientes, Althofen, Austin, Fuyong, Jaguariuna, Manaus, PenangP1, PenangP5, Sorocaba, SuHong, SuQian, Tczew , Zhuhai(CEC), Zhuhai(LifeStyle), Total en el objeto JSON.');
}


// Convertir el resultado a formato JSON
const jsonData = JSON.stringify(values, null, 2);

// Especificar la ruta y el nombre del archivo donde se guardará el resultado
const filePath = 'C://ConvertSharepoint//JSON/resultadoProduccion.json';

// Guardar el resultado en el archivo
fs.writeFile(filePath, jsonData, (err) => {
  if (err) {
    console.error('Error al guardar el archivo:', err);
  } else {
    console.log('Archivo guardado exitosamente en:', filePath);
  }
});





//anteriormente al hacer esto se tiene que instalar el paquete en node.js con el comando npm install mssql

//vamos a realizar una conexion e insertar datos en la tabla de sql
const sql = require('mssql');

// Configurar los datos de conexión a SQL Server
const config = {
  server: 'SACNTE1863.americas.ad.flextronics.com',
  user: 'sqlSPCWS',
  password: 'WS.sql123',
  database: 't_SPC_Project_221_2nd',
  options: {
    encrypt: true, // Habilitar el cifrado
    trustServerCertificate: true, // Desactivar la verificación del certificado
  },
};


//Ahora trabajar con los parsers y funcionalidad en conjunto del sql

async function insertValuesToSql(values) {
  try {
    // Conectarse a la base de datos
    await sql.connect(config);

    // Borrar todos los elementos de la tabla "linksharepoint"
    const deleteQuery = 'DELETE FROM linksharepoint';
    await sql.query(deleteQuery);

    // Iterar sobre los valores y ejecutar las consultas INSERT
    for (const value of values) {
      const { Aguascalientes, Austin, Title, Althofen, Fuyong, Jaguariuna, Manaus, PenangP1, PenangP5, Sorocaba, SuHong, SuQian, Tczew, ZhuhaiCEC, ZhuhaiLS, Total } = value;

      // Consulta SQL para insertar los valores en la tabla "linksharepoint" y hacer parser de los valores
      const insertQuery = `
      INSERT INTO linksharepoint 
      (Aguascalientes, Austin, Title, Althofen, Fuyong, Jaguariuna, Manaus, PenangP1, PenangP5, Sorocaba, SuHong, SuQian, Tczew, Zhuhai_CEC, Zhuhai_LifeStyle, Total)
      VALUES
      (@Aguascalientes, @Austin, @Title, @Althofen, @Fuyong, @Jaguariuna, @Manaus, @PenangP1, @PenangP5, @Sorocaba, @SuHong, @SuQian, @Tczew, @ZhuhaiCEC, @ZhuhaiLS, @Total)
      `;

      // Crear una declaración preparada
      const preparedStatement = new sql.PreparedStatement();
      preparedStatement.input('Aguascalientes', sql.NVarChar);
      preparedStatement.input('Austin', sql.NVarChar);
      preparedStatement.input('Title', sql.NVarChar);
      preparedStatement.input('Althofen', sql.NVarChar);
      preparedStatement.input('Fuyong', sql.NVarChar);
      preparedStatement.input('Jaguariuna', sql.NVarChar);
      preparedStatement.input('Manaus', sql.NVarChar);
      preparedStatement.input('PenangP1', sql.NVarChar);
      preparedStatement.input('PenangP5', sql.NVarChar);
      preparedStatement.input('Sorocaba', sql.NVarChar);
      preparedStatement.input('SuHong', sql.NVarChar);
      preparedStatement.input('SuQian', sql.NVarChar);
      preparedStatement.input('Tczew', sql.NVarChar);
      preparedStatement.input('ZhuhaiCEC', sql.NVarChar);
      preparedStatement.input('ZhuhaiLS', sql.NVarChar);
      preparedStatement.input('Total', sql.NVarChar);

      // Ejecutar la declaración preparada
      await preparedStatement.prepare(insertQuery);
      await preparedStatement.execute(value);
      await preparedStatement.unprepare();
    }

    console.log('Valores insertados correctamente en SQL Server.');
  } catch (err) {
    console.error('Error al insertar los valores en SQL Server:', err);
  } finally {
    // Cerrar la conexión a la base de datos
    sql.close();
  }
}

// Llamar a la función para insertar los valores en SQL Server
insertValuesToSql(values);