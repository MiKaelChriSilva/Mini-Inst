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

body{
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

header{
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 0 2px 5px rgb(0, 0, 0, 0.1);
}

h1{
    margin: 0;
    font-size: 24px;
}

nav ul{
    list-style: none;
    padding: 0;
}

nav ul li{
    display: inline;
    margin-right: 20px;
}

nav a{
    text-decoration: none;
    color: #333;
}

.post-form{
    padding: 20px;
    background-color: #ffffff;
    margin: 20px;
    border-radius: 5px;
}

textarea{
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}

#posts{
    margin: 20px;
}

.post{
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

