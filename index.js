function carregarDados3m() {
  fetch('/catalogo/produtos3m.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutos3m(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.availability);
          }

      })

}


function preencherProdutos3m(id, title, description, link, image_link) {

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
  botao.textContent = "ABRIR SITE";
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
  
 

  document.querySelector(".produtos3m").appendChild(card);
}


function carregarDados2001() {
  fetch('/catalogo/produtos2001.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutos2001(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY);
          }

      })

}


function preencherProdutos2001(id, title, description, link, image_link, body) {

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
    descricao.textContent = body.substring(0, 100) + "...";
    }else {
  descricao.textContent = description.substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR SITE";
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
  
 

  document.querySelector(".produtos2001").appendChild(card);
}

function carregarDadosanjo() {
  fetch('/catalogo/produtosanjo.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutosanjo(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY);
          }

      })

}

function preencherProdutosanjo(id, title, description, link, image_link, abody, ) {
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
      descricao.textContent = abody//.substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR SITE";
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
  
 

  document.querySelector(".produtosanjo").appendChild(card);
}

function carregarDadoscentral() {
  fetch('/catalogo/produtoscentralsul.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutoscentral(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutoscentral(id, title, description, link, image_link, abody, ) {
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
      descricao.textContent = abody.substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR SITE";
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
  
 

  document.querySelector(".produtoscentral").appendChild(card);
}
function carregarDadosbrastudo() {
  fetch('/catalogo/brastudo.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutosbrastudo(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutosbrastudo(id, title, description, link, image_link, abody, ) {
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
      descricao.textContent = abody.substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR SITE";
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
  
 

  document.querySelector(".produtosbrastudo").appendChild(card);
}
function carregarDadosaromacar() {
  fetch('/catalogo/produtosaromacar.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutosaromacar(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutosaromacar(id, title, description, link, image_link, abody, ) {
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
      descricao.textContent = abody.substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR SITE";
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
  
 

  document.querySelector(".produtosaromacar").appendChild(card);
}

function carregarDadoscadillac() {
  fetch('/catalogo/produtoscadillac.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutoscadillac(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutoscadillac(id, title, description, link, image_link, abody, ) {
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
      descricao.textContent = abody.substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR SITE";
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
  
 

  document.querySelector(".produtoscadillac").appendChild(card);
}
function carregarDadosdiversos() {
  fetch('/catalogo/produtosdiversos.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutosdiversos(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutosdiversos(id, title, description, link, image_link, abody, ) {
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
      descricao.textContent = abody.substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR SITE";
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
  
 

  document.querySelector(".produtosdiversos").appendChild(card);
}
function carregarDadosautoamerica() {
  fetch('/catalogo/produtosautoamerica.json')
      .then((res) => res.json())
      .then((res) => {
          for (produto of res.rss.channel.item) {
              preencherProdutosautoamerica(produto.id, produto.title, produto.description, produto.link, produto.image_link, produto.description.BODY );
          }

      })

}

function preencherProdutosautoamerica(id, title, description, link, image_link, abody, ) {
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
      descricao.textContent = abody.substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR SITE";
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
  
 

  document.querySelector(".produtosautoamerica").appendChild(card);
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
      descricao.textContent = abody.substring(0, 100) + "...";
    }
  }else{
  descricao.textContent = description.substring(0, 100) + "...";
  }
  var botao = document.createElement("a");
  botao.href = link;
  botao.className = "btn btn-success";
  botao.textContent = "ABRIR SITE";
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
carregarDados3m();
carregarDados2001();
carregarDadosanjo();
carregarDadoscentral();
carregarDadosbrastudo();
carregarDadosaromacar();
carregarDadoscadillac();
carregarDadosdiversos();
carregarDadosautoamerica();


// fetch('/catalogo/produtos.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

  