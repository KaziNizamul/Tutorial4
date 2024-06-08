# Profile Registration and Profile Page's Navigation

This project is a simple interactive site built with React and styled using Tailwind CSS. It consists of three main pages: a Login page, a Profiles listing page, and a Profile Detail page.

## Overview

The Login page allows users to log in by filling out a form with the following fields:

- Email: Requires a valid email format.
- Password: Requires the user password.

Upon successful login, users are redirected to the Profiles listing page, which displays a list of users fetched from an API. Users can be displayed as list or grid items, and clicking on any user (item/card) opens a Profile Detail page displaying detailed information about the user.

The Profiles listing page also includes a search box to filter users based on their First Name or Last Name.



## Features

```
Routing: Implemented using React Router for navigation between pages.
```

## Deployment
The project is deployed on Vercel and can be accessed at the following link:

https://tutorial3-eight.vercel.app

## GitHub Repository

The source code for this project is available on GitHub:

https://github.com/KaziNizamul/Tutorial4

## GitLab Repository

The source code for this project is available on GitLab:

https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/tree/main/Tutorials/Tutorial4

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/KaziNizamul/Tutorial4.git
```

2. Navigate to the project directory:
```bash
cd Tutorial4
```

3. Install dependencies:
```bash
pnpm install
```

4. Start the development server:
```bash
pnpm run dev
```

## Usage

- Navigate to the Login page.
- Enter your email and password.
- Click the "Login" button.
- Upon successful login, you will be redirected to the Profiles listing page displaying a list of users.
- Use the search box to filter users by their first or last name.
- Click on any user to view their profile details on the Profile Detail page.
- On the Profile Detail page, use the "Back" button to navigate back to the Profiles listing page with a smooth transition.
