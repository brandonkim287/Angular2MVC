# Brandon Kim
#User Search Application

How to run project:

$ Will most likely have to restore packages from package.json file

$ Next go ahead and delete the local UserDB.mdf from App_Data folder

$ Recreate this SQL Server Database in the App_Data folder and keep the name as UserDB.mdf

$ Once the database is created, double click on UserDB.mdf database file to open the Tables

$ Right click on tables and select New Query 

$ Copy and paste this SQL query into the new query

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CREATE TABLE [dbo].[TblUser] (
  [Id]     INT       IDENTITY (1, 1) NOT NULL,
  [FirstName] NVARCHAR (250) NULL,
  [LastName]  NVARCHAR (250) NULL,
  [Gender]   NVARCHAR (250) NULL,
  [Address] NVARCHAR (250) NULL,
  [Interests] NVARCHAR (250) NULL,
  [Age] INT NULL,
  [DateOfBirth] NVARCHAR (250) NULL,
  [Image] NVARCHAR (250) NULL,
  PRIMARY KEY CLUSTERED ([Id] ASC)
);

Insert INTO TblUser
VALUES ('Brandon', 'Kim', 'Male', '255 Anniversary Ln.', 'Basketball, Soccer, Weight Lifting', 20, '7/9/1997', 'brandon.jpg');
Insert INTO TblUser
VALUES ('Jenny', 'Dang', 'Female', '159 Catherby Dr.', 'Knitting, Sky diving, Cooking', 23, '7/11/1994', 'jenny.jpg');
Insert INTO TblUser
VALUES ('John', 'Kim', 'Male', '1226 Towne Square Ct.', 'Basketball, Cooking, Weight lifting', 22, '5/1/1995', 'john.jpg');
Insert INTO TblUser
VALUES ('Malison', 'Young', 'Female', '263 Ruth St.', 'Soccer, Video Games', 21, '10/23/1996', 'mal.jpg');
Insert INTO TblUser
VALUES ('Andrew', 'Peteresen', 'Male', '159 Arch St.', 'Weight lifting, basketball, dancing', 21, '6/18/1996', 'andrew.jpg');
Insert INTO TblUser
VALUES ('Edgar', 'Rebollar-Suarez', 'Male', '270 E Broad St.', 'Volleyball, Cross Country', 21, '8/5/1996', 'edd.jpg');
Insert INTO TblUser
VALUES ('Stacia', 'Dangerfield', 'Female', '240 Peters St.', 'Soccer, Frisbee', 21, '9/18/1996', 'stacia.jpg');
Insert INTO TblUser
VALUES ('Will', 'Chan', 'Male', '148 Abernathy Dr.', 'Football, Soccer, Weight lifting', 27, '10/20/1990', 'will.jpg');
Insert INTO TblUser
VALUES ('Kyle', 'Millar', 'Male', '260 Riverbend Rd.', 'Basketball, Frisbee, Snowboarding', 21, '11/27/1996', 'kyle.jpg');
Insert INTO TblUser
VALUES ('Calvin', 'Graffunder', 'Male', '159 Arch St.', 'Frisbee, Basketball, Weightlifting', 21, '10/27/1996', 'cal.jpg');

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$ Run the query to generate the new table with the table data

$ Next you will most likely have to go to DBContext folder and delete the UserDBEntities.edmx model

$ Once you have done this, right click on the DBContext folder and add a new item

$ Go under the data section in the left. Once you're there, create a new ADO.NET Entity Data Model.

$ Name this model UserDBEntities and click add

$ On the next page, select EG Designer from database and hit next

$ On this page, hit new connection

$ Make sure data source is set to Microsoft SQL Server Database File

$ Hit browse and locate the UserDB.mdf in the project folder under App_Data

$ Once this is done, hit okay

$ Make sure the Save connection setttings in Web.Config as checkbox is checked

$ Set the connection UserDBEntities if it is not already

$ You might run into an error if it is not

$ Hit next and if it lets you choose version of the EF to use, select 6.x

$ On the next page select the tables check box, make sure the model namespace
  is UserDBModel and hit finish

$ At this point, you should be able to run the application by right clicking the
  Angular2MVC folder and go to view in browser under view 

$ If you want to add new images to the application, you must add the image under the images folder

$ I recommend going to the file explorer and adding it there.

Reflection:
$ This project was challenging for me because prior to this I had never used Angular or ASP.NET.
$ This was the first ASP.NET Web API with Angular that I've done. I could not finish implementing
$ unit tests for this project. You can see where I started to create tests for the UserService component
$ under user.service.spec.ts in the Service folder within the app folder. I think if I had more time, 
$ I could have finished the unit tests, however I already had prior arrangements for this weekend,
$ so I had to stop here. I had planned a vacation with my family for the weekend, so I won't be able
$ to work on this anymore. I learned a ton about Angular while making this project, and how ASP.NET
$ Web APIs work.