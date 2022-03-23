# 📝 Note-Taker

📌 [Link to Deployed Application](https://awidener-tech-blog.herokuapp.com/)

## 🔨 Task
To create a blog application that utilizes both front-end and back-end technologies. The application should allow the user to sign up and create an account that will persist until the user logs out, or the cookie expires. Then, the user should be able to view and create posts, and comment on premade posts.

## 🧩 Tech Stack
- HTML, CSS, JavaScript (ES6)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [MySQL](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [express-session](https://www.npmjs.com/package/express-session)

## 📎 How to Use
When the user enters the application, they will be able to view any previously created posts by other members of the app. To access any of the features, the user will be prompted to sign up or login. After creating an account or logging in, they will then be sent to their personal dashboard where they can write a new post or view/edit/delete posts they've previously made.

On the home page, the user can also click on any post which will redirect them to a screen where they can view and create comments on that post.

## 🔍 Preview

https://user-images.githubusercontent.com/70721378/153522710-7542b024-44e3-464c-bf2b-8a7f78ffa427.mp4

## 📷 Screenshots
![Home page](images/usage-1.png)

![Sign up page](images/usage-2.png)

![Login page](images/usage-3.png)

![Dashboard](images/usage-4.png)

![Edit a Post](images/usage-5.png)

![Comments](images/usage-6.png)

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```
