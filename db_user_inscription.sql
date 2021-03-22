drop database if exists user_inscription;
create database user_inscription;
use user_inscription;
create table user_mail (
    id int not null auto_increment primary key,
    nom varchar(255) not null,
    prenom varchar(255) not null,
    mail varchar(255) not null,
    password varchar(255) not null,
    UNIQUE (mail)
);
