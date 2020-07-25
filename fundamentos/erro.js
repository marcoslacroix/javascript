function trataarErroELancar(erro) {
    throw new Error("...");
}

function imprimirNomeGritado(obj) {
   try {
       console.log(obj.name.toUpperCase() + "!!!");
   }catch (e) {
        trataarErroELancar(e);
   }finally {
       console.log("Close")
   }
}

const obj = {nome: "Roberto"}
imprimirNomeGritado(obj);