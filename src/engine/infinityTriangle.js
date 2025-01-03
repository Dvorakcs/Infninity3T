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

        const ABx = this.vectorB.x - this.vectorA.x;
        const ABy = this.vectorB.y - this.vectorA.y;
        const ACx = this.vectorC.x - this.vectorA.x;
        const ACy = this.vectorC.y - this.vectorA.y;
        context.save()
        context.transform(ABx/10, ABy/10,
                          ACx/10, ACy/10,
                          this.vectorA.x,this.vectorA.y  
        )
        context.drawImage(this.image,0,0)

        context.restore();
        context.closePath();
        context.beginPath()
        context.moveTo(this.vectorA.x,this.vectorA.y)
        context.lineTo(this.vectorB.x,this.vectorB.y)
        context.lineTo(this.vectorC.x,this.vectorC.y)
        context.lineTo(this.vectorA.x,this.vectorA.y)
       
        

        let red = Math.round(255 * this.alpha/4);
        let green = Math.round(200* this.alpha/4); 
        let blue = Math.round(150* this.alpha/4);

        context.fillStyle = `rgba(${red},${green},${blue},${this.alpha/4}`;
        
        context.closePath();
        context.fill();

    }
    
}