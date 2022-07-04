
var db_contatos_inicial = {
    "data": [
        
    ]
}


var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};


function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {

    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "telefone" : contato.telefone,
        "email" : contato.email,
        "cidade" : contato.cidade,
        "nomepet1": contato.nomepet1,
        "categoria": contato.categoriaPet,
        "nomepet2": contato.nomepet2


    };


    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {

    let index = db.data.map(obj => obj.id).indexOf(id);


    db.data[index].nome = contato.nome,
    db.data[index].telefone = contato.telefone,
    db.data[index].email = contato.email,
    db.data[index].cidade = contato.cidade,
    db.data[index].nomepet1 = contato.nomepet1,
    db.data[index].categoria = contato.categoriaPet,
    db.data[index].nomepet2 = contato.nomepet2


    displayMessage("Contato alterado com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    

    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}