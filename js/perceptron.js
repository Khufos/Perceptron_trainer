//perceptron.js
// Um perceptron é a menor unidade de uma rede neural composta de um neuronio 
function sign(num){
return num >= 0 ? 1 : -1
}


class Perceptron{
    // definindo os pesos 
    pesos = [0,0]
    lr = 0.1
    // definindo um construtor onde dentro dele definimos um laço de repetição  e definimos cada pesos com um valor
    //randomico
    constructor(){
        for(let i=0; i<this.pesos.length; i++){
            this.pesos[1] = random(-1,1)
        }
    }
    // funcao guess é responsavel por dá o palpite sobre qual grupo a cada ponto pertence 
    guess(inputs)
    {
        let sum = 0
        // um faço for com base na quantidade de pesos baseando na saida  dos resultados das multiplicação de cada inputs
        // de cada pesos.
        for(let i = 0; i<this.pesos.length; i++){
            sum += inputs[i] * this.pesos[i]
        }
        // que receber o resultado da função sing 
        const output = sign(sum)
        return output
    }
    train(inputs, target){
        const guess = this.guess(inputs)
        const error = target - guess
        for(let i =0; i < this.weights.length; i++){
            this.weights[i] += error * inputs[i] * this.lr
        }

    }
}