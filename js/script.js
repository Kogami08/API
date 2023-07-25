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
const xmlFilePath = 'C://ConvertSharepoint//descarga (2).xml';

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
// Tu fragmento de JSON
const data = {
  "feed": {
    "$": {
      "xml:base": "https://flextronics365.sharepoint.com/sites/gbesixsigma/_api/",
      "xmlns": "http://www.w3.org/2005/Atom",
      "xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
      "xmlns:m": "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
      "xmlns:georss": "http://www.georss.org/georss",
      "xmlns:gml": "http://www.opengis.net/gml"
    },
    "id": [
      "941d1716-b0a4-4d84-9755-09d2bb57c67e"
    ],
    "title": [
      ""
    ],
    "updated": [
      "2023-07-25T14:54:43Z"
    ],
    "entry": [
      {
        "$": {
          "m:etag": "\"383\""
        },
        "id": [
          "86fed847-2c8a-4c36-af4c-8e3730421da2"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(2)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "2",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "2",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Big Data Analytics (ELK, Snowflake)"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-18T14:04:46Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-16T20:13:23Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "383.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "10dded51-c056-4151-a46f-6ecdf632d25f",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "15",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "72.86",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "5",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "90",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "5",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "5",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"422\""
        },
        "id": [
          "77ab04b6-b908-4efe-afdc-68adc4315229"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(3)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "3",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "3",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "FlexSPC"
                ],
                "d:Modified": [
                  {
                    "_": "2023-06-21T11:09:44Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-16T20:13:35Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "422.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "304bf408-2156-4c26-bc90-c6e9095be87a",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "94",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "99",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "92",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"413\""
        },
        "id": [
          "c1b1ab08-fda4-4d00-88f3-f114d5d38c9a"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(4)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "4",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "4",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "AR Enabled Flex Test & Diagnosis System: InspectAR"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-24T11:43:57Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-16T20:13:47Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "413.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "f8f404f3-6846-4fa9-8e60-e96a76429358",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "30",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "48.21",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "5",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "30",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "60",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"363\""
        },
        "id": [
          "774309a3-9111-4b8c-bcd7-fc0c05a1460c"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(5)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "5",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "5",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "LISA"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-10T15:43:00Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-16T20:13:58Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "28",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "363.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "011b6f2f-04c5-4c6f-b442-476a95c6a068",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "17.5",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "5",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "90",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"376\""
        },
        "id": [
          "515c2d91-a4ff-4f2b-ab14-d3a8fde1c70e"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(7)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "7",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "7",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "DL Training Process Improvement"
                ],
                "d:Modified": [
                  {
                    "_": "2023-06-19T11:33:04Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:06:53Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "376.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "be7900c6-9dcd-484e-b0b0-e186da36d3d6",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "95",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "99.64",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"385\""
        },
        "id": [
          "225c7013-6612-42c1-a48f-4a83bbdc68c9"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(9)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "9",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "9",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "GBS Smart HR Chatbot"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-17T14:02:18Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:09:50Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "385.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "87d6adac-1030-4bb2-8674-018c8747d1b1",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "85",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "40",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"469\""
        },
        "id": [
          "4f9aba57-688d-487b-a222-38a73ec7d0a1"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(10)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "10",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "10",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Autonomous Vehicles"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-17T14:02:18Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:10:33Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "469.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "e68b2485-731b-436b-b9ff-d5a6aadfa02c",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "60",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "87.14",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "10",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"405\""
        },
        "id": [
          "c79164df-0bf1-4b8d-923f-a1d9589f2241"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(12)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "12",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "12",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Sensor Modules / Devices"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-25T11:16:58Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:11:04Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "405.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "30a18a70-3cb4-4291-9667-21bd24b6dee0",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "60",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "89.64",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "70",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"677\""
        },
        "id": [
          "ba06bace-60ac-43a6-b055-1ea88cc112da"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(13)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "13",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "13",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  {
                    "_": "Collaborative / Industrial Robots ",
                    "$": {
                      "xml:space": "preserve"
                    }
                  }
                ],
                "d:Modified": [
                  {
                    "_": "2023-06-16T14:44:22Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:11:58Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "677.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "85b7e7cc-eeb0-4dbd-85df-d2399a8df805",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "60",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "91.79",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "25",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"412\""
        },
        "id": [
          "a0f3d353-c7cc-4282-83ce-0aa266d867ed"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(14)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "14",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "14",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "AI Vision Inspection"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-25T11:16:59Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:19:42Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "412.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "f0a4ef4c-9e86-46f6-890d-a6080db4ac29",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "60",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "55",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "25",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "20",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "90",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"546\""
        },
        "id": [
          "04ba63b9-828f-45c0-a887-77d3330c3b42"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(15)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "15",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "15",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "DDFAUT (Line)"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-25T12:21:14Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:20:01Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "546.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "de0bcc80-dee3-44d7-b0cf-b3116efa951b",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "73.71",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "57",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"367\""
        },
        "id": [
          "c053bee9-eb49-4b87-a872-3bacc29f5799"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(16)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "16",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "16",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Front end SMT Machines Programming using MSS Valor"
                ],
                "d:Modified": [
                  {
                    "_": "2023-06-16T14:44:23Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:20:14Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "367.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "f7796638-e96e-4697-8e8c-fe90a4c2da44",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "95.43",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "36",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"443\""
        },
        "id": [
          "ba3ead14-ff63-4b14-98f8-8b6936d9c1fb"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(17)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "17",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "17",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Engineering Change Management Process Optimization"
                ],
                "d:Modified": [
                  {
                    "_": "2023-06-16T14:44:24Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:20:28Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "443.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "631fbdff-43d8-44d3-b5ea-39bc9f81cb0e",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "89",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "63",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "81.64",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "90",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "90",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "64",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "88",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "88",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "89",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "67",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "90",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"1084\""
        },
        "id": [
          "dfe7304f-c7c2-4a57-bd75-6893219b7f07"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(18)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "18",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "18",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Digital Twin Technology"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-10T15:43:01Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:21:53Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "28",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "1084.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "dcd04f4e-e251-4648-8e8e-88541d11891b",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "95",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "80",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "69.64",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "90",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "70",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "70",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "70",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "80",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "70",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "80",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "70",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"398\""
        },
        "id": [
          "0596d09a-7640-4549-a6cc-a9c1b2c59c73"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(19)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "19",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "19",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Flex City - Zebra Vigilant"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-11T14:15:05Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:22:10Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "398.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "92043a08-1763-4a82-bc54-57a7cd94f26a",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "40",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "68.93",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "5",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "70",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"396\""
        },
        "id": [
          "e5865a14-1e3c-4efc-8383-a27d68be6825"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(21)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "21",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "21",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Flex Walk & Report"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-11T14:15:06Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:22:41Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "396.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "eae5b080-74b3-42e0-957a-74b0fa2c933c",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "77.86",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "90",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"388\""
        },
        "id": [
          "f5e984c3-8ebb-41e2-81c7-34a5d008b5d2"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(22)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "22",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "22",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Layered Process Audit (LPA Central)"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-10T15:43:01Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:23:03Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "28",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "388.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "15e7471d-c5a0-4d7c-b42b-3a64182787f9",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "90",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "60",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"379\""
        },
        "id": [
          "9aac54e6-006f-476c-9a32-ca74c9262db3"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(23)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "23",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "23",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Regional Performance Information Center (RPIC)"
                ],
                "d:Modified": [
                  {
                    "_": "2023-06-23T17:17:12Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:23:18Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "379.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "106c460a-4b5e-4734-bb90-b6fabc25c542",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "98.57",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "80",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"395\""
        },
        "id": [
          "056d39bc-e319-4d26-b415-55cc2779c7e6"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(24)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "24",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "24",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Supplier B2B Connectivity EDI/FSP/API"
                ],
                "d:Modified": [
                  {
                    "_": "2023-06-28T11:34:50Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:23:56Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "395.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "daa3da16-13e0-480a-8002-b8ff29462fcf",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "73",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "75.57",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "64",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "95",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "62",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "82",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "82",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"388\""
        },
        "id": [
          "bd2fe876-8fcb-4ffd-abc4-ccaac8b6c899"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(25)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "25",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "25",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Flex RPA"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-10T15:43:02Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:24:00Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "28",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "388.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "9ff65247-bd29-40eb-813c-deae2ae00c31",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "25",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "90",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "80",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "80",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"376\""
        },
        "id": [
          "9874efe8-557a-4ff9-a6a9-e27ec4c3d6a7"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(26)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "26",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "26",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Optical Character Recognition (OCR)"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-13T14:09:11Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:24:29Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "376.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "48826257-a224-496b-8b4d-9b4e514ef635",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "50.14",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "67",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "10",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "25",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"400\""
        },
        "id": [
          "5cdc4ded-3fdb-43c7-b3df-73e386f300c9"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(27)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "27",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "27",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Workforce Design - Mamut (Man and Machine Uptime)"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-13T14:09:11Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:24:42Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "400.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "f2196f0a-4700-4749-a932-9bcdc98f9c93",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "95",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "71.07",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"409\""
        },
        "id": [
          "43e11f25-d36f-47b8-99ae-ef3a9644a808"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(28)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "28",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "28",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Workforce Design - STATIS (Standard Time System)"
                ],
                "d:Modified": [
                  {
                    "_": "2023-06-30T19:37:14Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:24:56Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "42",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "409.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "c935c031-4f4a-410f-97ec-4005418501b7",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "99",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "93.71",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "33",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "80",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"390\""
        },
        "id": [
          "3759ffff-e911-41bc-9a6d-e18ff32105b7"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(29)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "29",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "29",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "Workforce Design - Predictor (Indirect Labor Planning)"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-11T14:15:07Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:26:24Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "390.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "cdd38c50-c18c-4ac4-87cf-9c1623cad289",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "91.43",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "80",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"366\""
        },
        "id": [
          "b24b6814-e4ec-4984-a11c-45b9cf60c93b"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(31)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "31",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "31",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "ePI - Electronic Process Instructions"
                ],
                "d:Modified": [
                  {
                    "_": "2023-06-16T14:44:28Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-28T23:27:10Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "366.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "0be8206c-1f74-432a-9d00-79a22ac75d25",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "75.36",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "80",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"2712\""
        },
        "id": [
          "bd83c450-f121-4953-b398-1dbac02e2794"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(32)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "32",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "32",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "z Total"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-25T12:21:18Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2022-11-29T16:04:16Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "1612",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "2712.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "b341b8d4-23d6-445c-ac5b-969bde9ba056",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "85",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "76",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "75",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "76",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "79",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "79",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "80",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "72",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "68",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "81",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "59",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "70",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "79",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "72",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "74",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"38\""
        },
        "id": [
          "dfa0e670-b74b-4fdf-9d94-3f2558328771"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(34)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "34",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "34",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "TRIRIGA"
                ],
                "d:Modified": [
                  {
                    "_": "2023-07-24T11:43:59Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2023-04-18T13:50:15Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "38.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "0520bdfc-e587-471c-baea-647eae21b1a4",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "33",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "50",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "6.71",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "10",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "1",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "m:etag": "\"28\""
        },
        "id": [
          "d475a700-f69e-4380-8efa-16bf5a9a4a62"
        ],
        "category": [
          {
            "$": {
              "term": "SP.Data.DigitalLeanProjectsListItem",
              "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
            }
          }
        ],
        "link": [
          {
            "$": {
              "rel": "edit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject",
              "type": "application/atom+xml;type=entry",
              "title": "FirstUniqueAncestorSecurableObject",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/FirstUniqueAncestorSecurableObject"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments",
              "type": "application/atom+xml;type=feed",
              "title": "RoleAssignments",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/RoleAssignments"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/AttachmentFiles",
              "type": "application/atom+xml;type=feed",
              "title": "AttachmentFiles",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/AttachmentFiles"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentType",
              "type": "application/atom+xml;type=entry",
              "title": "ContentType",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/ContentType"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/GetDlpPolicyTip",
              "type": "application/atom+xml;type=entry",
              "title": "GetDlpPolicyTip",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/GetDlpPolicyTip"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsHtml",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsHtml",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/FieldValuesAsHtml"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesAsText",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesAsText",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/FieldValuesAsText"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/FieldValuesForEdit",
              "type": "application/atom+xml;type=entry",
              "title": "FieldValuesForEdit",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/FieldValuesForEdit"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/File",
              "type": "application/atom+xml;type=entry",
              "title": "File",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/File"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folder",
              "type": "application/atom+xml;type=entry",
              "title": "Folder",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/Folder"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/LikedByInformation",
              "type": "application/atom+xml;type=entry",
              "title": "LikedByInformation",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/LikedByInformation"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentList",
              "type": "application/atom+xml;type=entry",
              "title": "ParentList",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/ParentList"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Properties",
              "type": "application/atom+xml;type=entry",
              "title": "Properties",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/Properties"
            }
          },
          {
            "$": {
              "rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/Versions",
              "type": "application/atom+xml;type=feed",
              "title": "Versions",
              "href": "Web/Lists(guid'd5b992a6-b28f-497f-9ff6-7616f5c9a53e')/Items(36)/Versions"
            }
          }
        ],
        "title": [
          ""
        ],
        "updated": [
          "2023-07-25T14:54:43Z"
        ],
        "author": [
          {
            "name": [
              ""
            ]
          }
        ],
        "content": [
          {
            "$": {
              "type": "application/xml"
            },
            "m:properties": [
              {
                "d:FileSystemObjectType": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:Id": [
                  {
                    "_": "36",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUri": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:ServerRedirectedEmbedUrl": [
                  ""
                ],
                "d:ID": [
                  {
                    "_": "36",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:ContentTypeId": [
                  "0x0100F179081438526B4CA52B5881355EFDA200C1893B53F9594E448A1C78FF487E6A63"
                ],
                "d:Title": [
                  "eWI - Electronic Work Instructions"
                ],
                "d:Modified": [
                  {
                    "_": "2023-06-16T14:44:30Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:Created": [
                  {
                    "_": "2023-05-22T13:45:11Z",
                    "$": {
                      "m:type": "Edm.DateTime"
                    }
                  }
                ],
                "d:AuthorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:EditorId": [
                  {
                    "_": "800",
                    "$": {
                      "m:type": "Edm.Int32"
                    }
                  }
                ],
                "d:OData__UIVersionString": [
                  "28.0"
                ],
                "d:Attachments": [
                  {
                    "_": "false",
                    "$": {
                      "m:type": "Edm.Boolean"
                    }
                  }
                ],
                "d:GUID": [
                  {
                    "_": "dd2dd8c8-4173-4a19-836c-13d8410a4c88",
                    "$": {
                      "m:type": "Edm.Guid"
                    }
                  }
                ],
                "d:ComplianceAssetId": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:Aguascalientes": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Austin": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Total": [
                  {
                    "_": "85.71",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Fuyong": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:SuHong": [
                  {
                    "_": "0",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Tczew": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_CEC_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Zhuhai_x0028_LifeStyle_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Althofen": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Jaguariuna": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P1_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Penang_x0028_P5_x0029_": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Sorocaba": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:Manaus": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ],
                "d:OData__ColorTag": [
                  {
                    "$": {
                      "m:null": "true"
                    }
                  }
                ],
                "d:SuQian": [
                  {
                    "_": "100",
                    "$": {
                      "m:type": "Edm.Double"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};


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

      // Consulta SQL para insertar los valores en la tabla "linksharepoint"
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