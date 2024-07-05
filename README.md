# MVC-Blog-Post

## Descirption

This repository contains the code for an MVC (Model-View-Controller) architecture-based Blog Post application.

## User Story

AS A developer who writes about tech

I WANT a CMS-style blog site

SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria

- GIVEN a CMS-style blog site
- WHEN I visit the site for the first time
- THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

- WHEN I click on the homepage option
- THEN I am taken to the homepage

- WHEN I click on any other links in the navigation
- THEN I am prompted to either sign up or sign in

- WHEN I choose to sign up
- THEN I am prompted to create a username and password

- WHEN I click on the sign-up button
- THEN my user credentials are saved and I am logged into the site

- WHEN I revisit the site at a later time and choose to sign in
- THEN I am prompted to enter my username and password

- WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the dashboard, and the option to log out

- WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

- WHEN I click on an existing blog post
- THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

- WHEN I enter a comment and click on the submit button while signed in
- THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

- WHEN I click on the dashboard option in the navigation
- THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

- WHEN I click on the button to add a new blog post
- THEN I am prompted to enter both a title and contents for my blog post

- WHEN I click on the button to create a new blog post
- THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

- WHEN I click on one of my existing posts in the dashboard
- THEN I am able to delete or update my post and taken back to an updated dashboard

- WHEN I click on the logout option in the navigation
- THEN I am signed out of the site

- WHEN I am idle on the site for more than a set time
- THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

## Features

- User Management: Allows users to sign up, log in, and manage their profiles.
- Post Management: Users can create, edit, and delete blog posts.
- Comment System: Users can comment on posts.
- Session Management: Uses sessions for user authentication and authorization.
- Database Integration: Uses PostgreSQL for data storage.

## Installation

### Clone the repository:

```
git clone https://github.com/Alex-Design-For-Reap/MVC-Blog-Post.git
cd MVC-Blog-Post
```

### Install dependencies

```
npm install
```

### Create a .env file in the root directory and configure the following variables:

```
DATABASE_URL=your_database_url
SESSION_SECRET=your_session_secret
```

Replace your_database_url with your PostgreSQL database URL and your_session_secret with a secure session secret.

### Run database migrations (if applicable):

If using Sequelize or any other ORM that requires migrations, run:

```
npm run migrate
```

### Start the application

```
npm start
```

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize
- HTML/CSS/TAILWIND

## Deployment

This application is deployed on [Render.com](https://render.com/). Ensure you have set up the necessary environment variables and secrets in your Render project settings before deploying.

## Screenshots of running application

### Login

![alt text](assets/images/login.png)

### Sign up

![alt text](assets/images/signup.png)

### Homepage

![alt text](assets/images/homepage.png)

### Create, Edit, and Delete Posts

![alt text](assets/images/create-edit-delete-post.png)

### Add Comments

![alt text](assets/images/comments.png)

## Link to Deployed Application

https://mvc-blog-post.onrender.com/

## How to Contribute and Questions

Contributions are welcome!
If you want to contribute or have any questions, here are my channels:
gitHub: https://github.com/Alex-Design-For-Reap

email: s.alexsilva@gmail.com

Author: Alex Da Silva https://github.com/Alex-Design-For-Reap/MVC-Blog-Post
