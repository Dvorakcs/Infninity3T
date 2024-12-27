class infinityEngine{
    constructor(props){
        this.canvas = new infinityCanvas({
            canvas:document.getElementById('canvas-infinity')
        })
        this.camera = new inifnityCamera({

        })
        this.controle = new infinityControl()
        this.matriz = new infinityMatriz()
        this.luz = new infinityVector(5,5,5)
        this.rotateX = 0
        this.rotateY = 0
        this.rotateZ = 0
       
        this.velocityX = 0
        this.velocityY = 0
        this.velocityZ = 0
        this.position = new infinityVector(1,5,0)
        
        this.mesh = new infinityMesh(
            // SOUTH
            new infinityTriangle(
                new infinityVector(0.0, 0.0, 0.0, 0.0),
                new infinityVector(0.0, 1.0, 0.0, 0.0),
                new infinityVector(1.0, 1.0, 0.0, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(0.0, 0.0, 0.0, 0.0),
                new infinityVector(1.0, 1.0, 0.0, 0.0),
                new infinityVector(1.0, 0.0, 0.0, 0.0)
            ),
        
            // EAST
            new infinityTriangle(
                new infinityVector(1.0, 0.0, 0.0, 0.0),
                new infinityVector(1.0, 1.0, 0.0, 0.0),
                new infinityVector(1.0, 1.0, 1.0, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(1.0, 0.0, 0.0, 0.0),
                new infinityVector(1.0, 1.0, 1.0, 0.0),
                new infinityVector(1.0, 0.0, 1.0, 0.0)
            ),
        
            // NORTH
            new infinityTriangle(
                new infinityVector(1.0, 0.0, 1.0, 0.0),
                new infinityVector(1.0, 1.0, 1.0, 0.0),
                new infinityVector(0.0, 1.0, 1.0, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(1.0, 0.0, 1.0, 0.0),
                new infinityVector(0.0, 1.0, 1.0, 0.0),
                new infinityVector(0.0, 0.0, 1.0, 0.0)
            ),
        
            // WEST
            new infinityTriangle(
                new infinityVector(0.0, 0.0, 1.0, 0.0),
                new infinityVector(0.0, 1.0, 1.0, 0.0),
                new infinityVector(0.0, 1.0, 0.0, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(0.0, 0.0, 1.0, 0.0),
                new infinityVector(0.0, 1.0, 0.0, 0.0),
                new infinityVector(0.0, 0.0, 0.0, 0.0)
            ),
        
            // TOP
            new infinityTriangle(
                new infinityVector(0.0, 1.0, 0.0, 0.0),
                new infinityVector(0.0, 1.0, 1.0, 0.0),
                new infinityVector(1.0, 1.0, 1.0, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(0.0, 1.0, 0.0, 0.0),
                new infinityVector(1.0, 1.0, 1.0, 0.0),
                new infinityVector(1.0, 1.0, 0.0, 0.0)
            ),
        
            // BOTTOM
            new infinityTriangle(
                new infinityVector(1.0, 0.0, 1.0, 0.0),
                new infinityVector(0.0, 0.0, 1.0, 0.0),
                new infinityVector(0.0, 0.0, 0.0, 0.0)
            ),
            new infinityTriangle(
                new infinityVector(1.0, 0.0, 1.0, 0.0),
                new infinityVector(0.0, 0.0, 0.0, 0.0),
                new infinityVector(1.0, 0.0, 0.0, 0.0)
            )
        );
        this.array = [0,0,0]
        
    }
    parseObjToInfinityMesh(objString) {
        
        const vertices = [];
        const triangles = [];
        let infinityMeshobj = new infinityMesh()
        const lines = objString.split('\n'); // Divide o texto em linhas

        for (const line of lines) {
            const parts = line.trim().split(/\s+/);

            if (parts[0] === 'v') {
                const x = parseFloat(parts[1]);
                const y = parseFloat(parts[2]);
                const z = parseFloat(parts[3]);
                vertices.push(new infinityVector(x,y,z,0));
            } else if (parts[0] === 'f') {
                const v1 = vertices[parseInt(parts[1]) - 1];
                const v2 = vertices[parseInt(parts[2]) - 1];
                const v3 = vertices[parseInt(parts[3]) - 1];
                triangles.push(v1,v2,v3);
            }
        }

        for (let triangleINDEX = 2; triangleINDEX < triangles.length;) {   
            let triangle = new infinityTriangle(triangles[triangleINDEX - 2],triangles[triangleINDEX - 1],triangles[triangleINDEX])
            triangleINDEX += 3
            infinityMeshobj.add(triangle)
        }
            
      return infinityMeshobj
    }
    start(event){
        const filePath = 'src/obj/utah.txt'
        fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o arquivo');
            return response.text();
        })
        .then(data => {
            
           this.mesh = this.parseObjToInfinityMesh(data);
           
           this.update(event)
        })
        .catch(error => console.error('Erro:', error));
            
    }
    update(event){
      this.canvas.context.clearRect(0,0,1520,1040)
        if(this.controle.keys.w) this.rotateY += 0.01
        if(this.controle.keys.s) this.rotateY -= 0.01
        if(this.controle.keys.d) this.rotateX += 0.01
        if(this.controle.keys.a) this.rotateX -= 0.01
        if(this.controle.keys.e) this.rotateZ += 0.01
        if(this.controle.keys.q) this.rotateZ -= 0.01
        if(this.controle.keys.t) this.position.y += 1.1
        if(this.controle.keys.g) this.position.y -= 1.1
        if(this.controle.keys.h) this.position.x += 1.1
        if(this.controle.keys.f) this.position.x -= 1.1
        if(this.controle.keys.z) {
            
            this.camera.fov += 1
        }
        if(this.controle.keys.x) {
           
            this.camera.fov -= 1
        }
       if(this.mesh == null) return

      this.mesh.infinityTriangles.forEach(triangle => {
       
        let triangleTranslated = this.matriz.multiplyMatrizVetor(triangle,this.matriz.translacao(new infinityVector(this.position.x,this.position.y,this.position.z)))
        let triangleRotateX = this.matriz.multiplyMatrizVetor(triangleTranslated,this.matriz.rotateX(this.rotateX))
        let triangleRotateY= this.matriz.multiplyMatrizVetor(triangleRotateX,this.matriz.rotateY(this.rotateY))
        let triangleRotateZ = this.matriz.multiplyMatrizVetor(triangleRotateY,this.matriz.rotateZ(this.rotateZ)) 
        let triangleScale = this.matriz.multiplyMatrizVetor(triangleRotateZ,this.matriz.scale(100))
       
        if(infinityMath.culling(triangleScale,this.camera) < 0){
           let normal = infinityMath.productVector(infinityMath.subtractionVector(triangleScale.vectorB,triangleScale.vectorA),infinityMath.subtractionVector(triangleScale.vectorC,triangleScale.vectorA))
           
           let vectorLight = new infinityVector(0.0,0.0,1,0)
           let vectorLightNormal = infinityMath.normalize(vectorLight)
           let dp = infinityMath.multiplicationVector(normal,vectorLightNormal)

           dp = infinityMath.sumVector(dp) 
           
           
            let triangleProjected = this.matriz.multiplyMatrizVetor(triangleScale,this.camera.matrizCamera())
           
            triangleProjected.vectorA.x/triangleProjected.vectorA.z * this.camera.zNear
            triangleProjected.vectorA.y/triangleProjected.vectorA.z * this.camera.zNear
            triangleProjected.vectorB.x/triangleProjected.vectorB.z * this.camera.zNear
            triangleProjected.vectorB.y/triangleProjected.vectorB.z * this.camera.zNear
            triangleProjected.vectorC.x/triangleProjected.vectorC.z * this.camera.zNear
            triangleProjected.vectorC.y/triangleProjected.vectorC.z * this.camera.zNear
        
            triangleProjected = infinityMath.ajustecenter(triangleProjected)

            triangleProjected.draw(this.canvas.context,dp)
        
            }
        
        }); 

            
       
       requestAnimationFrame(() => this.update(event))
    }
    
    stop(event){
        
    }
}