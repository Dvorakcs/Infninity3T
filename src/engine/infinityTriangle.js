class infinityTriangle{
    constructor(vectorA, vectorB, vectorC,color,alpha = 0,triangleFace= 1){
        this.vectorA = vectorA
        this.vectorB = vectorB
        this.vectorC = vectorC
        this.color = color ?? 'black'
        this.alpha = alpha
        this.image = new Image()
        this.triangleFace = triangleFace
        this.image.src = 'src/textura/terra.png'
        this.image.onload = () => {
            this.image.loaded = true
        }
    }
    update(){
        this.vectorA.update()
        this.vectorB.update()
        this.vectorC.update()
    }
    draw(context){

        context.beginPath();
        context.moveTo(this.vectorA.x, this.vectorA.y);
        context.lineTo(this.vectorB.x, this.vectorB.y);
        context.lineTo(this.vectorC.x, this.vectorC.y);
        context.closePath();

        

        let red = Math.round(255 * this.alpha/4);
        let green = Math.round(200* this.alpha/4); 
        let blue = Math.round(150* this.alpha/4);

        context.fillStyle = `rgba(${red},${green},${blue},${this.alpha/4}`;
        context.fill()
        

    }
    
}