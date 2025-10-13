FROM node:22-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Syncfusion License Activation
ARG SYNCFUSION_LICENSE
ENV SYNCFUSION_LICENSE=${SYNCFUSION_LICENSE}
RUN npx syncfusion-license activate
RUN export SYNCFUSION_LICENSE=""

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Create .env file for build-time environment variables
ARG NEXT_PUBLIC_UMAMI_WEBSITE_ID
ARG NEXT_PUBLIC_UMAMI_URL
ENV NEXT_PUBLIC_UMAMI_WEBSITE_ID=${NEXT_PUBLIC_UMAMI_WEBSITE_ID}
ENV NEXT_PUBLIC_UMAMI_URL=${NEXT_PUBLIC_UMAMI_URL}
RUN echo "NEXT_PUBLIC_UMAMI_WEBSITE_ID=${NEXT_PUBLIC_UMAMI_WEBSITE_ID}" > .env
RUN echo "NEXT_PUBLIC_UMAMI_URL=${NEXT_PUBLIC_UMAMI_URL}" >> .env

COPY . .
RUN npm run build
RUN npm prune --omit=dev 

FROM node:22-alpine AS deploy

WORKDIR /app

COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
