class infinityFace{
    constructor(triangleA,triangleB){
        this.triangleA = triangleA
        this.triangleB = triangleB
        this.image = new Image()
        this.image.src = 'src/textura/terra.png'
        this.image.onload = () => {
            this.image.loaded = true
        }
    }


    get Mesh(){
        return new infinityMesh(this.triangleA,this.triangleB)
    }
    draw(context){
        this.triangleA.draw(context)
        this.triangleB.draw(context)

        
        //context.drawImage(this.image,this.triangleA.vectorA.x,this.triangleA.vectorA.y)

    }
}