class inifnityCamera{
    constructor(props){
       this.position = props.position ?? new infinityVector(1,10,4)
       this.rotation = new infinityVector(0.0,0,0)
       this.forward = new infinityVector(0,0,0)
       this.fov = 60
       this.aspect = props.aspect ?? 1520/1040
       this.zNear = 0.1
       this.zFar = 1000
       this.matriz = new infinityMatriz()
    }

    matrizCamera(){
        let fFovRad = 1.0/Math.tan(this.fov *0.5/180*3.14159)
        
        const Array = [
            [fFovRad * this.aspect,0,0,0],
            [0,fFovRad,0,0],
            [0,0,(this.zFar/this.zFar-this.zNear), 1.0],
            [0,0,-this.zFar * this.zNear / this.zFar - this.zNear,0]        
           ]

        return Array
    }

    
}