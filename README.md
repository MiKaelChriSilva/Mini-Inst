<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Mini Inst</title>
</head>
<body>
    <header>
        <h1>Mini Inst</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Explorar</a></li>
                <li><a href="#">Notificações</a></li>
                <li><a href="#">Perfil</a></li>
            </ul>
        </nav>    
    </header>


    <main>
        <section class="post-form">
        <textarea id="postContent" placeholder="O que você está pensando?"></textarea>
        <button id="postButton">Publicar</button>
        </section>
        <section id="posts">
            <!-- Os posts serão adicionados aqui -->
        </section>
    </main>    
    <script src="script.js"></script>
</body>
</html>

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
