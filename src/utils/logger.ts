
import moment from "moment";

export function logger(routeName, payload, title) {
    const messages = JSON.parse(localStorage.getItem('loggerMessages')) || [];
    const payloadLengths = JSON.parse(localStorage.getItem('payloadLengths')) || {};

    const newLength = payload.length;
    const prevLength = payloadLengths[routeName] || 0;

    if (newLength !== prevLength) {
        const timestamp = new Date().toISOString();
        const message = `You have ${newLength - prevLength} new ${routeName} updated ${moment(timestamp).fromNow()}.`;
        const content = "hi";
        messages.push({title, message, timestamp, content });
        payloadLengths[routeName] = newLength;

        localStorage.setItem('loggerMessages', JSON.stringify(messages));
        localStorage.setItem('payloadLengths', JSON.stringify(payloadLengths));
    }
}

export function authLogger(eventType: string, title:string, email?: string) {
    const messages = JSON.parse(localStorage.getItem('loggerMessages')) || [];

    const timestamp = new Date().toISOString();
    const message = `${email} ${eventType} ${moment(timestamp).fromNow()}.`;
    const content = `The user with the email address ${email} logged in ${moment(timestamp).fromNow()}. If this was not you, please verify your identity and secure your account immediately.`

    messages.push({title, message, timestamp, content });
    localStorage.setItem('loggerMessages', JSON.stringify(messages));
}

export function resetLogger(eventType: string, title: string) {
    const messages = JSON.parse(localStorage.getItem('loggerMessages')) || [];

    const timestamp = new Date().toISOString();
    const message = `You requested a ${eventType} ${moment(timestamp).fromNow()}.`;
    const content = `You requested a ${eventType} a few minutes ago. Please follow the instructions sent to your email to complete the ${eventType} process.`
    messages.push({title, message, timestamp, content });
    localStorage.setItem('loggerMessages', JSON.stringify(messages));
}