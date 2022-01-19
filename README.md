# api-dna

Project built with the main objective of studies and technical task for a vacancy of software engineer in Mercado Livre.


## Dependencies

* [NodeJS](https://nodejs.org)
* [Yarn](https://yarnpkg.com/getting-started/install)
* [MongoDB](https://docs.mongodb.com/manual/installation)

## How to run

After you have the dependencies installed, run:
```bash
yarn install
yarn dev
```

or you can also use docker, run:
```bash
docker-compose up -d
```

## API resources

### POST /simian
```bash
curl --request POST \
  --url http://localhost:3000/simian \
  --header 'Content-Type: application/json' \
  --data '{
    "dna": [
      "ATCCCC",
      "CTGTGC",
      "TAGTGC",
      "AGCAGG",
      "CAACTA",
      "TCACTG"
    ]
  }'
```

### GET /stats
```bash
curl --request GET \
  --url http://localhost:3000/stats
```
