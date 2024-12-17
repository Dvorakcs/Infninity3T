class infinityTriangle{
    constructor(vectorA, vectorB, vectorC,color){
        this.vectorA = vectorA
        this.vectorB = vectorB
        this.vectorC = vectorC
        this.color = color ?? 'black'
    }

    draw(context){
        context.beginPath()
        context.moveTo(this.vectorA.x,this.vectorA.y)
        context.lineTo(this.vectorB.x,this.vectorB.y)
        context.lineTo(this.vectorC.x,this.vectorC.y)
        context.lineTo(this.vectorA.x,this.vectorA.y)
        
        context.fillStyle = this.color;
        
        context.closePath();
        context.stroke();
    }
    
}