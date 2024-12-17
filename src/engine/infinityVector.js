class infinityVector{
    constructor(x,y,z,color = null){
        this.x = x,
        this.y = y,
        this.z = z
        this.color = color
    }

    draw(context){
        context.beginPath();
        context.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
        context.fillStyle = this.cor ?? 'black';
        context.fill();
        context.closePath();
    }
}