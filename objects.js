var equipo = {
    brand: "Apple",
    model: "Mac Mini",
    year: 2020,
    chip: "M1",
    resume: function(){ 
        console.log(`${this.model} ${this.chip} de ${this.brand}`);
    }
};

equipo.resume();