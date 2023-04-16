USE employees_db;
INSERT INTO department(name)
VALUES ("Accounting"),
    ("IT"),
    ("Research"),
    ("Sales"),
    ("Marketing"),
    ("HR");
INSERT INTO role (title, salary, dept_id)
VALUES ('Software Engineer', 90000.00, 2),
    ('Marketing Coordinator', 50000.00, 5),
    ('Sales Manager', 110000.00, 4),
    ('Human Resources Assistant', 40000, 6),
    ('Data Analyst', 75000.00, 2),
    ('Graphic Designer', 55000.00, 5),
    ('Operations Manager', 100000.00, 4),
    ('Customer Service Rep', 35000.00, 4),
    ('Product Manager', 120000.00, 3),
    ('Event Planner', 60000.00, 6);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, NULL),
    ('Mary', 'Jones', 2, NULL),
    ('David', 'Lee', 3, NULL),
    ('Sarah', 'Davis', 4, NULL),
    ('Robert', 'Johnson', 5, NULL),
    ('Karen', 'Wilson', 6, NULL),
    ('Michael', 'Anderson', 7, NULL),
    ('Jennifer', 'Brown', 8, NULL),
    ('Richard', 'Taylor', 9, NULL),
    ('Lisa', 'Martin', 10, NULL);