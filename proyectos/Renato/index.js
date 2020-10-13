console.log("estoy funcionando")

var nota1= prompt("ingresar nota 1")
var nota2= prompt("ingresar nota 2")
var nota3= prompt("ingresar nota 3")

var promedio= ( parseint(nota1)+parseint(nota2)+parseint(nota3))/3

console.log("su promedio es: " + promedio)

function contar(){
	for (var contador = 1; contador<=10;contador++){
		console.log(contador)
	}
	console.log("listo o no alla voy")
}

function imprimirdoble(){
	for (var contador = 1; contador <=20; contador++){
		console.log("el doble de" + contador + "es" + contador*2)
	}
} 
