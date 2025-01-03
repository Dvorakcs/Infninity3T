class infinityMesh{
    constructor(...infinityTriangles){
        this.infinityTriangles = infinityTriangles
    }

    add(infinityTriangle){
        this.infinityTriangles.push(infinityTriangle)
    }
    addRange(infinityTriangles){
        infinityTriangles.infinityTriangles.forEach((triangle => {
            this.add(triangle)
        }))
    }
    update(){
        this.infinityTriangles.forEach(triangle => {
            triangle.update()
         });
    }
    draw(context){
        this.infinityTriangles.triangles.forEach(triangle => {
           triangle.draw(context)
        });
    }
}