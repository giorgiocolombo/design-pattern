export default function prototype() {
    class Dog {
        constructor(name){
            this.name = name;
        }

        bark(){                     // il metodo viene aggiunto automaticamente al prototype
            console.log('Bau!');
        }
    };

    const dog1 = new Dog('Pluto');

    dog1.bark(); 
    console.log('Dog prototype: ',Dog.prototype,'Dog __proto__: ', dog1.__proto__);  // prototype della classe o dell'istanza

    Dog.prototype.play = () => console.log('Giochiamo!'); // aggiunge un metodo al prototype
    dog1.play();

    class SuperDog extends Dog {
        constructor(name){
            super(name);   // estende le proprietà e i metodi di Dog 
        }

        fly(){
            console.log('Il primo cane volante della storia');
        }
    }

    const superDog1 = new SuperDog();
    superDog1.fly();
    console.log('Superdog prototype: ', SuperDog.prototype);
    console.log('Superdog proto: ', SuperDog.__proto__);
    console.log('Superdog proto w/ Object.getPrototypeOf: ', Object.getPrototypeOf(SuperDog));

    const foo = Object.create(dog1);
    foo.bark();
}