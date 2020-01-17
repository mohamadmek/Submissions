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
