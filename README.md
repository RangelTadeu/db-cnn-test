# Database connection test

It is just a simple app to verify credentials or check the connection between the server and the database

## Requirements

- node
- npm

## Installation

clone repo:

```bash
  git clone git@github.com:RangelTadeu/db-cnn-test.git
```

install dependencies:

```bash
  cd db-cnn-test && npm install
```

To add the alias run:

```bash
  ./db-cnn-test.sh
```

## Usage

```bash
    db-cnn-test $DRIVER $HOST $PORT $DB $USERNAME $PASSWORD
```

## Supported Drivers

- oracle
- mssql (Microsoft SQL Server)
- postgres
- mysql
