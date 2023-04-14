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
VALUES ('John', 'Smith', 71, NULL),
    ('Mary', 'Jones', 72, NULL),
    ('David', 'Lee', 73, NULL),
    ('Sarah', 'Davis', 74, NULL),
    ('Robert', 'Johnson', 75, NULL),
    ('Karen', 'Wilson', 76, NULL),
    ('Michael', 'Anderson', 77, NULL),
    ('Jennifer', 'Brown', 78, NULL),
    ('Richard', 'Taylor', 79, NULL),
    ('Lisa', 'Martin', 80, NULL);