//event listeners

let plusButton = document.getElementById('add');
plusButton.addEventListener('click', add);



input = 1;

let subButton = document.getElementById('sub');
subButton.addEventListener('click', sub);

let total = 0;

render();

function add(){

var input = document.getElementById('data').value;
total = parseInt(input) + total ;
render();
};

function sub(){
   
var input = document.getElementById('data').value;
total =  total - parseInt(input) ;
render();
    };
    
function render(){
    document.getElementById('total').textContent = total;

}