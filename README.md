# Desafio Like-me

## Descripción

La red social “Like Me” está apenas iniciando el proceso de desarrollo, se encuentra estudiando el mercado y analizando la competencia y ha descubierto que el éxito de esta industria se enfoca en los likes de los posts emitidos por los usuarios, por lo que decidió iniciar con el desarrollo de la lógica correspondiente a la creación de posts y a la interacción de likes que este puede tener.

En este desafío serás un desarrollador full stack developer de la empresa “Like Me” y deberás crear un servidor que disponibilice las rutas GET, POST, PUT y DELETE para consultas guardar, editar y borrarr los posts en una base de datos PostgreSQL con el paquete pg.

Para el desarrollo de este desafío dispondrás de un Apoyo Desafío - Like Me, que contiene una aplicación React.

- Crear una ruta GET con Express para devolver los registros de una tabla alojada en PostgreSQL.

- Crear una ruta POST con Express que reciba y almacene en PostgreSQL un nuevo registro.

- Agregar una ruta PUT en una API REST y utilizarla para modificar registros en una tabla alojada en PostgreSQL.

- Agregar una ruta DELETE en una API REST y utilizarla para eliminar registros en una tabla alojada en PostgreSQL.

- Capturar los posibles errores en una consulta SQL realizada con el paquete pg usando la sentencia try catch.

## Pasos a seguir

**Frontend**
1. cd frontend
2. npm i
3. npm run dev

**Backend**
1. cd backend
2. Init database desde terminal con: psql -U YOUR_POSTGRES_USER -f api/database/DDL.sql
3. npm i
4. npm run dev

## Authors

- [@Crispole](https://github.com/Crispole)
