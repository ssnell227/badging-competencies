-- one-one: company-ceo
-- one-many: company-employees
-- many-many: boss-employees (boss_employee_link)
-- alter table is down below

create table company (
    company_id serial primary key,
    name varchar(100)
);

create table CEO (
    CEO_id serial primary key,
    company_id int references company(company_id),
    employee_id int references employee(employee_id)
);

create table employee (
    employee_id serial primary key,
    name varchar(100),
    age int,
    awesome boolean,
    company_id int references company(company_id)
);

create table boss (
    boss_id serial primary key,
    employee_id int references employee(employee_id)
);

create table boss_employee_link (
    id serial primary_key,
    employee_id int references employee(employee_id),
    boss_id int referenes boss(boss_id)
);

alter table company
add column CEO_id int references CEO(CEO_id);