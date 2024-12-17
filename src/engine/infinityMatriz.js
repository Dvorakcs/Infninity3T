class infinityMatrix{
    constructor(){
        this.matrix = [
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
                       [0,0,0,1]]
        return array
    }
    rotateX(angle){
        const array = [[1,0,0,0],
                      [0,Math.cos(angle), -Math.sin(angle),0],
                      [0,Math.sin(angle), Math.cos(angle),0],    
                      [0,0, 0,0]]
       return array                
    }
    rotateY(angle){
        const array = [[Math.cos(angle),0,Math.sin(angle),0],
                      [0,1,0,0],
                      [-Math.sin(angle),0, Math.cos(angle),0],    
                      [0,0,0,1],]    
       return array                
    }
    rotateZ(angle){
        const array = [[Math.cos(angle),-Math.sin(angle),0,0],
                      [Math.sin(angle),Math.cos(angle), 1,0],
                      [0,0,0,1]]    
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
        if(vector.w == undefined) vector.w = 0
            array[3] = vector.w 
        

        return array;
    }
    mutiplicacaoMatrixVetor(vector, matrix = null){

        if(vector == null) return;

        let R = [0,0,0,0]
        let A = matrix == null ? this.matrix : matrix
        let vectorArray = this.mapVectorToArray(vector)
        let somatoria = 0;

        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j <= 2; j++) {
                
                somatoria += A[i][j] * vectorArray[j]
            }
            R[i] = somatoria
            somatoria = 0
        }

        return this.mapArrayToVector(R);
    }
}