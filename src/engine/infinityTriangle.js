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
       

        let red = Math.round(255);
        let green = Math.round(200); 
        let blue = Math.round(150);
        let alpha = lum/255;

        context.fillStyle = `rgba(${red},${green},${blue},${alpha}`;
        
        context.closePath();
        context.fill();

    }
    
}