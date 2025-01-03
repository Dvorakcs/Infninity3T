class cube{
    constructor(position = infinityVector,size = infinityVector){
        this.mesh = new infinityMesh(
            new infinityTriangle(
                new infinityVector(0.0 * size.x + position.x, 0.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 1.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 1.0 * size.y + position.y, 0.0 * size.z, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(0.0 * size.x + position.x, 0.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 1.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 0.0 * size.y + position.y, 0.0 * size.z, 0.0)
            ),
        
            // EAST
            new infinityTriangle(
                new infinityVector(1.0 * size.x + position.x, 0.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 1.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 1.0 * size.y + position.y, 1.0 * size.z, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(1.0 * size.x + position.x, 0.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 1.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 0.0 * size.y + position.y, 1.0 * size.z, 0.0)
            ), 
        
            // NORTH
            new infinityTriangle(
                new infinityVector(1.0 * size.x + position.x, 0.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 1.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 1.0 * size.y + position.y, 1.0 * size.z, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(1.0 * size.x + position.x, 0.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 1.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 0.0 * size.y + position.y, 1.0 * size.z, 0.0)
            ),
        
            // WEST
            new infinityTriangle(
                new infinityVector(0.0 * size.x + position.x, 0.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 1.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 1.0 * size.y + position.y, 0.0 * size.z, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(0.0 * size.x + position.x, 0.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 1.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 0.0 * size.y + position.y, 0.0 * size.z, 0.0)
            ),
        
            // TOP
            new infinityTriangle(
                new infinityVector(0.0 * size.x + position.x, 1.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 1.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 1.0 * size.y + position.y, 1.0 * size.z, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(0.0 * size.x + position.x, 1.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 1.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 1.0 * size.y + position.y, 0.0 * size.z, 0.0)
            ),
        
            // BOTTOM
            new infinityTriangle(
                new infinityVector(1.0 * size.x + position.x, 0.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 0.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 0.0 * size.y + position.y, 0.0 * size.z, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(1.0 * size.x + position.x, 0.0 * size.y + position.y, 1.0 * size.z, 0.0),
                new infinityVector(0.0 * size.x + position.x, 0.0 * size.y + position.y, 0.0 * size.z, 0.0),
                new infinityVector(1.0 * size.x + position.x, 0.0 * size.y + position.y, 0.0 * size.z, 0.0)
            )
        );
    }

}