class infinityMesh{
    constructor(...infinityTriangles){
        this.infinityTriangles = infinityTriangles
    }


    draw(context){
        this.infinityTriangles.triangles.forEach(triangle => {
           triangle.draw(context)
        });
    }
}