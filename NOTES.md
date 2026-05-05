1. `npm init`
  - Forandre `type` fra `commonjs` til `module`;
2. installer `express`, `npm i express`
3. Opprett mapper: `src/{controllers, routes, utils}`
4. Opprett fil: `src/index.js`
5. Sett opp `src/index.js` med endepunkt og oppstart av server
6. Installere `nodemon`, `npm i -D nodemon` - `npm i --save-dev nodemon`
7. Installere `vitest`



## Inndatavalidering 

- Data vi tar imot
- Ikke data som vi tar initiativ til å motta / behandle
- Klient som sender **data** uoppfordret til server
  

### Vi mottar data:
```ts
const req = {
  body: {
    email: "foobar12@mail.com",
    password: "passord123"
  }
}
```


### Dataskjema:
```ts
{
  body: {
    email: {
      type: string,
      max: 32,
      min: 6,
      match: /\@/
    },
    password: {
      type: string,
      match: /[\w\d\s\{\[\]\}!&%¤#\"]{8,}/gi
    }
  }
}
```

- Bibliotek: `zod`
