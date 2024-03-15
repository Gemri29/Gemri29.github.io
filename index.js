function change(){
    document.getElementById("homebox3").style.background = "url('imagesh3/gyaradosf.gif') no-repeat center/cover";
    document.getElementById("text3").innerHTML = "";
    document.getElementById("yesbtn2").remove();
    document.getElementById("nobtn2").remove();

}
 function changeno(){
    document.getElementById("homebox3").style.background = "url('imagesh3/dedenne.gif') no-repeat center/cover";
    document.getElementById("text3").innerHTML = "Why?"
    document.getElementById("yesbtn2").remove();
    document.getElementById("nobtn2").remove();
 }

const search = () => {
   const searchbox = document.getElementById("search-item").value.toUpperCase();
   const storeitems = document.getElementById("pokemon-list")
   const product = document.querySelectorAll(".pokemons") 
   const pname = storeitems.getElementsByTagName("h5")

   for (var i = 0; i < pname.length; i++){
      let match = product[i].getElementsByTagName('h5')[0];

      if (match){
         let textvalue = match.textContent || match.innerHTML

         if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
            product[i].style.display = "";
         } 
         else {
            product[i].style.display = "none";
         }
      }
   }
}