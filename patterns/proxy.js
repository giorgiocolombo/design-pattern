export default function proxy() {
    const person = {
        name: 'Giorgio',
        age: 27,
        nationality: 'Italian'
    };

    const handler = {       // l'handler permette di creare i metodi con cui interagire con l'oggetto
        get: (obj, prop) => {
            if(!obj[prop]){
                console.log("La proprietà dell'oggetto non esiste");
            }
            // return obj[prop];
            return Reflect.get(obj, prop);   // Reflect è un oggetto che permette di interagire semplicamente con l'oggetto base utilizzando gli stessi argomenti delle funzioni di handling
        },
        set: (obj, prop, value) => {
            if (typeof value === typeof obj[prop]){
                // obj[prop] = value;
                Reflect.set(obj, prop, value);
            } else {
                console.error(`Non puoi assegnare un tipo diverso da quello di origine. (${typeof obj[prop]})`);
            }
            return true;
        }
    }
    const personProxy = new Proxy(person, handler);

    console.log(personProxy.name);
    personProxy.name = 'Pippo';
    console.log(person.name, personProxy.name);
    personProxy.name = 12; // errore per tipo non corretto
    console.log(person.location, personProxy.location);
}