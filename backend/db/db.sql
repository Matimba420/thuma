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
	column req_date date default current_date
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
	reason varchar(255)
);

create  table service(
	id serial primary key,
	name varchar(50),
	description varchar(255),
	cost numeric(5,2),
	image varchar(200)
);

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