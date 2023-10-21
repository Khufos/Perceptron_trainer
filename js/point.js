//points
//Aqui definimos o dataset ou massa de dados 

class Point{
    x= 0
    y=0
    label =0
    constructor(x,y){
        this.x = x
        this.y = y
        this.label = this.getLabel()
    }
    getLabel(){
        if(this.x > this.y){
            return 1
        }else{
            return -1
        }
    }
    getPixelX(){
        const px = map(this.x, -1,1,0, width)
        return px
    }
    getPixelY(){
        const py = map(this.y, -1,1,0, height,0)
        return py

    }
    show(){
        // os pontos terão um contorno de dois pixel
        strokeWeight(2)
        // se o label for 1 o preenchimento sera preto  e o contorno sera branco
        if(this.label ==1){
            fill(0)
            stroke(250)
        // caso contrario o preenchimento era branco e o contorno preto 
        }else{
            fill(250)
            stroke(0)
        }
        //as variaveis px e py recebe os valores das funções getpixelx e getpixely 
        const px = this.getPixelX()
        const py = this.getPixelY()
        // aqui são criando os pontos na coodernada py e px 
        ellipse(px,py, 20, 20)
    }
}