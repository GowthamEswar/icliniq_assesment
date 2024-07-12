# Uconnect

The LifeWink Frontend-Web - description

## Developer Setup

-   [Githublink](https://github.com/GowthamEswar/icliniq_assesment)
    clone the project link then open command prompt run `cd ecommerce-backend`
    then run script `npm install` and `npm run dev`

## backend Folder Structure

```
├── node_modules (.gitignore)
├── src
│ ├── modules
│ │ │ ├── cart
| | | ├── common
│ │ │ ├──  product
│ | | │ ├── controller
│ | | │ ├── model
│ | | │ ├── respositry
│ | | │ ├── service
│ | | │ ├── validation
│ ├── test
│ │ └── product.test.ts
│ ├── index.tsx
├── .env
├── jest.config.json
├── Dockerfile
├── .dockerignore
└── tsconfig.json
├── .gitignore
├── package.json
└── README.md
└── package-lock.json
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the unit test result.

### `npm run build`

Builds the app for production to the `dist` folder.\

### `API Documentation`

GET /api/products: Retrieve all products.
POST /api/products: Add a new product.
GET /api/products/
: Retrieve a product by ID.
PUT /api/products/
: Update a product by ID.
DELETE /api/products/
: Delete a product by ID.