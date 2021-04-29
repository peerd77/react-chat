const userToColorMap = {};

const loadUserToColorMap = messages => {
    messages.forEach(msg => {
        userToColorMap[msg.username] = msg.color
    })
}

const messageUtils = {

    loadMessages() {
        const messages = localStorage.getItem('messages');

        if (messages) {
            const parsedMessages = JSON.parse(messages);
            loadUserToColorMap(parsedMessages);
            return parsedMessages;
        }
        return [];
    },

    saveMessages(messages) {
        localStorage.setItem('messages', JSON.stringify(messages));
    },

    processMessage(user, message) {
        const getRandomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        userToColorMap[user.username] = userToColorMap[user.username] || getRandomColor();
        const now = new Date();

        const hours = `${now.getHours()}`.padStart(2,'0');
        const minutes = `${now.getMinutes()}`.padStart(2,'0');
        const date = `${now.getDate()}`.padStart(2,'0');
        const month = `${now.getMonth()}`.padStart(2,'0');
        const fullYear = now.getFullYear();
        const nowString = `[${hours}:${minutes}-${date}.${month}.${fullYear}]`
        return {
            username: user.username,
            msg: `${nowString} - ${user.username} - ${message}`,
            color: userToColorMap[user.username],
        }
    }
}

export default messageUtils;
