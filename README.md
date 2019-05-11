# Lightning Network Explorer

This is a simple lightning network explorer that uses [LND](https://github.com/litecoinfinance/lnd) as a source of network graph. You can see it live on http://lightning.ltfnd.info/

## Installation

Clone repository:

```
git clone https://github.com/chemicstry/litecoinfinance.git
```

Install npm dependencies (inside project folder):

```
npm install
```

## Running

### Requirements

If connecting to a remote LND, you need to set `lndHost` and `lndDir` params. `lndDir` must have `admin.macaroon` and `tls.cert` files.

For full configuration options use `node server.js --help` or see `options.js` file.

### Start the server

```
node server.js
```

### Running in production mode (faster, without hot module reload)

```
npm run build
NODE_ENV=production node server.js
```

## Credits

Thanks to https://github.com/mably/lncli-web for `lightning.js` grpc wrapper.
