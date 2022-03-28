create table service(
     id serial primary key,
      cost numeric (5,2),
     name varchar(50)
);

create table client(
      id serial primary key,
       name varchar(50),
      surname varchar(50),
      cell_no  varchar(15) unique,
       password varchar(15),
     is_active boolean default true
);

create table request(
    id serial primary key,
    client_id integer,
    service_id integer,
    runner_id integer,
    status varchar(20) default 'Pending'
);


create table admin(
    id serial primary key,
     name varchar(50),
      surname varchar(50),
     email varchar (30) unique,
       password varchar(15),
     is_active boolean default true
);

create table runner(
      id serial primary key,
       name varchar(50),
      surname varchar(50),
      cell_no varchar(15)unique ,
     email varchar (30)unique,
       password varchar(15),
      rating numeric(1),
     is_active boolean default false
);

create table review(
     id serial primary key,
     runner_id integer,
     client_id integer,
     rating numeric (1),
     reason varchar(250)
);

create table address(
    id serial primary key,
    request_id integer,
    street_address varchar(30),
    suburb varchar(30),
    city varchar(30),
    postal_code varchar(4)
    
);

INSERT INTO admin(name,surname, email, password)
VALUES
('Sane','kunene', 'Sane@gmail.com', '12345');
INSERT INTO admin(name,surname, email, password
VALUES
('Matimba','Chauke', 'Matimba@gmail.com', '12345');
INSERT INTO admin(name,surname, email, password)
VALUES
('jojo','zuma', 'jojo@gmail.com', '12345');



alter table request 
add foreign key(client_id)
references client(id)
on delete cascade;

alter table request 
add foreign key(service_id)
references service(id)
on delete cascade;

alter table request 
add foreign key(runner_id)
references runner(id)
on delete cascade;

alter table address
add foreign key(request_id)
references request(id)
deferable initially deferred
on delete cascade;

alter table review
add foreign key(runner_id)
references runner(id)
on delete cascade;

alter table review 
add foreign key (client_id)
references client (id)
on delete cascade;

