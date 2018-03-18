class LocalStorage
{
    storage: Storage
    constructor() {
        this.storage = window.localStorage;
    }

    /**
     * Get simple data
     * @param key
     * @param defaultValue
     * @returns {*}
     */
    get(key: string, defaultValue: object) {
        return this.storage[this.hashCode(key)] || defaultValue;
    }

    /**
     * Set simple data
     * @param key
     * @param value
     */
    set(key: string, value: string) {
        this.storage[this.hashCode(key)] = value;
    }

    /**
     * Remove key from local storage
     * @param key
     */
    remove(key: string) {
        this.storage.removeItem(this.hashCode(key));
    }

    /**
     * Get object
     * @param key
     * @param defaultData
     * @return {Object}
     */
    getObject(key: string, defaultData = {}) {
        return JSON.parse(this.storage[this.hashCode(key)] || JSON.stringify(defaultData));
    }

    /**
     * Set Object
     * @param key
     * @param value
     */
    setObject(key: string, value: object) {
        this.storage[this.hashCode(key)] = JSON.stringify(value);
    }

    /**
     * Get object
     * @param key
     * @param defaultData
     * @returns {*}
     */
    getExpirationObject(key: string, defaultData = {}) {
        let storageData = this.getObject(key, defaultData);
        if (!(storageData instanceof Object) || !('expiration' in storageData)) {
            return storageData;
        }

        if (storageData.expiration < new Date().getTime()) {
            this.remove(key);
            return defaultData;
        }

        return storageData.data;
    }

    /**
     * Set object with expiration
     * @param key
     * @param value
     * @param expiration
     */
    setExpirationObject(key: string, value: {[key: string]: string}, expiration: number | undefined = undefined) {
        const defaultExpiration = new Date().getTime() + 24 * 3600 * 1000;
        this.setObject(key, {
            data: value,
            expiration: expiration || defaultExpiration
        })
    }
    
    /**
     * Hashcode from string
     * @param str
     * @returns {string}
     * @private
     */
    private hashCode(str: string): string {
        let hash = 0;
        str = str || '';
        if (str.length === 0) return hash.toString();
        for (let i = 0; i < str.length; i++) {
            let char = str.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            // eslint-disable-next-line
            hash = hash & hash;
        }
        return hash.toString();
    }
}

export const localStorage = new LocalStorage();
