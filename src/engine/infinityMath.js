class infinityMath{
   
    static scale(vector,n){
        return new infinityVector(vector.x * n ,vector.y * n, vector.z)
    }

    static ajustecenter(triangle){
        triangle.vectorA.x += 1520/2
        triangle.vectorA.y += 1040/2
        triangle.vectorB.x += 1520/2
        triangle.vectorB.y += 1040/2
        triangle.vectorC.x += 1520/2
        triangle.vectorC.y += 1040/2
        return triangle
    }
    
    static normalize(vector){

        let l = Math.sqrt(vector.x*vector.x + vector.y*vector.y + vector.z*vector.z + vector.w * vector.w);

		vector.x /= l; 
        vector.y /= l; 
        vector.z /= l;
        vector.w = l
        return vector
    }
    static sumVector(vector){
        return vector.x + vector.y + vector.z 
    }
    static additionVector(vectorA,vectorB){
         let resultVector = new infinityVector(0,0,0)

         resultVector.x = vectorA.x + vectorB.x
         resultVector.y = vectorA.y + vectorB.y
         resultVector.z = vectorA.z + vectorB.z
         resultVector.w = vectorA.w + vectorB.w

         return resultVector
    }
    static subtractionVector(vectorA,vectorB){
        let resultVector = new infinityVector(0,0,0)

        resultVector.x = vectorA.x - vectorB.x
        resultVector.y = vectorA.y - vectorB.y
        resultVector.z = vectorA.z - vectorB.z
        resultVector.w = vectorA.w - vectorB.w

        return resultVector
   }
   static divisionVector(vectorA,vectorB){
    let resultVector = new infinityVector(0,0,0)
    resultVector.x = vectorA.x / vectorB.x 
    resultVector.y = vectorA.y / vectorB.y 
    resultVector.z = vectorA.z / vectorB.z
    resultVector.w = vectorA.w / vectorB.w
    return resultVector 
   }
   static multiplicationVector(vectorA,vectorB){
        let resultVector = new infinityVector(0,0,0,0)
        resultVector.x = vectorA.x * vectorB.x 
        resultVector.y = vectorA.y * vectorB.y 
        resultVector.z = vectorA.z * vectorB.z
        resultVector.w = vectorA.w * vectorB.w
        return resultVector       
   }
   static productVector(vectorA,vectorB){
        let resultVector = new infinityVector(0,0,0)
        resultVector.x = vectorA.y * vectorB.z - vectorA.z * vectorB.y;
		resultVector.y = vectorA.z * vectorB.x - vectorA.x * vectorB.z;
		resultVector.z = vectorA.x * vectorB.y - vectorA.y * vectorB.x;    
        resultVector.w = vectorA.w * vectorB.w
        return resultVector
   }

   static culling(triangle,camera){
        return infinityMath.sumVector(infinityMath.multiplicationVector(infinityMath.normalize(infinityMath.productVector(infinityMath.subtractionVector(triangle.vectorB,triangle.vectorA),infinityMath.subtractionVector(triangle.vectorC,triangle.vectorA))),infinityMath.subtractionVector(triangle.vectorA,camera.position)))
   }
   static projectionTriangle(triangle,camera){
        let resultTriangle = new infinityTriangle(new infinityVector(0,0,0),new infinityVector(0,0,0),new infinityVector(0,0,0))
        resultTriangle.vectorA.x = (triangle.vectorA.x/triangle.vectorA.z) * camera.zNear
        resultTriangle.vectorA.y = (triangle.vectorA.y/triangle.vectorA.z) * camera.zNear
        resultTriangle.vectorB.x = (triangle.vectorB.x/triangle.vectorB.z) * camera.zNear
        resultTriangle.vectorB.y = (triangle.vectorB.y/triangle.vectorB.z) * camera.zNear
        resultTriangle.vectorC.x = (triangle.vectorC.x/triangle.vectorC.z) * camera.zNear
        resultTriangle.vectorC.y = (triangle.vectorC.y/triangle.vectorC.z) * camera.zNear
        return resultTriangle

   }
}