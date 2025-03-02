/*
MENÚ DE OPCIONES: DE CALCULADORA, DEBE MOSTRAR AL USUARIO LAS
OPCIONES POSIBLES Y ATRÁVES DEL CÓDIGO QUE ESCOJA EL USUARIO, DEBE
PERMITIRLE REALIZAR ESA OPRACION.
• CÁLCULO DE PROMEDIO DE NOTAS (4 NOTAS)
• CÁLCULO DE ÁREA DE UN RECTÁNGULO
• SUMA DE DOS NÚMEROS
• RETORNO DE NOMBRE DEL DÍA SEGÚN NÚMERO DE DÍA
MUCHA SUERTE! RECUERDEN "DIVIDE Y VENCERÁS"
*/

let opcion = prompt(`Ingrese la opción que desea realizar: 
    1. Cálculo de promedio de notas (4 notas) 
    2. Cálculo de área de un rectángulo 
    3. Suma de dos números 
    4. Retorno de nombre del día según número de día`
)

do{

    switch (opcion) {
        case '1':
            let nota1 = parseFloat(prompt('Ingrese la primera nota: '))
            let nota2 = parseFloat(prompt('Ingrese la segunda nota: '))
            let nota3 = parseFloat(prompt('Ingrese la tercera nota: '))
            let nota4 = parseFloat(prompt('Ingrese la cuarta nota: '))
            let promedio = (nota1 + nota2 + nota3 + nota4) / 4
            alert(`El promedio de las notas es: ${promedio}`)
                break
        case '2':
            let base = parseFloat(prompt('Ingrese la base del rectángulo: '))
            let altura = parseFloat(prompt('Ingrese la altura del rectángulo: '))
            let area = base * altura
            alert(`El área del rectángulo es: ${area}`)
                break 
        case '3':
            let num1 = parseFloat(prompt('Ingrese el primer número: '))
            let num2 = parseFloat(prompt('Ingrese el segundo número: '))
            let suma = num1 + num2
            alert(`La suma de los números es: ${suma}`)
                break
        case '4':
            let dia = parseInt(prompt('Ingrese el número del día de la semana: '))
            switch (dia) {
                case 1:
                    alert('Lunes')
                    break
                case 2:
                    alert('Martes')
                    break
                case 3:
                    alert('Miércoles')
                    break
                case 4:
                    alert('Jueves')
                    break
                case 5:
                    alert('Viernes')
                    break
                case 6:
                    alert('Sábado')
                    break
                case 7:
                    alert('Domingo')
                    break
                default:
                    alert('Número de día no válido')
                    break
            }
            break
        default:
            alert('Opción no válida intente de nuevo')
            break
}

opcion = prompt(`Ingrese la opción que desea realizar: 
    0. Salir
    1. Cálculo de promedio de notas (4 notas) 
    2. Cálculo de área de un rectángulo 
    3. Suma de dos números 
    4. Retorno de nombre del día según número de día`)

}while (opcion != '0')
