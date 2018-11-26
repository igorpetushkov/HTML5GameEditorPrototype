export async function doItAsync<T>(callback: Function, timeout = 0) {
    return new Promise<T>((resolve) => {
        let timer = null;

        const _resolve = (result: T) => {
            clearTimeout(timer);
            resolve(result);
        };

        const _reject = (error) => {
            clearTimeout(timer);

            throw error;
        };

        callback(_resolve, _reject);

        if (timeout) {
            timer = setTimeout(() => {
                throw 'error';
            }, timeout);
        }
    });
};