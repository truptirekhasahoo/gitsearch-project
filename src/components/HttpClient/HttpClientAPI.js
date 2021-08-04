import localforage from 'localforage'
import memoryDriver from 'localforage-memoryStorageDriver'
import { setup } from 'axios-cache-adapter'

const CACHE_MAX_AGE = 24*60*60*1000; // one day
const CACHE_PREFIX = "api-github-com"

// `async` wrapper to configure `localforage` and instantiate `axios` with `axios-cache-adapter`
async function configure () {
  // Register the custom `memoryDriver` to `localforage`
  await localforage.defineDriver(memoryDriver)

  // Create `localforage` instance
  const forageStore = localforage.createInstance({
    // List of drivers used
    driver: [
      localforage.INDEXEDDB,
      localforage.LOCALSTORAGE,
      memoryDriver._driver
    ],
    // Prefix all storage keys to prevent conflicts
    name: CACHE_PREFIX
  })

  // Create `axios` instance with pre-configured `axios-cache-adapter` using a `localforage` store
  return setup({
    // `axios` options
    baseURL: 'https://api.github.com',

    // `axios-cache-adapter` options
    cache: {
      maxAge: CACHE_MAX_AGE,
      store: forageStore // Pass `localforage` store to `axios-cache-adapter`
    }
  })
}