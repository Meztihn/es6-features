Implemented by Babel and included in ES6 but untouched:
* Generators, for-of, iterators -- depend on Symbols
* Modules -- require framework support
* Unicode support -- just correct work with unicode strings and 'u' regex flag

Included in ES6 but nobody cares:
* Tail recursion optimisation

Included in ES6 but not implemented by Babel:
* Proxy

Implemented by Babel but not included in ES6:
* Decorators
* Do expressions
* Trailing function commas
* Type annotations
* Function binding (class::method)
* Async functions

Included in Polyfill:
* More methods in standard classes (e.g. Array#find, Object#values etc.)
* Symbols
* Collections (Iterable, Set, Map, WeakSet, WeakMap)
* Promises
* Reflection