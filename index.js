function carregarDadosacessorios() {
  fetch('/catalogo/acessorio.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutosacessorios(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.availability);
          }

      })

}


function preencherProdutosacessorios(id, title, description, link, image_link) {

  var card = document.createElement("div");
  // card.style.width = "18rem";
  // card.style.height = "0rem";
  card.className = "card";
  var imagem = document.createElement("img");
  imagem.src = image_link;
  imagem.className = "card-img-top";
  var card1 = document.createElement("div");
  card1.className = "card-body";
  var titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = title;
  var descricao = document.createElement("p");
  descricao.className = "card-text"
  descricao.textContent = description.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR NO SITE";
  botao.target = "_blank"
  var codigo = document.createElement("p");
  codigo.textContent = "cód." + id.replace("GR", " ");
  codigo.style.marginRight = "10px";
  var espaco = document.createElement("div");
  espaco.style.display = "flex";
  espaco.style.alignSelf = "center";

  card.appendChild(imagem);
  card.appendChild(card1);
  card.appendChild(titulo);
  card.appendChild(descricao);
  espaco.appendChild(codigo);
  espaco.appendChild(botao);
  card.appendChild(espaco)
  
 

  document.querySelector(".acessorios").appendChild(card);
}


function carregarDadosferramentas() {
  fetch('/catalogo/ferramentas.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutosferramentas(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY);
          }

      })

}


function preencherProdutosferramentas(id, title, description, link, image_link, body) {

  var card = document.createElement("div");
  // card.style.width = "18rem";
  // card.style.height = "0rem";
  card.className = "card";
  var imagem = document.createElement("img");
  imagem.src = image_link;
  imagem.className = "card-img-top";
  var card1 = document.createElement("div");
  card1.className = "card-body";
  var titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = title;
  var descricao = document.createElement("p");
  descricao.className = "card-text"
  if(description == "[object Object]"){
    descricao.textContent = body.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
    }else {
  descricao.textContent = description.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR NO SITE";
  botao.target = "_blank"
  var codigo = document.createElement("p");
  codigo.textContent = "cód." + id.replace("GR", " ");
  codigo.style.marginRight = "10px";
  var espaco = document.createElement("div");
  espaco.style.display = "flex";
  espaco.style.alignSelf = "center";

  card.appendChild(imagem);
  card.appendChild(card1);
  card.appendChild(titulo);
  card.appendChild(descricao);
  espaco.appendChild(codigo);
  espaco.appendChild(botao);
  card.appendChild(espaco)
  
 

  document.querySelector(".ferramentas").appendChild(card);
}

function carregarDadoslubrificantes() {
  fetch('/catalogo/lubrificantes.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutoslubrificantes(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY);
          }

      })

}

