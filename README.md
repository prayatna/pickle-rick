All things Rick and Morty

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## About

The project consists of Home page, Character page, Profile page and Signup page.
Home page is public. Character page is only accessible once you signup. The Signup data is stored in a cookie for now. This is used to read the data and show on the Profile page. Through the profile page, the information can be updated which in turn updates the cookie.
[WIP: still some jankiness when going from profile page to character page - yet to be fixed]

The Character page lists out all the character from Rick and Morty series (using the public graphQL API). Each card has image and brief info about the character. This page is paginated, and results 20 item per page. Every page increment can be accessed by clicking the specific page number or changing the url to `/characters?page=[your_page_number]`
[WIP: next button is broken and yet to be fixed]

Clicking each character item will open a modal dialog. When doing so, it makes another API call to get information about an individual character(character ID is passed on the query). The modal shows the image and some information from the api response.

There are two apollo clients one for server component (to get all character list) and one for client (individual character details). This was necessary as getting individual character details depended on user event.

This project does not contain any test coverage. This was my first time using NextJS, GraphQL, Apollo client, ChakraUI so has been a challenging little excercise :)

## Local Development

First install local dependencies

```
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed on Vercel free tier

You can check the project live on https://pickle-rick-ashen.vercel.app
