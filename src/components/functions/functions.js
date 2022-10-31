
const alfabetoUp = [ 'A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const alfabetoLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const simbolos = ['!','#','$',"<","&","*",'/',":",";","(",")","@","~","+","<",">","?","|","="];

let password = '';

 // parâtetro é tamanho da senha do usuário

const GerarSenhaAleatoria = (passwordLenght) => {

    // a senha como o usuário no definiu ainda começa com zero
    // então enquanto a variável password for menor que o tamanho da senha que o usuário quer 
    //vamos percorrer um loop
    while(password.length <= passwordLenght){

    
        const GeradorDeLowerLetters = Math.floor(Math.random() * alfabetoLower.length); //sortear uma letra maiúscula no meio do array

        const randomNumber  = Math.floor( Math.random() * 10) //criar números de 0 a 9;

        const randomUpLetters = Math.floor( Math.random() * alfabetoUp.length) //sortear uma letra minúscula ...

        const randomSimbolos = Math.floor( Math.random() * simbolos.length) //sortear um simbolo

        //enquanto o loop for verdade acrescenta mais um caracterie para password
        password += `${alfabetoLower[GeradorDeLowerLetters]}${simbolos[randomSimbolos]}${alfabetoUp[randomUpLetters]}${randomNumber}`;
    
    }
    return password
}

console.log(GerarSenhaAleatoria(10))
