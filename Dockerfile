FROM node:16.14
WORKDIR /usr/src/app

# dependencies
COPY package* ./
RUN npm install

# postcss & tailwind configuration
COPY *.config.js ./

# source files
COPY src src/
COPY public public/

# build into build folder
RUN npm run build

# serve on port 3000
EXPOSE 3000
CMD ["npx", "serve", "-s", "-l", "3000", "build"]
