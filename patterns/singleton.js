export default function singleton() {
    let instance;
    let counter = 0;

    class Counter {
        constructor(){
            if(instance){
                throw new Error("Puoi creare solo un'istanza")
            } else {
                console.log('Istanza creata')
            }
            instance = this;
        }

        getInstance() {
            return this;
        }

        getCount() {
            return counter;
        }

        increment(){
            return ++counter;
        }

        decrement(){
            return --counter;
        }
    }

    const counter1 = new Counter(); // istanza creata
    setTimeout(() => {
        const counter2 = new Counter(); // l'istanza non può essere creata
    });
    const freezedObj = {
        name: 'foo'
    };
    Object.freeze(freezedObj);
    console.log(freezedObj);
    freezedObj.name = 'bar'; //genera errore read-only
}