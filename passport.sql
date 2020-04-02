/*
If you are using a Mac, I usually have to type this command into the terminal in
the root folder of the project:
export PATH=$PATH:/usr/local/mysql/bin/
to be able to use sql in the terminal.
1. Type: mysql -uroot -pPassword
2. Type: use db passport_demo
3. Type: source passport.sql
This will upload your sql code into mysql workbench and create the database needed
for hosting the emails and hashed passwords for the customers accounts.
*/
DROP DATABASE IF EXISTS passport_demo;
CREATE DATABASE passport_demo;
