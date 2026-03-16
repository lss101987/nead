const projetos = [

{
titulo: "Sistema de Cadastro",
descricao: "Sistema web para cadastro de usuários utilizando HTML, CSS e JavaScript.",
link: "#"
},

{
titulo: "Dashboard Administrativo",
descricao: "Painel administrativo com gráficos e interface moderna.",
link: "#"
},

{
titulo: "Landing Page",
descricao: "Página de apresentação responsiva para empresa.",
link: "#"
}

];


const container = document.getElementById("lista-projetos");


projetos.forEach(projeto => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<h3>${projeto.titulo}</h3>
<p>${projeto.descricao}</p>
<a href="${projeto.link}" target="_blank">Ver projeto</a>
`;

container.appendChild(card);

});
