{
    type Rectangle = {
        shape: 'rectangle',
        width: number,
        height: number,
    }
    
    type Circle = {
        shape: 'circle',
        radius: number
    }
    
    type CalcShape = Circle | Rectangle;
    
    const calculateShapeArea = (obj: CalcShape): number => {
        let area: number = 0;
    
        if (obj.shape === 'circle') {
           
            area = 3.1416 * obj.radius * obj.radius;
        } else if (obj.shape === 'rectangle') {
            
            area = obj.width * obj.height;
        }
    
        return area;
    }

    const res:number=calculateShapeArea({shape:'rectangle',width:4,height:6})
    
}