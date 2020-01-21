"SELECT name FROM students"

"SELECT * FROM students WHERE Age > 30"

"SELECT name FROM students
WHERE Age = 30 AND Gender = "F""

"SELECT Points FROM students
WHERE name = "Alex""

"INSERT INTO students (Name,Age,Gender,Points)
VALUES ("Mohamad",22,"M",200)"

"UPDATE students
SET Points = 350
WHERE Name = "Basma""

"UPDATE students
SET Points = 150
WHERE Name = "Alex""

" CREATE TABLE graduates (
   ID INT AUTO_INCREMENT NOT NULL  PRIMARY KEY,
   Name TEXT NOT NULL UNIQUE,
   Age INT,
   Gender TEXT,
   Points INT,
   Graduation TEXT
   )"

"INSERT INTO graduates (ID, Name, Age, Gender, Points)
   SELECT ID, Name, Age, Gender, Points 
   FROM students
   WHERE Name = "Layal""

"UPDATE graduates
    SET Graduation = "08/09/2018"
    where Name = "Layal""

"DELETE from students
    WHERE Name = "Layal""

"CREATE TABLE data (
    Name TEXT,
    Cname TEXT,
    Cdate TEXT
    )"

    "SELECT employees.Name
    FROM employees
    INNER JOIN companies ON employees.Company=companies.name
    WHERE companies.date < 2000 "

"SELECT companies.name
    FROM companies
    INNER JOIN employees ON companies.Name=employees.Company
    WHERE employees.Role = "Graphic Designer""


   " SELECT Name
    FROM students
    ORDER by Points DESC
    LIMIT 1"

"SELECT AVG(Points) From students"

"SELECT count(Name)
    FROM students 
    WHERE Points = 500"

" SELECT Name
    FROM students
    WHERE Name like'%s%' "

"SELECT Name FROM students
    ORDER by Points DESC"