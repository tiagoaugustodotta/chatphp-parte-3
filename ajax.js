document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        console.log(result); // Exibe o resultado no console (ou atualize o chat)
        // Atualize o chat com a nova imagem, por exemplo:
        // document.querySelector('.chat-box').innerHTML += `<img src='uploads/${result}'>`;
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
