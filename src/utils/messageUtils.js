const messageUtils = {

    loadMessages() {
        const messages = localStorage.getItem('messages');
        if (messages) return JSON.parse(messages);
        return [];
    },

     saveMessages(messages) {
        localStorage.setItem('messages', JSON.stringify(messages));
    },

    processMessage(user, message) {
        function getRandomColor() {
            return 'FFFFFF';
        }

        const color = getRandomColor();
        const now = new Date();
        const nowString = `[${now.getHours()}:${now.getMinutes()}-${now.getDate()}.${now.getMonth()}.${now.getFullYear()}]`
        return {
            msg: `${nowString} - ${user.username} - ${message}`,
            color,
        }
    }
}

export default messageUtils;
