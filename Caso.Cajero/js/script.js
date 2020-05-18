class Usuario{
    constructor(user, clave){
         this.user = user;
         this.clave = clave;
    };
    validar(){
        var x;
        if(this.user=='juancampos' && this.clave=='12345678'){
             x = 1;
        }else{
            x = 0;
        }
        return x;
    };
};
var c = 0;
function login(){
    var u = new Usuario(
        document.getElementById("user").Value,
        document.getElementById("pass").Value
    )
    if(u.validar()==1){
        limpiar();
        alert("Bienvenido: "+u.user)
        c = 0;
    }else{
        c++;
        alert("Intentos: "+c);
        limpiar();
        if(c==3){
            desabilitar();
        }
    }
}
function desabilitar(){
    document.getElementById("user").disabled = true;
    document.getElementById("pass").disabled = true;
    document.getElementById("boton").disabled = true;
}
function limpiar(){
    document.getElementById("user").Value="";
    document.getElementById("pass").Value="";
    document.getElementById("user").focus();
}
