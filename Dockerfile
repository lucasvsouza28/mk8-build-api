# Install dependencies only when needed
FROM node:lts-alpine AS deps

WORKDIR /opt/app
COPY package*.json ./
RUN npm ci --only=production

# Build with typescript
FROM node:lts-alpine AS builder

WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN npm run build:js

# Production image, copy all the files and run
FROM node:lts-alpine AS runner

WORKDIR /opt/app
ENV NODE_ENV=production
COPY tsconfig.json ./
COPY --from=builder /opt/app/dist ./src
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/node_modules ./node_modules

CMD ["node", "-r", "tsconfig-paths/register", "./src/index.js"]
