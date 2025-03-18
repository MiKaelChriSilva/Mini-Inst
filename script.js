document.getElementById('postButton').addEventListener('click', function() {
    const postContent = document.getElementById('postContent').value;
    if (postContent) {
        const postSection = document.getElementById('posts');
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.textContent = postContent;
        postSection.prepend(newPost);
        document.getElementById('postContent').value = ''; // Limpa o campo de texto
    } else {
        alert('Por favor, escreva algo antes de publicar.');
    }
});
