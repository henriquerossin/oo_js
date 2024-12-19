function Veiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;

    this.descricao = function () {
        console.log(`Este é um ${this.modelo} da marca ${this.marca}.`);
    };
}

function Carro(marca, modelo, portas) {
    Veiculo.call(this, marca, modelo);
    this.portas = portas;

    this.tipoVeiculo = function () {
        console.log(`Este é um carro com ${this.portas} portas.`);
    };
}

function Moto(marca, modelo, cilindradas) {
    Veiculo.call(this, marca, modelo);
    this.cilindradas = cilindradas;

    this.tipoVeiculo = function () {
        console.log(`Esta é uma moto com ${this.cilindradas} cilindradas.`);
    };
}

const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Honda", "Civic", 4);
const moto1 = new Moto("Yamaha", "MT-07", 689);

carro1.descricao();
carro1.tipoVeiculo();

carro2.descricao();
carro2.tipoVeiculo();

moto1.descricao();
moto1.tipoVeiculo();
