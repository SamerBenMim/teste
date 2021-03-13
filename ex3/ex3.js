button = document.getElementById("button");
na = document.getElementById("nom");
content = document.getElementById("content");
var id = 16;
cont = document.getElementById("C");
button.addEventListener('click', function() {
    var node = document.createElement("DIV");
    var textNode = document.createTextNode(na.value);
    var textNode2 = document.createTextNode(content.value);
    var textNode3 = document.createTextNode(" : ");
    var trash = document.createElement("IMG");
    trash.setAttribute('src', "trash.png");
    trash.setAttribute('width', "20px");
    trash.setAttribute('class', 'trash')
    node.setAttribute('class', 'todo');
    trash.setAttribute('id', id);
    trash.addEventListener("click", function() {
        C.removeChild(cont.childNodes[trash.id]);
        id--;
    })
    node.appendChild(textNode);
    node.appendChild(textNode3);
    node.appendChild(textNode2);
    node.appendChild(trash);
    id++;
    C.appendChild(node);

})