function preencherProdutoslubrificantes(id, title, description, link, image_link, abody, ) {
  var card = document.createElement("div");
  // card.style.width = "18rem";
  // card.style.height = "0rem";
  card.className = "card";
  var imagem = document.createElement("img");
  imagem.src = image_link;
  imagem.className = "card-img-top";
  var card1 = document.createElement("div");
  card1.className = "card-body";
  var titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = title;
  var descricao = document.createElement("p");
  descricao.className = "card-text"
  if(description == "[object Object]"){
    if(abody == "[object Object]"){
      descricao.textContent ="...";
    }else{
      descricao.textContent = abody.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ")//.substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR NO SITE";
  botao.target = "_blank"
  var codigo = document.createElement("p");
  codigo.textContent = "cód." + id.replace("GR", " ");
  codigo.style.marginRight = "10px";
  var espaco = document.createElement("div");
  espaco.style.display = "flex";
  espaco.style.alignSelf = "center";

  card.appendChild(imagem);
  card.appendChild(card1);
  card.appendChild(titulo);
  card.appendChild(descricao);
  espaco.appendChild(codigo);
  espaco.appendChild(botao);
  card.appendChild(espaco)
  
 

  document.querySelector(".lubrificantes").appendChild(card);
}

function carregarDadosmaquinas() {
  fetch('/catalogo/maquinas.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutosmaquinas(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutosmaquinas(id, title, description, link, image_link, abody, ) {
  var card = document.createElement("div");
  // card.style.width = "18rem";
  // card.style.height = "0rem";
  card.className = "card";
  var imagem = document.createElement("img");
  imagem.src = image_link;
  imagem.className = "card-img-top";
  var card1 = document.createElement("div");
  card1.className = "card-body";
  var titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = title;
  var descricao = document.createElement("p");
  descricao.className = "card-text"
  if(description == "[object Object]"){
    if(abody == "[object Object]"){
      descricao.textContent ="...";
    }else{
      descricao.textContent = abody.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR NO SITE";
  botao.target = "_blank"
  var codigo = document.createElement("p");
  codigo.textContent = "cód." + id.replace("GR", " ");
  codigo.style.marginRight = "10px";
  var espaco = document.createElement("div");
  espaco.style.display = "flex";
  espaco.style.alignSelf = "center";

  card.appendChild(imagem);
  card.appendChild(card1);
  card.appendChild(titulo);
  card.appendChild(descricao);
  espaco.appendChild(codigo);
  espaco.appendChild(botao);
  card.appendChild(espaco)
  
 

  document.querySelector(".maquinas").appendChild(card);
}
function carregarDadospolimento() {
  fetch('/catalogo/polimento.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutospolimento(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutospolimento(id, title, description, link, image_link, abody, ) {
  var card = document.createElement("div");
  // card.style.width = "18rem";
  // card.style.height = "0rem";
  card.className = "card";
  var imagem = document.createElement("img");
  imagem.src = image_link;
  imagem.className = "card-img-top";
  var card1 = document.createElement("div");
  card1.className = "card-body";
  var titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = title;
  var descricao = document.createElement("p");
  descricao.className = "card-text"
  if(description == "[object Object]"){
    if(abody == "[object Object]"){
      descricao.textContent ="...";
    }else{
      descricao.textContent = abody.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR NO SITE";
  botao.target = "_blank"
  var codigo = document.createElement("p");
  codigo.textContent = "cód." + id.replace("GR", " ");
  codigo.style.marginRight = "10px";
  var espaco = document.createElement("div");
  espaco.style.display = "flex";
  espaco.style.alignSelf = "center";

  card.appendChild(imagem);
  card.appendChild(card1);
  card.appendChild(titulo);
  card.appendChild(descricao);
  espaco.appendChild(codigo);
  espaco.appendChild(botao);
  card.appendChild(espaco)
  
 

  document.querySelector(".polimento").appendChild(card);
}
function carregarDadosrepintura() {
  fetch('/catalogo/repintura.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutosrepintura(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutosrepintura(id, title, description, link, image_link, abody, ) {
  var card = document.createElement("div");
  // card.style.width = "18rem";
  // card.style.height = "0rem";
  card.className = "card";
  var imagem = document.createElement("img");
  imagem.src = image_link;
  imagem.className = "card-img-top";
  var card1 = document.createElement("div");
  card1.className = "card-body";
  var titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = title;
  var descricao = document.createElement("p");
  descricao.className = "card-text"
  if(description == "[object Object]"){
    if(abody == "[object Object]"){
      descricao.textContent ="...";
    }else{
      descricao.textContent = abody.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR NO SITE";
  botao.target = "_blank"
  var codigo = document.createElement("p");
  codigo.textContent = "cód." + id.replace("GR", " ");
  codigo.style.marginRight = "10px";
  var espaco = document.createElement("div");
  espaco.style.display = "flex";
  espaco.style.alignSelf = "center";

  card.appendChild(imagem);
  card.appendChild(card1);
  card.appendChild(titulo);
  card.appendChild(descricao);
  espaco.appendChild(codigo);
  espaco.appendChild(botao);
  card.appendChild(espaco)
  
 

  document.querySelector(".repintura").appendChild(card);
}

function carregarDadosskymix() {
  fetch('/catalogo/skymix.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutosskymix(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutosskymix(id, title, description, link, image_link, abody, ) {
  var card = document.createElement("div");
  // card.style.width = "18rem";
  // card.style.height = "0rem";
  card.className = "card";
  var imagem = document.createElement("img");
  imagem.src = image_link;
  imagem.className = "card-img-top";
  var card1 = document.createElement("div");
  card1.className = "card-body";
  var titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = title;
  var descricao = document.createElement("p");
  descricao.className = "card-text"
  if(description == "[object Object]"){
    if(abody == "[object Object]"){
      descricao.textContent ="...";
    }else{
      descricao.textContent = abody.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR NO SITE";
  botao.target = "_blank"
  var codigo = document.createElement("p");
  codigo.textContent = "cód." + id.replace("GR", " ");
  codigo.style.marginRight = "10px";
  var espaco = document.createElement("div");
  espaco.style.display = "flex";
  espaco.style.alignSelf = "center";

  card.appendChild(imagem);
  card.appendChild(card1);
  card.appendChild(titulo);
  card.appendChild(descricao);
  espaco.appendChild(codigo);
  espaco.appendChild(botao);
  card.appendChild(espaco)
  
 

  document.querySelector(".skymix").appendChild(card);
}
function carregarDadostintas() {
  fetch('/catalogo/tinta.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutostintas(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutostintas(id, title, description, link, image_link, abody, ) {
  var card = document.createElement("div");
  // card.style.width = "18rem";
  // card.style.height = "0rem";
  card.className = "card";
  var imagem = document.createElement("img");
  imagem.src = image_link;
  imagem.className = "card-img-top";
  var card1 = document.createElement("div");
  card1.className = "card-body";
  var titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = title;
  var descricao = document.createElement("p");
  descricao.className = "card-text"
  if(description == "[object Object]"){
    if(abody == "[object Object]"){
      descricao.textContent ="...";
    }else{
      descricao.textContent = abody.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;BODY text=#000000 bgColor=#ffffff&gt;", " ").substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR NO SITE";
  botao.target = "_blank"
  var codigo = document.createElement("p");
  codigo.textContent = "cód." + id.replace("GR", " ");
  codigo.style.marginRight = "10px";
  var espaco = document.createElement("div");
  espaco.style.display = "flex";
  espaco.style.alignSelf = "center";

  card.appendChild(imagem);
  card.appendChild(card1);
  card.appendChild(titulo);
  card.appendChild(descricao);
  espaco.appendChild(codigo);
  espaco.appendChild(botao);
  card.appendChild(espaco)
  
 

  document.querySelector(".tintas").appendChild(card);
}

function carregarDadoslimpeza() {
  fetch('/catalogo/limpeza.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutoslimpeza(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutoslimpeza(id, title, description, link, image_link, abody, ) {
  var card = document.createElement("div");
  // card.style.width = "18rem";
  // card.style.height = "0rem";
  card.className = "card";
  var imagem = document.createElement("img");
  imagem.src = image_link;
  imagem.className = "card-img-top";
  var card1 = document.createElement("div");
  card1.className = "card-body";
  var titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = title;
  var descricao = document.createElement("p");
  descricao.className = "card-text"
  if(description == "[object Object]"){
    if(abody == "[object Object]"){
      descricao.textContent ="...";
    }else{
      descricao.textContent = abody.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;P&gt;&lt;SPAN initial?? text-decoration-color: initial; text-decoration-style: text-decoration-thickness: 0px; -webkit-text-stroke-width: normal; font-variant-caps: font-variant-ligatures: TEXT-INDENT: rgb(255,255,255); BACKGROUND-COLOR: LETTER-SPACING: !important; inline DISPLAY: 2; WIDOWS: ORPHANS: FONT-STYLE: rgb(102,102,102); COLOR: 400; FONT-WEIGHT: none; FLOAT: TEXT-TRANSFORM: WORD-SPACING: WHITE-SPACE: sans-serif; Arial, Helvetica, Neue?, ?Helvetica FONT-FAMILY: 14px; FONT-SIZE:&gt;MULTICAR Limpa Tudo Aroma Car &lt;BR&gt;", " ").replace("&lt;BR&gt;&lt;/SPAN&gt;&lt;/P&gt;&lt;/BODY&gt;", " ").substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.replace("&lt;BODY text=#a0a0a0 bgColor=#f0f0f0&gt;", " ").replace("&lt;P&gt;&lt;SPAN initial?? text-decoration-color: initial; text-decoration-style: text-decoration-thickness: 0px; -webkit-text-stroke-width: normal; font-variant-caps: font-variant-ligatures: TEXT-INDENT: rgb(255,255,255); BACKGROUND-COLOR: LETTER-SPACING: !important; inline DISPLAY: 2; WIDOWS: ORPHANS: FONT-STYLE: rgb(102,102,102); COLOR: 400; FONT-WEIGHT: none; FLOAT: TEXT-TRANSFORM: WORD-SPACING: WHITE-SPACE: sans-serif; Arial, Helvetica, Neue?, ?Helvetica FONT-FAMILY: 14px; FONT-SIZE:&gt;MULTICAR Limpa Tudo Aroma Car &lt;BR&gt;", " ").replace("&lt;BR&gt;&lt;/SPAN&gt;&lt;/P&gt;&lt;/BODY&gt;", " ").substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR NO SITE";
  botao.target = "_blank"
  var codigo = document.createElement("p");
  codigo.textContent = "cód." + id.replace("GR", " ");
  codigo.style.marginRight = "10px";
  var espaco = document.createElement("div");
  espaco.style.display = "flex";
  espaco.style.alignSelf = "center";

  card.appendChild(imagem);
  card.appendChild(card1);
  card.appendChild(titulo);
  card.appendChild(descricao);
  espaco.appendChild(codigo);
  espaco.appendChild(botao);
  card.appendChild(espaco)
  
 

  document.querySelector(".produtoslimpeza").appendChild(card);
}
carregarDadoslimpeza();
carregarDadospolimento();
carregarDadosrepintura();
carregarDadostintas();
carregarDadosskymix();
carregarDadosferramentas();
carregarDadosacessorios();
carregarDadosmaquinas();
carregarDadoslubrificantes();


// fetch('/catalogo/produtos.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

  