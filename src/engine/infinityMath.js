class infinityMath{
   
    static scale(vector,n){
        return new infinityVector(vector.x * n ,vector.y * n, vector.z)
    }

    static center(vector){
        return new infinityVector(vector.x + 720/2 ,-vector.y + 440/2, vector.z)
    }
}