class Car {
    constructor(year, model, color, type, maker){
        this.year = year;
        this.color = color;
        this.type = type;
        this.manufac = {
            model: model,
            maker: maker
        };
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    paintNewColor (newPaint) {
        this.color += '-' + newPaint;
    }
}

export default Car;