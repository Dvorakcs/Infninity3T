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
        this.luxY = 0
        this.velocityX = 0
        this.velocityY = 0
        this.velocityZ = 0
        this.position = new infinityVector(1,5,0)
        this.trianglesProjecteToRaster = []
        this.mesh = new infinityMesh()
        
        //this.mesh.addRange(new cube(new infinityVector(10,10,1), new infinityVector(5,5,5,0)).mesh)
        this.player = new Player(new infinityVector(0,0,0))
        //this.mesh.addRange(this.player.mesh)
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
        const filePath = 'src/obj/videoship.txt'
        fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o arquivo');
            return response.text();
        })
        .then(data => {
          let mesh =  this.parseObjToInfinityMesh(data)
          mesh.infinityTriangles.forEach(triangle => {
           this.mesh.add(triangle);
         })
           
           
           this.update(event)
        })
        .catch(error => console.error('Erro:', error));
            
    }
    update(event){
      this.canvas.context.clearRect(0,0,1520,1040)
      
      this.trianglesProjecteToRaster = []
        if(this.controle.keys.w) this.camera.rotation.y += 0.01
        if(this.controle.keys.s) this.camera.rotation.y -= 0.01
        if(this.controle.keys.d) this.camera.rotation.x += 0.01
        if(this.controle.keys.a) this.camera.rotation.x -= 0.01
        if(this.controle.keys.e) this.camera.rotation.z += 0.01
        if(this.controle.keys.q) this.camera.rotation.z -= 0.01
        if(this.controle.keys.t) this.camera.position.y += 1.1
        if(this.controle.keys.g) this.camera.position.y -= 1.1
        if(this.controle.keys.h) this.camera.position.x += 1.1
        if(this.controle.keys.f) this.camera.position.x -= 1.1
        if(this.controle.keys.z) {
            debugger
           this.camera.position.z += 0.01
        }
        if(this.controle.keys.x) {
            
            this.camera.position.z -= 0.01
        }
        if(this.controle.keys.v) {
            
            this.player.atirar()
        }
       if(this.mesh == null) return

      this.mesh.infinityTriangles.forEach(triangle => {
       
        let triangleTranslated = this.matriz.multiplyMatrizVetor(triangle,this.matriz.translacao(new infinityVector(this.camera.position.x,this.camera.position.y,this.camera.position.z)))
        let triangleRotateZ = this.matriz.multiplyMatrizVetor(triangleTranslated,this.matriz.rotateZ(this.camera.rotation.z)) 
        let triangleRotateX = this.matriz.multiplyMatrizVetor(triangleRotateZ,this.matriz.rotateX(this.camera.rotation.x))
        let triangleRotateY= this.matriz.multiplyMatrizVetor(triangleRotateX,this.matriz.rotateY(this.camera.rotation.y))
        let triangleScale = this.matriz.multiplyMatrizVetor(triangleRotateY,this.matriz.scale(this.camera.position.z))
       
        if(infinityMath.culling(triangleScale,this.camera) < 0){
           let normal = infinityMath.productVector(infinityMath.subtractionVector(triangleScale.vectorB,triangleScale.vectorA),infinityMath.subtractionVector(triangleScale.vectorC,triangleScale.vectorA))
           
           let vectorLight = new infinityVector(1,1,1,1)
           let vectorLightNormal = infinityMath.normalize(vectorLight)
           let dp = infinityMath.multiplicationVector(normal,vectorLightNormal)

           dp = infinityMath.sumVector(dp) 
           dp /= 1000
           
            let triangleProjected = this.matriz.multiplyMatrizVetor(triangleScale,this.camera.matrizCamera())
           
            triangleProjected.vectorA.x/triangleProjected.vectorA.z * this.camera.zNear
            triangleProjected.vectorA.y/triangleProjected.vectorA.z * this.camera.zNear
            triangleProjected.vectorB.x/triangleProjected.vectorB.z * this.camera.zNear
            triangleProjected.vectorB.y/triangleProjected.vectorB.z * this.camera.zNear
            triangleProjected.vectorC.x/triangleProjected.vectorC.z * this.camera.zNear
            triangleProjected.vectorC.y/triangleProjected.vectorC.z * this.camera.zNear
        
            triangleProjected = infinityMath.ajustecenter(triangleProjected)
            triangleProjected.alpha = dp
            
            this.trianglesProjecteToRaster.push(triangleProjected)
            }
        
        }); 

            
        this.trianglesProjecteToRaster.sort((t1,t2) => {

        const z1 = (t1.vectorA.z + t1.vectorB.z + t1.vectorC.z) / 3; 
        const z2 = (t2.vectorA.z + t2.vectorB.z + t2.vectorC.z) / 3; 
        return z2 - z1; 

        });

        this.trianglesProjecteToRaster.forEach(triangle => {
            
            triangle.draw(this.canvas.context)
            
        })
      //  this.player.update()
       requestAnimationFrame(() => this.update(event))
    }
    
    stop(event){
        
    }
}