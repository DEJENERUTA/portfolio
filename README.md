
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

### Github issues
<img width="1250" alt="Github issues" src="https://user-images.githubusercontent.com/45858936/193211238-f5cbe9de-c458-4d13-94d0-f7719d88393d.png">

### Github Kanban Board
<img width="1414" alt="Github Kanban Board" src="https://user-images.githubusercontent.com/45858936/193211491-70c68fa7-6925-4e66-9dde-656322de996b.png">


### email sending code Example

```jsx
const emailSubmit = async (data) => {
    console.log(data);
    setStatus("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    reset();
    setIsSend(true);
    setTimeout(() => {
      setIsSend(false);
    }, 5000);
  };

```




