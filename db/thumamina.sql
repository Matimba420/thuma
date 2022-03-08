create table admin(
id serial primary key,
	name character varying (50),
	surname character varying (50),
	email character varying (50),
	password character varying (50)

);


create table public.user(
id serial primary key,
	name character varying (50),
	surname character varying (50),
	email character varying (50),
	password character varying (50),
    cell_num character varying (50),
    is_active boolean default true

);


create table runner(
id serial primary key,
	name character varying (50),
	surname character varying (50),
	email character varying (50),
	password character varying (50),
    cell_num character varying (15),
    address_id character varying(50),
    ratings numeric(3,2),
    service_id  numeric(5),
    is_active boolean default true

);


create table services(
id serial primary key,
	service character varying (50),
    amount numeric(5,2)

);



create table address(
id serial primary key,
	street_name character varying (50),
	subarb character varying (50),
	postal_code character varying (4),
	runner_id character varying (50)

);



create table reviews(
id serial primary key,
	runner_id character varying (50),
    user_id character varying(50),
    rate numeric (3,2),
    comment character varying(500)



);

create table history(
id serial primary key,
	runner_id character varying (50),
    user_id character varying(50),
    service_id character varying(50),
    transac_date date default current_date
  )





