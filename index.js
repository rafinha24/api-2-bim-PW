function encurtarUrl() {
  var longUrl = document.getElementById("caixa1").value;
  var customName = document.getElementById("caixa2").value;
  var apiUrl = https://ulvis.net/api.php?url=${longUrl}&custom=${customName}&private=1;;

  fetch (apiUrl) .then((response) => response.xml(<url> ulvis.net/onomecustomizado/ </url>))
    
    .then(data => {
      document.getElementById("caixa2").value = data;
    })
    .catch(error => console.error("Erro ao consultar URL:", error));

  }