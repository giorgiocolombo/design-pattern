export default function mixin() {
    class Dog{
        constructor(name){
            this.name = name
        }
    }

    const animalFunctionalities = {
        sleep: () => console.log('zzzz')
    }

    const dogFunctionalities = {
        __proto__: animalFunctionalities,
        bark: () => console.log('bau'),
        play: () => console.log('giochiamo'),
        sleep(){super.sleep()}
    }

    Object.assign(Dog.prototype, dogFunctionalities);
    const pippo = new Dog('Pippo');
    pippo.bark();
    pippo.sleep();
}