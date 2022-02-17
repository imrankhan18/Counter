function increment() {
  var v = document.getElementById("g").value;
  v++;
  document.getElementById("g").value = v;
}
function decrement() {
  var v = document.getElementById("g").value;
  if (v != 0) {
    v--;
    document.getElementById("g").value = v;
  }
}
function display() {
    document.getElementById(
      "d"
    ).innerText = `<button onclick="increase()">increase</button>
         <input id="g" type="number" min="0" value="0" >     
         <button onclick="decrease()">increase</button>    
         <button onclick="display()">decrease</button>`;
  }
