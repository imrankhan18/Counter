function display() {
    document.getElementById(
      "d"
    ).innerText = `<button onclick="inc()">increase</button>
         <input id="g" type="number" min="0" value="0" >     
         <button onclick="dec()">increase</button>    
         <button onclick="display()">decrease</button>`;
  }