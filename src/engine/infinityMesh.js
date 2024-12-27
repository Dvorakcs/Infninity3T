class infinityMesh{
    constructor(...infinityTriangles){
        this.infinityTriangles = infinityTriangles
    }

    add(infinityTriangle){
        this.infinityTriangles.push(infinityTriangle)
    }

    draw(context){
        this.infinityTriangles.triangles.forEach(triangle => {
           triangle.draw(context)
        });
    }
}