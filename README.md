
# Teck Stach

### React: 
Jeg har valgt React Framework til at bygge min applikation, fordi React har en genbrugelige komponenter. React har komponenter genanvendelighed, det giver udviklere mulighed for at bruge en komponent flere gange i stedet for at oprette flere komponenter. React er også let at forstå sammenlignet med andre Framework. Jeg kan virkelig godt lide react-udviklerværktøjer, fordi React-værktøjer hjælper mig med nemt at opdage mine barn- og forældrekomponente.
React har også et stærkt fællesskab, react-eksperter uploader jævnligt[regularly] gratis react tutorials på youtube og skriver dybdegående artikler om react tutorial og blogs på internettet. React har en god QA sites som stackoverflow, så hvis jeg sidder fast, mens jeg bruger react, kan jeg næsten altid få en løsning. React er en meget UI-fokuseret Framework. 
På grund af React-skabelonen føler jeg, at jeg også sparer en masse tid under produktiviteten

### Css: 
Jeg beslutter mig for at bruge css til at style mit projekt. da mit projekt ikke er stort, er det bedre at bruge css i stedet for Frameworks som TailwindCss. det gør også min produktivitet hurtig. Brug af css gør det nemt at navigere gennem mine filer, fordi css er adskilt fra min HTML-fil.

# Pakker:

### React-hook-form:
React Hook Form er et bibliotek, der hjælper mig med at validere formularer i React. Det er et minimalt bibliotek uden andre afhængigheder, mens det er effektivt og ligetil at bruge, hvilket kræver, at udviklere skriver færre linjer kode end andre formbiblioteker.

### Yup:
Yup er en JavaScript-skemabygger til værdiparsing og validering. Definer et skema, transformer en værdi for at matche, valider formen på en eksisterende værdi eller begge dele. Yup skemaer er ekstremt udtryksfulde og tillader modellering af komplekse, indbyrdes afhængige valideringer eller værditransformationer

### React-router-dom:
React Router Dom bruges til at bygge enkeltsides applikationer, dvs. applikationer, der har mange sider eller komponenter, men siden bliver aldrig opdateret i stedet for, at indholdet hentes dynamisk baseret på URL'en. Denne proces kaldes Routing, og den er muliggjort ved hjælp af React Router Dom.

### Nodmailer:
Nodemailer er en Node. js-modul, der giver dig mulighed for nemt at sende e-mails fra din server. Uanset om du vil kommunikere med dine brugere eller bare give dig selv besked, når noget er gået galt. Hvis du har en Gmail-konto, kan du bruge den konto med nodemailer direkte. Der er dog flere ulemper ved at gøre det. For det første er der en grænse for udgående e-mail: 500 pr. dag, og hver modtager tæller som 1 udgående e-mail.

### TailwindCss:

Tailwind CSS gør det hurtigere at skrive og vedligeholde koden til din applikation. Ved at bruge denne utility-first framework behøver du ikke skrive tilpasset CSS for at style din applikation. I stedet kan du bruge hjælpeklasser til at kontrollere udfyldning, margen, farve, skrifttype, skygge og mere af din applikation. den mest vellidte utility-first CSS-Framework til hurtig UI-oprettelse er Tailwind CSS. Det er nemt at tilpasse, tilpasser sig til enhver design, og byggestørrelsen er lille." Tailwind gør bare mit liv nemmere. Det er stadig CSS og du bruger flex grid osv. men bare hurtigere at skrive og vedligeholde.
```jsx
const projectArray = [
  {
    name: "THE GREEK ISLANDS",
    description:
      "A website that provides information about the Greek islands. through the website the user can see some images of the Islands and can read about it. I learnt how to make read more and read less through the project and I also learnt how to change the images by clicking right and left arrows.",
    technologies: "Html, Css, Javascript Git and Github",
    githubUrl: "https://github.com/DEJENERUTA/next-greekilands-project",
    liveDemoUrl: " https://dejeneruta.github.io/next-greekilands-project/",
    image: "/assets/greek-island-project.png",
  },
  {
    name: "TRAINER APP",
    description:
      "A trainer app is a web application project  that used for fitness center. the app will help the user to see trainers, available classes, and a form to login and sign up for classes.  in this project I used the react-hooks library to create a state management system. I also used the react-router-dom library to navigate between pages. in this project I learnt fetching data from an API and, learn a lot about props and state.",
    technologies: "React.Js",
    githubUrl: "https://github.com/DEJENERUTA/terminsprove",
    liveDemoUrl: "https://terminsprove.vercel.app/",
    image: "/assets/pre-exam-project.png",
  },
  {
    name: "NEWS BOX",
    description:
      "News box  is a web application that is used to display news from an api. I fetched the new york times api and displayed the news in a list. I learn how to make dark mode and light mode in this project. in this project I learn how to save data in archive, I also learn how to save data in localstorage. the user can save the news in archive and can delete the news from archive. ",
    technologies: "Html, Css and Javascript, gulp, sass, git and github",
    githubUrl: "https://github.com/DEJENERUTA/newsbox-DEJENERUTA",
    liveDemoUrl: "https://newsbox-dejeneruta.vercel.app/",
    image: "/assets/news-box-project.png",
  },
  {
    name: "ZULA RESTAURANT",
    description:
      "Zula restaurant website is build in reactjs as a front end and we used wordpress as a backend, it is gropu project where I mainly did the front end part, the website is used to order food, book a table and many more.",
    technologies: "React.js, Wordpress, tailwindcss",
    githubUrl: "https://github.com/orindholt/zula-restaurant",
    liveDemoUrl: "https://monumental-salamander-cc3de4.netlify.app/",
    image: "/assets/zula-pic.png",
  },
];

```




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
