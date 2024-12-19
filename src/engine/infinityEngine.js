class infinityEngine{
    constructor(props){
        this.canvas = new infinityCanvas({
            canvas:document.getElementById('canvas-infinity')
        })
        this.camera = new inifnityCamera({

        })
        this.controle = new infinityControl()
        this.matrix = new infinityMatrix()
        this.rotateX = 0
        this.rotateY = 0
        this.rotateZ = 0
       
        this.velocityX = 0
        this.velocityY = 0
        this.velocityZ = 0

        
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

      return triangles
    }
    start(event){
        const filePath = 'src/obj/utah.txt'
        fetch(filePath)
            .then(response => {
                if (!response.ok) throw new Error('Erro ao carregar o arquivo');
                return response.text();
            })
            .then(data => {
                
               this.mesh = this.parseObjToInfinityMesh(data) ;
               this.update(event)
            })
            .catch(error => console.error('Erro:', error));

            
    }
    update(event){
      this.canvas.context.clearRect(0,0,720,440)
        if(this.controle.keys.w) this.rotateY += 0.01
        if(this.controle.keys.s) this.rotateY -= 0.01
        if(this.controle.keys.d) this.rotateX += 0.01
        if(this.controle.keys.a) this.rotateX -= 0.01
        if(this.controle.keys.e) this.rotateZ += 0.01
        if(this.controle.keys.q) this.rotateZ -= 0.01
        
       if(this.mesh == null) return

       for (let triangleINDEX = 2; triangleINDEX <  this.mesh.length; ) {
       
        let triangle = new infinityTriangle(this.mesh[triangleINDEX - 2],this.mesh[triangleINDEX - 1],this.mesh[triangleINDEX])
      
        triangleINDEX += 3
       

        if(this.controle.keys.t) {
            triangle.vectorA.y -= 0.01
            triangle.vectorB.y -= 0.01
            triangle.vectorC.y -= 0.01
        }
        if(this.controle.keys.g) {
            triangle.vectorA.y += 0.01
            triangle.vectorB.y += 0.01
            triangle.vectorC.y += 0.01
        }
        
        if(this.controle.keys.h) {
            triangle.vectorA.x += 0.01
            triangle.vectorB.x += 0.01
            triangle.vectorC.x += 0.01
        }
        if(this.controle.keys.f) {
            triangle.vectorA.x -= 0.01
            triangle.vectorB.x -= 0.01
            triangle.vectorC.x -= 0.01
        }

       if(this.controle.keys.z){
            this.camera.fov += 0.001
       }
       if(this.controle.keys.x){
        this.camera.fov -= 0.001
        }

        let triangleRotateX = new infinityTriangle(new infinityVector(0,0,0),new infinityVector(0,0,0),new infinityVector(0,0,0))
        
        triangleRotateX.vectorA = this.matrix.mutiplicacaoMatrixVetor(triangle.vectorA,this.matrix.rotateX(this.rotateX))
        triangleRotateX.vectorB = this.matrix.mutiplicacaoMatrixVetor(triangle.vectorB,this.matrix.rotateX(this.rotateX))
        triangleRotateX.vectorC = this.matrix.mutiplicacaoMatrixVetor(triangle.vectorC,this.matrix.rotateX(this.rotateX))

        let triangleRotateY = new infinityTriangle(new infinityVector(0,0,0),new infinityVector(0,0,0),new infinityVector(0,0,0))

        triangleRotateY.vectorA = this.matrix.mutiplicacaoMatrixVetor(triangleRotateX.vectorA,this.matrix.rotateY(this.rotateY))
        triangleRotateY.vectorB = this.matrix.mutiplicacaoMatrixVetor(triangleRotateX.vectorB,this.matrix.rotateY(this.rotateY))
        triangleRotateY.vectorC = this.matrix.mutiplicacaoMatrixVetor(triangleRotateX.vectorC,this.matrix.rotateY(this.rotateY))

        let triangleRotateZ = new infinityTriangle(new infinityVector(0,0,0),new infinityVector(0,0,0),new infinityVector(0,0,0))

        triangleRotateZ.vectorA = this.matrix.mutiplicacaoMatrixVetor(triangleRotateY.vectorA,this.matrix.rotateZ(this.rotateZ))
        triangleRotateZ.vectorB = this.matrix.mutiplicacaoMatrixVetor(triangleRotateY.vectorB,this.matrix.rotateZ(this.rotateZ))
        triangleRotateZ.vectorC = this.matrix.mutiplicacaoMatrixVetor(triangleRotateY.vectorC,this.matrix.rotateZ(this.rotateZ))

        let triangleScale = new infinityTriangle(new infinityVector(0,0,0),new infinityVector(0,0,0),new infinityVector(0,0,0))
        
        triangleScale.vectorA = this.matrix.mutiplicacaoMatrixVetor(triangleRotateZ.vectorA,this.matrix.scale(80))
        triangleScale.vectorB = this.matrix.mutiplicacaoMatrixVetor(triangleRotateZ.vectorB,this.matrix.scale(80))
        triangleScale.vectorC = this.matrix.mutiplicacaoMatrixVetor(triangleRotateZ.vectorC,this.matrix.scale(80))
          
        // Use Cross-Product to get surface normal
			let normal = new infinityVector(0,0,0)
			let line1 = new infinityVector(0,0,0)
			let line2 = new infinityVector(0,0,0)

			line1.x = triangleScale.vectorB.x - triangleScale.vectorA.x;
			line1.y = triangleScale.vectorB.y - triangleScale.vectorA.y;
			line1.z = triangleScale.vectorB.z - triangleScale.vectorA.z;

			line2.x = triangleScale.vectorC.x - triangleScale.vectorA.x;
			line2.y = triangleScale.vectorC.y - triangleScale.vectorA.y;
			line2.z = triangleScale.vectorC.z - triangleScale.vectorA.z;

			normal.x = line1.y * line2.z - line1.z * line2.y;
			normal.y = line1.z * line2.x - line1.x * line2.z;
			normal.z = line1.x * line2.y - line1.y * line2.x;

			// It's normally normal to normalise the normal
			let l = Math.sqrt(normal.x*normal.x + normal.y*normal.y + normal.z*normal.z);

			normal.x /= l; 
            normal.y /= l; 
            normal.z /= l;

            if(normal.x * (triangleScale.vectorA.x - this.camera.position.x) + 
               normal.y * (triangleScale.vectorA.y - this.camera.position.y) +
                normal.z * (triangleScale.vectorA.z - this.camera.position.z) < 0
            ){
            let triangleProjected = new infinityTriangle(new infinityVector(0,0,0),new infinityVector(0,0,0),new infinityVector(0,0,0))
       
       
            triangleProjected.vectorA = this.matrix.mutiplicacaoMatrixVetor(triangleScale.vectorA,this.camera.matrizCamera())
            triangleProjected.vectorB = this.matrix.mutiplicacaoMatrixVetor(triangleScale.vectorB,this.camera.matrizCamera())
            triangleProjected.vectorC = this.matrix.mutiplicacaoMatrixVetor(triangleScale.vectorC,this.camera.matrizCamera())
        
            triangleProjected.vectorA.x/triangleProjected.vectorA.z * this.camera.zNear
            triangleProjected.vectorA.y/triangleProjected.vectorA.z * this.camera.zNear
            triangleProjected.vectorB.x/triangleProjected.vectorB.z * this.camera.zNear
            triangleProjected.vectorB.y/triangleProjected.vectorB.z * this.camera.zNear
            triangleProjected.vectorC.x/triangleProjected.vectorC.z * this.camera.zNear
            triangleProjected.vectorC.y/triangleProjected.vectorC.z * this.camera.zNear
        
            triangleProjected.vectorA.x += this.canvas.canvas.width/2
            triangleProjected.vectorA.y += this.canvas.canvas.height/2
            triangleProjected.vectorB.x += this.canvas.canvas.width/2
            triangleProjected.vectorB.y += this.canvas.canvas.height/2
            triangleProjected.vectorC.x += this.canvas.canvas.width/2
            triangleProjected.vectorC.y += this.canvas.canvas.height/2

            triangleProjected.draw(this.canvas.context)
        
            }
            
        };

            
       
       requestAnimationFrame(() => this.update(event))
    }
    
    stop(event){
        
    }
}