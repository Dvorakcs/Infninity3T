class Player{
    constructor(position){
        this.position = position
        this.mesh = new cube(this.position,new infinityVector(10,10,0)).mesh
    }




    update(){
        
        this.mesh.update()
    }

    atirar(){
        this.mesh.infinityTriangles.forEach(triangle => {
            triangle.vectorA.z +=1
            triangle.vectorB.z +=1
            triangle.vectorC.z +=1
        });
    }
}