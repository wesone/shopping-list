# Shopping List

## General

This project is a very simple shopping list. You can add and remove products or mark them as "bought".


It consists of a `Node.js` backend written in `TypeScript` that uses `Express`, a `MongoDB` for persistence and `Mongoose` for object data modeling. It uses `Zod` for validation and type inferring. Type stripping is used, so there is no need for transpiling the TypeScript code.


Its `React` frontend uses `Next.js`, the component library `MUI` and `SWR` for state management. It is also written in `TypeScript`.

## Setup

- Install dependencies (`npm ci`) inside the backend folder and the frontend folder
- Run `docker compose up` to start Docker services for backend, frontend and the MongoDB
- Open http://localhost:3000 in the browser to view the frontend

## How to use

- Use the form on the left to add new products to the list
  - When on a mobile device open the form with the  action button at the bottom right
- Click on the trash can icon next to a product to remove it from the list
- Click on the icon in front of a product (shopping cart or checkmark) to toggle it's "bought" state


