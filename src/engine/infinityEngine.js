class infinityEngine{
    constructor(props){
        this.infinityCanvas = new infinityCanvas({
            canvas:props.canvas
        })
        this.camera = new inifnityCamera({
            position: new infinityVector(0,0,4)
        })
        this.angle = {
            x:0,
            y:0
        }
       this.controll = new infinityControl();
       this.vector = new infinityVector(50,50,4)
       this.vectorTwo = new infinityVector(50,60,4)
       this.vectorThree = new infinityVector(60,60,4)
       this.vectorFour = new infinityVector(60,50,4)
       this.vectorFive = new infinityVector(50,50,5)
       this.vectorSix = new infinityVector(50,60,5)
       this.vectorSeven = new infinityVector(60,60,5)
       this.vectorEight = new infinityVector(60,50,5)
    }

    rotateX(vec,angle){
        return{
            x:vec.x * Math.cos(angle) - vec.z * Math.sin(angle),
            y:vec.y,
            z:vec.x * Math.sin(angle) + vec.z * Math.cos(angle)
        
        }
       
    }
    rotateY(vec,angle){
        return{
            x:vec.x,
            y:vec.y * Math.cos(angle) - vec.z * Math.sin(angle),
            z:vec.y * Math.sin(angle) + vec.z * Math.cos(angle)
        
        } 
    }

    projecao3Dto2D(vector,camera){
        
        const centerX = this.infinityCanvas.canvas.width/2
        const centerY = this.infinityCanvas.canvas.width/2

        //const projectedCenter = {
         //  x: centerX + vector.x,
          //  y:centerY + vector.y
        //}
        const projectionCamera = {
            x: vector.x - camera.position.x ,
            y: vector.y - camera.position.y ,
            z: vector.z - camera.position.z,
        }
       
        return {
            x:projectionCamera.x/projectionCamera.z * camera.focal,
            y:projectionCamera.y/projectionCamera.z * camera.focal,
            z:projectionCamera.z
        }
    }
    start(event){
        
        this.update(event)
    }
    update(event){
       
        if(this.controll.keys.w) this.camera.position.y += 0.1
        if(this.controll.keys.s) this.camera.position.y -= 0.1

        if(this.controll.keys.d) this.camera.position.x -= 0.1
        if(this.controll.keys.a) this.camera.position.x += 0.1

        this.camera.position.z = this.controll.valueY;

        if(this.controll.keys.e) {
            this.angle.x += 0.001
            this.vector = this.rotateX(this.vector,this.angle.x)
            this.vectorTwo = this.rotateX(this.vectorTwo,this.angle.x)
            this.vectorThree = this.rotateX(this.vectorThree,this.angle.x)
           this.vectorFour = this.rotateX(this.vectorFour,this.angle.x)
            this.vectorFive = this.rotateX(this.vectorFive,this.angle.x)
            this.vectorSix = this.rotateX(this.vectorSix,this.angle.x)
           this.vectorSeven = this.rotateX(this.vectorSeven,this.angle.x)
           this.vectorEight = this.rotateX(this.vectorEight,this.angle.x)
            //this.camera.position = this.rotateX(this.camera.position,this.angle.x)
        }
        if(this.controll.keys.q) {
            this.angle.x -= 0.001
            this.vector = this.rotateX(this.vector,this.angle.x)
            this.vectorTwo = this.rotateX(this.vectorTwo,this.angle.x)
            this.vectorThree = this.rotateX(this.vectorThree,this.angle.x)
           this.vectorFour = this.rotateX(this.vectorFour,this.angle.x)
           this.vectorFive = this.rotateX(this.vectorFive,this.angle.x)
           this.vectorSix = this.rotateX(this.vectorSix,this.angle.x)
           this.vectorSeven = this.rotateX(this.vectorSeven,this.angle.x)
            this.vectorEight = this.rotateX(this.vectorEight,this.angle.x)
           // this.camera.position = this.rotateX(this.camera.position,this.angle.x)
            
        }
        if(this.controll.keys.x) {
            this.angle.y -= 0.001
            this.vector = this.rotateY(this.vector,this.angle.y)
            this.vectorTwo = this.rotateY(this.vectorTwo,this.angle.y)
            this.vectorThree = this.rotateY(this.vectorThree,this.angle.y)
            this.vectorFour = this.rotateY(this.vectorFour,this.angle.y)
            this.vectorFive = this.rotateY(this.vectorFive,this.angle.y)
            this.vectorSix = this.rotateY(this.vectorSix,this.angle.y)
            this.vectorSeven = this.rotateY(this.vectorSeven,this.angle.y)
            this.vectorEight = this.rotateY(this.vectorEight,this.angle.y)
        }
        if(this.controll.keys.z) {
            this.angle.y += 0.0001
            this.vector = this.rotateY(this.vector,this.angle.y)
            this.vectorTwo = this.rotateY(this.vectorTwo,this.angle.y)
            this.vectorThree = this.rotateY(this.vectorThree,this.angle.y)
            this.vectorFour = this.rotateY(this.vectorFour,this.angle.y)
            this.vectorFive = this.rotateY(this.vectorFive,this.angle.y)
            this.vectorSix = this.rotateY(this.vectorSix,this.angle.y)
            this.vectorSeven = this.rotateY(this.vectorSeven,this.angle.y)
            this.vectorEight = this.rotateY(this.vectorEight,this.angle.y)
        }
       const vector = this.projecao3Dto2D(this.vector,this.camera,this.controll.valueY)
       const vector2 = this.projecao3Dto2D(this.vectorTwo,this.camera,this.controll.valueY)
       const vector3 = this.projecao3Dto2D(this.vectorThree,this.camera,this.controll.valueY)
       const vector4 = this.projecao3Dto2D(this.vectorFour,this.camera,this.controll.valueY)
       const vector5 = this.projecao3Dto2D(this.vectorFive,this.camera,this.controll.valueY)
       const vector6 = this.projecao3Dto2D(this.vectorSix,this.camera,this.controll.valueY)
       const vector7 = this.projecao3Dto2D(this.vectorSeven,this.camera,this.controll.valueY)
       const vector8 = this.projecao3Dto2D(this.vectorEight,this.camera,this.controll.valueY)

       
       console.log(vector)
       this.draw({
        obj:[vector,vector2,vector3,vector4,vector5,vector6,vector7,vector8]
       }) 

       requestAnimationFrame(() => this.update(event))
    }
    draw(event){
        this.infinityCanvas.context.clearRect(0,0,360 *2,220 *2)
        for (let index = 0; index < event.obj.length; index++) {
            const element = event.obj[index];
          
            this.infinityCanvas.context.beginPath();
            this.infinityCanvas.context.arc(element.x, element.y, 2, 0, 2 * Math.PI, false);
            //context.fillStyle = this.cor ?? 'black';
            this.infinityCanvas.context.fill();
            this.infinityCanvas.context.closePath();
        }

        const squad  = event.obj
        this.infinityCanvas.context.beginPath()
        this.infinityCanvas.context.moveTo(squad[0].x,squad[0].y)
        this.infinityCanvas.context.lineTo(squad[1].x,squad[1].y)
        this.infinityCanvas.context.lineTo(squad[2].x,squad[2].y)
        this.infinityCanvas.context.lineTo(squad[3].x,squad[3].y)
        this.infinityCanvas.context.lineTo(squad[0].x,squad[0].y)
        this.infinityCanvas.context.moveTo(squad[4].x,squad[4].y)
        this.infinityCanvas.context.lineTo(squad[5].x,squad[5].y)
        this.infinityCanvas.context.lineTo(squad[6].x,squad[6].y)
        this.infinityCanvas.context.lineTo(squad[7].x,squad[7].y)
        this.infinityCanvas.context.lineTo(squad[4].x,squad[4].y)
        this.infinityCanvas.context.lineTo(squad[0].x,squad[0].y)
        this.infinityCanvas.context.stroke()
       // console.log(squad)
        
    }
    stop(event){
        
    }
}