create database game_store ;


create table gamer (email varchar(50) not null  ,
password varchar(50) not null  ,
nom varchar(50) ,
prenom varchar (50) ,
tel integer ,
photo varchar(150) ,
sexe varchar(5) check (sexe in ('homme','femme') ) ,
rank integer ,
CONSTRAINT PK_gamer PRIMARY KEY (email,password)
) ;



create table jeu (nom varchar(100)  not null primary key ,
version varchar(25) ,
file_jeu varchar(100) ,
description varchar(250) ,
logo varchar(100) ) ;


create table admin  (nom varchar(50)not null
 , code varchar(50)not null
 , password varchar(50) not null  ,
CONSTRAINT PK_admin PRIMARY KEY (nom,code,password) );


create table profil_gamer (
email varchar(50) ,
password varchar(50) ,
nom varchar(100) ,
FOREIGN KEY (nom) REFERENCES jeu(nom),
FOREIGN KEY (email,password) REFERENCES gamer(email,password)
 ) ;

create table categorie ( nom varchar (50) not null primary key ) ;


create table cat_jeu (nom_j varchar(100) ,
nom_c varchar(50) ,
FOREIGN KEY (nom_j) REFERENCES jeu(nom) ,
FOREIGN KEY (nom_c) REFERENCES categorie (nom) ) ;