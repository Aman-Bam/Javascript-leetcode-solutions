
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.



class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const now = Date.now();
    const exists = this.cache.has(key);
    const isUnexpired = exists && this.cache.get(key).expiresAt > now;

    // Set or overwrite the key with new value and expiry
    this.cache.set(key, {
      value,
      expiresAt: now + duration
    });

    return isUnexpired;
  }

  get(key) {
    const now = Date.now();
    const entry = this.cache.get(key);

    if (!entry || entry.expiresAt <= now) {
      this.cache.delete(key);  // clean up expired entry
      return -1;
    }

    return entry.value;
  }

  count() {
    const now = Date.now();
    let count = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiresAt > now) {
        count++;
      } else {
        this.cache.delete(key);  // clean up expired
      }
    }

    return count;
  }
}
