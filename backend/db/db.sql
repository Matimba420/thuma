create table users(
	id serial primary key,
	name varchar(30),
	surname varchar(30),
	cell_no varchar(15),
	email varchar(30),
	created_at date default current_date,
	updated_at date default current_date,
	password varchar(200),
	role varchar(20),
	is_active boolean default true
);

create  table request(
	id serial primary key,
	client_id integer,
	runner_id integer,
	service_id integer,
	status varchar(50) default 'pending',
	comment varchar(255),
	req_date date default current_date
);

create  table address(
	id serial primary key,
	request_id integer,
	street_address varchar(50),
	suburb varchar(50),
	city varchar(50),
	postal_code varchar(4)
);

create  table review(
	id serial primary key,
	runner_id integer,
	client_id integer,
	rating integer,
	request_id integer,
	reason varchar(255)
);

create  table service(
	id serial primary key,
	name varchar(50),
	description varchar(255),
	cost numeric(5,2),
	image varchar(200)
);


--constraints

alter table request
add foreign key(client_id)
references users(id)
on delete cascade;

alter table request
add foreign key(runner_id)
references users(id)
on delete cascade;

alter table request
add foreign key(service_id)
references service(id)
on delete cascade;

alter table address
add foreign key(request_id)
references request(id)
on delete cascade;

alter table review
add foreign key(client_id)
references users(id)
on delete cascade;

alter table review
add foreign key(runner_id)
references users(id)
on delete cascade;

alter table review
add foreign key(request_id)
references request(id)
on delete cascade;


--Adding services
insert into service(name, description, cost, image)
values('Lawn Mowing', 'Get someone to mow the lawn for you', 99.99, 'https://i.ibb.co/myQkmvp/lawn-mowing.jpg'),
('Shopping', 'Get someone to do shopping for you', 150,'https://i.ibb.co/RjK8Jvw/shoping.jpg'),
('Certify Documents', 'Send someone to certify documents for you, give him/her your copies and originals', 75 ,'https://i.ibb.co/H7db2Ds/certify-doc.jpg'),
('Queuing' , 'Send someone to stand in a queue for you and you will find him/her there standing on your behalf', 90, 'https://i.ibb.co/rc3WrCC/queue.jpg');

--