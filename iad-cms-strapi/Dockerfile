FROM node:20-alpine

# NUEVA LÍNEA: Instala las dependencias de sistema para sharp
# Se hace esto porque dependiendo del sistema operativo base, las dependencias pueden variar
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm vips-dev

# Establece el directorio de trabajo
WORKDIR /opt/app

# Instala las dependencias aprovechando el caché
COPY package*.json ./
RUN npm install

# Copia el resto del código del proyecto
COPY . .

# Construye el panel de administración de Strapi
# El flag --clean elimina la build anterior para evitar conflictos
RUN npm run build --clean

# Expone el puerto por defecto de Strapi
EXPOSE 1337

# Comando para iniciar Strapi en modo desarrollo
# En producción, usarías ["npm", "start"]
CMD ["npm", "run", "develop"]