export default function command() {
    class OrderManager{
        constructor(){
            this.orders = [];
        }

        execute(command, ...args){
            return command.execute(this.orders, ...args);
        }
    }
    
    class Command{
        constructor(execute){
            this.execute = execute;
        }
    }

    function PlaceOrderCommand(order, id) {
        return new Command(orders => {
            orders.push(id);
            console.log(`Hai ordinato ${order} (${id})`);
        });
    }

    function CancelOrderCommand(id) {
        return new Command(orders => {
            orders = orders.filter(orderId=> orderId !== id);
            console.log(`Hai cancellato l'ordine ${id}`);
        });
    }

    function TrackOrderCommand(id) {
        return new Command(() => {
            console.log(`L'ordine ${id} arriverà tra n minuti`);
        });
    }

    const manager = new OrderManager();

    manager.execute(PlaceOrderCommand('Spaghetti', '1234'));
    manager.execute(TrackOrderCommand('1234'));
    manager.execute(CancelOrderCommand('1234'));
}