# convert-string-to-type

Simple javaScript type conversion.

## Installation

##### Yarn

```sh
yarn add convert-string-to-type
```

##### Npm

```sh
yarn install convert-string-to-type
```

## Usage

```js
import convertToType, { toBoolean, toNumber, toString } from 'convert-string-to-type'

const number = convertToType('18') // => 18
const number = toBoolean('20') // => 20

const boolean = convertToType('true') // => true
const boolean = toBoolean('False') // => false

const string = convertToType('string') // => 'string'
const string = toString(200) // => '200'
```
