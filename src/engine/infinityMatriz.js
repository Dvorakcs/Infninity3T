class infinityMatriz{
    constructor(){
        this.matriz = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    }

    scale(scale){

        const array = [[scale,0,0,0],
                       [0,scale,0,0],
                       [0,0,scale,0],
                       [0,0,0,0]]
        return array
    }
    rotateX(angle){
        const array = [[1,0,0,0],
                      [0,Math.cos(angle* 0.5), Math.sin(angle* 0.5),0],
                      [0,-Math.sin(angle* 0.5), Math.cos(angle* 0.5),0],    
                      [0,0,0,1]]   
       return array                
    }
    rotateY(angle){
        const array = [[Math.cos(angle),0,Math.sin(angle),0],
                      [0,1,0,0],
                      [-Math.sin(angle),0, Math.cos(angle),0],    
                      [0,0,0,0],]    
       return array                
    }
    rotateZ(angle){
        const array = [[Math.cos(angle),-Math.sin(angle),0,0],
                      [Math.sin(angle),Math.cos(angle), 1,0],
                      [0,0,0,0]]    
       return array                
    }
    translacao(vector){
        
        const array = [[1,0,0,vector.x],
                       [0,1,0,vector.y],
                       [0,0,1,vector.z],    
                       [0,0,0,1]]    
            return array 
    }
    mapArrayToVector(array){
        let vector = new infinityVector(0,0,0)
        if(array[0] != undefined) vector.x = array[0]
        if(array[1] != undefined) vector.y = array[1]
        if(array[2] != undefined) vector.z = array[2]
        if(array[3] != undefined) vector.w = array[3]

        return vector;
    }
    mapVectorToArray(vector){
        let array = [0,0,0,0]
        if(vector.x == undefined) vector.x = 0
            array[0] = vector.x 
        if(vector.y == undefined) vector.y = 0
            array[1] = vector.y
        if(vector.z == undefined) vector.z = 0
            array[2] = vector.z 
        if(vector.w == undefined || vector.w == 0) vector.w = 1
            array[3] = vector.w 
        

        return array;
    }
    multiplyMatrizVetor(triangle,matriz){
        let resultTriangle = new infinityTriangle(new infinityVector(0,0,0),new infinityVector(0,0,0),new infinityVector(0,0,0))
        resultTriangle.vectorA = this.mutiplicacaoMatrizVetor(triangle.vectorA,matriz)
        resultTriangle.vectorB = this.mutiplicacaoMatrizVetor(triangle.vectorB,matriz)
        resultTriangle.vectorC = this.mutiplicacaoMatrizVetor(triangle.vectorC,matriz)
        return resultTriangle
    }
    mutiplicacaoMatrizVetor(vector, matriz = null){

        if(vector == null) return;

        let R = [0,0,0,0]
        let A = matriz == null ? this.matriz : matriz
        let vectorArray = this.mapVectorToArray(vector)
        let somatoria = 0;

        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < 4; j++) {
                
                somatoria += A[i][j] * vectorArray[j]
            }
            R[i] = somatoria
            somatoria = 0
        }
        
        if(R[3] !=0 ){
            R[0] /= R[3]
            R[1] /= R[3]
            R[2] /= R[3]
        }
        
        return this.mapArrayToVector(R);
    }
}