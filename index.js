const Cache = require('./cache')

const cache = new Cache

cache.set("omer", "klein")
cache.set("sdvd", "klesadvasdin")
cache.set("sdvasd", "sadvsad")
cache.set("sdvdsvsasd", "wdscsda")
console.log(cache.get("omer"))
console.log(cache.toObject())
