class infinityControl{
    constructor(){
        this.keys = {
            w:false
        }
        this.delta = {
            x:0,
            y:0
        }
        this.valueY = 0
        document.addEventListener('keydown', (event) => this.setkey(event,true))
        document.addEventListener('keyup', (event) => this.setkey(event,false))
        document.addEventListener('wheel' , (event) => this.setScroll(event))
    }
    setkey(event,isTrusted){
        this.keys[event.key] = isTrusted
    }
    setScroll(event){
        if(event.deltaY > 0 ){
            this.delta.y = +1
        }else if(event.deltaY < 0){
            this.delta.y = -1
        }
       
       console.log(this.delta.y)
    }
}