class inifnityCamera{
    constructor(props){
       this.position = props.position ?? new infinityVector(1,1,1)
       this.fov = 90
       this.aspect = props.aspect ?? 720/440
       this.zNear = 0.1
       this.zFar = 1000
       this.matriz = new infinityMatriz()
    }

    matrizCamera(){
        const Array = [
            [Math.tan(this.fov/2) * this.aspect,0,0,0],
            [0,Math.tan(this.fov/2),0,0],
            [0,0,this.zFar+this.zNear/this.zNear-this.zFar,2 * this.zFar * this.zNear / this.zNear - this.zFar],
            [0,0,-1,0]        
           ]

        return Array
    }

}