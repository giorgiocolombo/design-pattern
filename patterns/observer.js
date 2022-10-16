export default function observer() {
    class Observable {
        constructor(){
            this.observers = [];
        }

        subscribe(func){
            this.observers.push(func);
        }

        unsubscribe(func){
            this.observers = this.observers.filter(observer => observer !== func);
        }

        notify(data){
            this.observers.forEach(observer => observer(data));
        }
    }

    const logger = (value) => {
        console.log('Logger function:', value);
    }
    
    const alerter = (value) => {
        window.alert(`Alerter function: ${value}`);
    }
    
    const observable = new Observable();

    observable.subscribe(logger);
    observable.subscribe(alerter);

    setTimeout(() => {
        observable.notify('this is the value');
        observable.unsubscribe(alerter);
    }, 1000);

    setTimeout(() => {
        observable.notify('new value');
    }, 2000);
}