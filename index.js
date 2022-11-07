//Importando biblioteca axios

var axios = require('axios');




// Consumindo API 

axios.get("http://87.85.164.118:3030/veiculos").then(function(data){
    console.log(data);
}).catch(function(error){   
    if(error){
        console.log(error)
    }
});

//Consumindo API 2

axios.get("http://187.85.164.118:3030/fotosEstudio").then(function(fotos){
    console.log(fotos.data);
}).catch(function(error){
    if(error){
        console.log(error)
    }
});

//Entregar uma lista de IDs e Placas da API 1 onde Id_Foto_Estudio_Aberto e Id_Foto_Estudio_Aberto_Avarias está null na API 2.





/*const resposeApi = await  axios.get('http://187.85.164.118:3030/veiculos')
const responseApi2 = await axios.get('http://187.85.164.118:3030/fotoEstudio')

console.log(responseApi1, responseApi2)/*


/*async function get dados() {
    const responseApi1 = await axios.get('http://187.85.164.118:3030/veiculos')
    const responseApi2 = await axios.get('http://187.85.164.118:3030/fotoEstudio')
}*/

/*async function main() {
    const urls = [
      "http://187.85.164.118:3030/veiculos",
      "http://187.85.164.118:3030/fotosEstudio",
    ];
    const requestResponsesPromises = urls.map((url) => fetch(url));
    const requestResponses = await Promise.all(requestResponsesPromises);
    const promiseJsons = requestResponses.map((res) => res.json());
    const jsons = await Promise.all(promiseJsons);
    const veiculos = jsons[0];
    const fotos = jsons[1];
    const veiculosFiltrados = veiculos.filter((veiculo) =>
      fotos.some(
        (foto) =>
          foto.Id_Veiculo === veiculo.Id_Veiculo &&
          foto.Id_Foto_Estudio_Aberto_Avarias === null &&
          foto.Id_Foto_Estudio_Aberto === null
      )
    );
  }
  
  main();
*/
