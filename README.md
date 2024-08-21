# APIRest_seguridad
En este repositorio está almacenada una API REST con base de datos MYSQL almacenada en Docker.

Comando docker utilizado: docker run --name sqldb -d -p 3307:3306 --rm -v mysqldata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD='test' mysql:latest

Comandos de creación SQL (tabla y base de datos):

sh-5.1# mysql -u root -ptest
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 9.0.1 MySQL Community Server - GPL

Copyright (c) 2000, 2024, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> create database ecom;
Query OK, 1 row affected (0.01 sec)

mysql> use ecom;
Database changed
mysql> CREATE TABLE products(
    ->     -> id INT PRIMARY KEY AUTO_INCREMENT,
    ->     -> title VARCHAR(32) NOT NULL,
    ->     -> description VARCHAR(255) NOT NULL,
    ->     -> price INT NOT NULL
    ->     -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '-> id INT PRIMARY KEY AUTO_INCREMENT,
    -> title VARCHAR(32) NOT NULL,
    -> ' at line 2
mysql> CREATE TABLE oroducts(
    -> ^C
mysql> CREATE TABLE products(
    -> id INT PRIMARY KEY AUTO_INCREMENT,
    -> title VARCHAR(32) NOT NULL,
    -> description VARCHAR(255) NOT NULL,
    -> price INT NOT NULL
    -> );
Query OK, 0 rows affected (0.05 sec)

mysql> show tables;
+----------------+
| Tables_in_ecom |
+----------------+
| products       |
+----------------+
1 row in set (0.01 sec)
