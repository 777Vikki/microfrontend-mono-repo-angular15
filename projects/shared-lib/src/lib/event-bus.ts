type Callback = (data: any) => void;

class EventBus {
    private events: Record<string, Callback[]> = {};

    subscribe(eventName: string, callback: Callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    unsubscribe(eventName: string, callback: Callback) {
        if (!this.events[eventName]) return;
        this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    }

    publish(eventName: string, data?: any) {
        if (!this.events[eventName]) return;
        this.events[eventName].forEach(cb => cb(data));
    }
}

// Singleton instance
export const eventBus = new EventBus();
