class infinityTriangle{
    constructor(vectorA, vectorB, vectorC,color){
        this.vectorA = vectorA
        this.vectorB = vectorB
        this.vectorC = vectorC
        this.color = color ?? 'black'
    }

    draw(context,lum){
        context.beginPath()
        context.moveTo(this.vectorA.x,this.vectorA.y)
        context.lineTo(this.vectorB.x,this.vectorB.y)
        context.lineTo(this.vectorC.x,this.vectorC.y)
        context.lineTo(this.vectorA.x,this.vectorA.y)
        
        lum *= -1
        context.fillStyle = 'rgba(32, 45, 21, '+ lum +')';
        
        context.closePath();
        context.fill();
    }
    
}