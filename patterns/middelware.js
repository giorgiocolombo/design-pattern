export default function middleware() {
    class ChatRoom{
        messages = [];

        logMessage(user, message){
            const time = `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`;
            const sender = user.getName();
            const fullMessage = `[${time}] ${sender}: ${message}`;
            console.log(fullMessage);
            this.messages.push(fullMessage);
        }

        isChatEmppty(){
            return !this.messages.length
        }
    }

    class User{
        hasEverCommunicated = false;

        constructor(name, chatRoom){
            this.name = name;
            this.chatRoom = chatRoom;
        }

        getName(){
            return this.name;
        }

        sendMessage(message){
            this.hasEverCommunicated = true;
            this.chatRoom.logMessage(this, message);
        }

        hasCommunicatedOnce(){
            return this.hasEverCommunicated;
        }
    }

    const chatroom = new ChatRoom();
    const user1 = new User('Pippo', chatroom);
    const user2 = new User('Pluto', chatroom);

    console.log({isChatEmpty: chatroom.isChatEmppty(), user1Communicated: user1.hasCommunicatedOnce()});
    user1.sendMessage('Bau');
    user2.sendMessage('Woof');
    console.log({isChatEmpty: chatroom.isChatEmppty(), user1Communicated: user1.hasCommunicatedOnce()});
}