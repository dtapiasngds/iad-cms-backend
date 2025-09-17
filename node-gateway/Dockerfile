FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias y las instala
# Esto aprovecha el caché de Docker para no reinstalar si no cambian
COPY package*.json ./
RUN npm install

# Copia el resto del código de tu aplicación
COPY . .

# Compila el código de TypeScript a JavaScript
RUN npm run build

# Expone el puerto que usa tu gateway
EXPOSE 3000

# El comando para iniciar la aplicación (ejecuta el código compilado)
CMD ["npm", "start"]