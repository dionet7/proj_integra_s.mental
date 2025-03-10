document.addEventListener("DOMContentLoaded", function () {
    document.body.style.background = "linear-gradient(to right, #A8E6CF, #DCEDC1)";
    document.body.style.backgroundAttachment = "fixed";
    
    // Estilização do fórum centralizado
    const forumContainer = document.querySelector(".forum-container");
    if (forumContainer) {
        forumContainer.style.maxWidth = "800px";
        forumContainer.style.margin = "50px auto";
        forumContainer.style.padding = "20px";
        forumContainer.style.background = "white";
        forumContainer.style.borderRadius = "10px";
        forumContainer.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    }

       // Validação do formulário de cadastro
       document.querySelector("form").addEventListener("submit", function (event) {
        let valid = true;

        // Verificar nome de usuário (mínimo 3 caracteres)
        const username = document.getElementById("username");
        if (username.value.length < 3) {
            username.style.border = "2px solid red";
            alert("O nome de usuário deve ter pelo menos 3 caracteres.");
            valid = false;
        } else {
            username.style.border = "";
        }

        // Verificar e-mail (deve conter @)
        const email = document.getElementById("email");
        if (!email.value.includes("@")) {
            email.style.border = "2px solid red";
            alert("O e-mail deve conter o símbolo '@'.");
            valid = false;
        } else {
            email.style.border = "";
        }

        // Verificar senha (mínimo 8 caracteres)
        const password = document.getElementById("password");
        if (password.value.length < 8) {
            password.style.border = "2px solid red";
            alert("A senha deve ter pelo menos 8 caracteres.");
            valid = false;
        } else {
            password.style.border = "";
        }

        if (!valid) {
            event.preventDefault();
        }
    });
    // Verificar se as senhas são iguais
    const confirmPassword = document.getElementById("confirm-password");
    if (password.value !== confirmPassword.value) {
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
        alert("As senhas não coincidem. Por favor, digite novamente.");
        valid = false;
    } else {
        password.style.border = "";
        confirmPassword.style.border = "";
    }

    if (!valid) {
        event.preventDefault();
    }
});
     // Função para abrir o quiz
    window.abrirQuiz = function () {
        const perguntas = [
            { pergunta: "Com que frequência você se sente ansioso ou estressado?", opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"] },
            { pergunta: "Como você avalia sua qualidade de sono?", opcoes: ["Excelente", "Boa", "Regular", "Ruim", "Péssima"] },
            { pergunta: "Com que frequência você se sente feliz ou satisfeito?", opcoes: ["Sempre", "Frequentemente", "Às vezes", "Raramente", "Nunca"] },
            { pergunta: "Você sente que tem apoio emocional de amigos ou familiares?", opcoes: ["Sempre", "Frequentemente", "Às vezes", "Raramente", "Nunca"] }
        ];
        
        let respostas = [];
        
        for (let i = 0; i < perguntas.length; i++) {
            let resposta = prompt(`${perguntas[i].pergunta}\n\n${perguntas[i].opcoes.map((op, idx) => `${idx + 1}. ${op}`).join("\n")}`);
            if (resposta === null) {
                alert("Quiz cancelado.");
                return;
            }
            respostas.push(parseInt(resposta));
        }
        
        const pontuacao = respostas.reduce((acc, curr) => acc + curr, 0);
        let resultado;
        
        if (pontuacao <= 6) resultado = "Sua saúde mental parece estar ótima! Continue cuidando bem de si mesmo.";
        else if (pontuacao <= 12) resultado = "Sua saúde mental está boa, mas pode haver espaço para melhorias.";
        else if (pontuacao <= 18) resultado = "Sua saúde mental está moderada. Considere buscar atividades relaxantes ou apoio.";
        else resultado = "Sua saúde mental parece estar em risco. É importante procurar ajuda profissional.";
        
        alert(resultado);
    };
    
    // Função para criar um novo post no fórum
    window.criarPost = function () {
        const titulo = document.getElementById("post-titulo").value;
        const conteudo = document.getElementById("post-conteudo").value;
        if (titulo.trim() === "" || conteudo.trim() === "") {
            alert("Preencha todos os campos!");
            return;
        }
        
        const forumPosts = document.getElementById("forum-posts");
        const novoPost = document.createElement("div");
        novoPost.className = "forum-post";
        novoPost.innerHTML = `<div class='post-title'>${titulo}</div><div class='post-content'>${conteudo}</div>`;
        
        forumPosts.appendChild(novoPost);
        
        document.getElementById("post-titulo").value = "";
        document.getElementById("post-conteudo").value = "";
    };
});
