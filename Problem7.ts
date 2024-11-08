{
    class Car{
        make:string;
        model:string;
        years:number;

        constructor(make:string,model:string,years:number){
            this.make=make;
            this.model=model;
            this.years=years;
        }

        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.years;
        }
    }

    const car = new Car("Honda", "Civic099", 2015);
    
}