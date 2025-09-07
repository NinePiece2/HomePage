FROM node:22-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22-alpine AS deploy

WORKDIR /app
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
RUN npm ci --only=production

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]