class infinityCanvas{
    constructor(props){
        this.canvas = props.canvas
        this.context = this.canvas.getContext('2d')
        this.scale = 2
        this.canvas.width = 760 * this.scale  
        this.canvas.height = 520 * this.scale 
        this.canvas.style.width = `${this.canvas.width}px`
        this.canvas.style.height = `${this.canvas.height}px`
        this.context.scale = this.scale
    }

    renderer(listgenericObject){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        
        listgenericObject.forEach(genericObject => {
            
           if(genericObject?.style?.line){
                this.context.strokeRect(genericObject.position.x,genericObject.position.y,
                    genericObject.size.width,genericObject.size.height
                )
                return
           }

           this.context.fillRect(genericObject.position.x,genericObject.position.y,
            genericObject.size.width,genericObject.size.height
          )
            
        });
    }
}