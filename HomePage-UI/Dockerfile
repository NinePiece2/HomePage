FROM node:22-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
# test
# Syncfusion License Activation
ARG SYNCFUSION_LICENSE
ENV SYNCFUSION_LICENSE=${SYNCFUSION_LICENSE}
RUN npx syncfusion-license activate
RUN export SYNCFUSION_LICENSE=""

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