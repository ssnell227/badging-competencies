-- list all the companies in the database with their employees

select company.name, employee.name
from company
join employee on company.company_id = employee.company_id;