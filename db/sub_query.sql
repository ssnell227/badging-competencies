--a complicated way of finding a boss id for the ceo of a particular company

select boss_id
from boss
where employee_id in (
    select employee_id
    from CEO
    where company_id = $1
)