1- SELECT name FROM students

2- SELECT * FROM students WHERE Age > 30

3- SELECT name FROM students
   WHERE Age = 30 AND Gender = "F"

4- SELECT Points FROM students
   WHERE name = "Alex"

5- INSERT INTO students (Name,Age,Gender,Points)
   VALUES ("Mohamad",22,"M",200)

6- UPDATE students
   SET Points = 350
   WHERE Name = "Basma"

7- UPDATE students
   SET Points = 150
   WHERE Name = "Alex"

8- CREATE TABLE graduates (
   ID INT AUTO_INCREMENT NOT NULL  PRIMARY KEY,
   Name TEXT NOT NULL UNIQUE,
   Age INT,
   Gender TEXT,
   Points INT,
   Graduation TEXT
   )

9- INSERT INTO graduates (ID, Name, Age, Gender, Points)
   SELECT ID, Name, Age, Gender, Points 
   FROM students
   WHERE Name = "Layal";

10- UPDATE graduates
    SET Graduation = "08/09/2018"
    where Name = "Layal"

11- DELETE from students
    WHERE Name = "Layal"

12- CREATE TABLE data (
    Name TEXT,
    Cname TEXT,
    Cdate TEXT
    )

    SELECT employees.Name
    FROM employees
    INNER JOIN companies ON employees.Company=companies.name
    WHERE companies.date < 2000 

13- SELECT companies.name
    FROM companies
    INNER JOIN employees ON companies.Name=employees.Company
    WHERE employees.Role = "Graphic Designer"

14- Solution 1:
    SELECT Name from (select Name ,max(Points) from students)
    Solution 2:
    SELECT Name
    FROM students
    ORDER by Points DESC
    LIMIT 1

15- SELECT AVG(Points) From students

16- SELECT count(Name)
    FROM students 
    WHERE Points = 500

17- SELECT Name
    FROM students
    WHERE Name like'%s%' 

18- SELECT Name FROM students
    ORDER by Points DESC