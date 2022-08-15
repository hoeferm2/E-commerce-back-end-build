# E-commerce-back-end-build

- Repo URL: https://github.com/hoeferm2/E-commerce-back-end-build
- Video Demonstration: https://drive.google.com/file/d/1U9BwssVXmXun5hRjfw2cPcTMz3_eBAi7/view

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [APIs](#APIs)
- [Usage](#usage)
- [Bugs](#bugs)
- [Credits](#credits)

## Description

This is a back end data base build. This allows an ecommerce website to update inventory and stock. Products can be organized via categories or descriptor tags. 

## Installation

- Users should have Node JS installed
- This applicaiton uses express, Sequelize, mysql2, and dotenv.
- Users should run npm i to install the correct packages.
- Users will create a .env file with DB_NAME: "ecommerce_db" DB_PASSWORD: user password, and finally DB_USER: username.
- User will then run mysql and run the schema.sql file out of the data base folder.
- Finally user will run npm seed to initially seed the database.

## APIs

- This API has four categories. Products, categories, tags, and producttags.
- Products are items for sale this also inclues iten stock.
- Categories organize products into types of product.
- Tags are product descriptors.

## Usage

- Users will be able to update ecommerece_db through GET POST PUT and DELETE requests
- Users can edit or remove entries via the entry id number.

## Bugs

- Check DB in insomnia after seeding, it shows null id values double check in mysql via "use ecommerce_db" and "select * from (table)"


## Credits

- Thanks to Gabe Sowa for walking me through routes.
