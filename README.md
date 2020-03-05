# Proiect

Pentru initializarea proiectului: danielarpapuc/Proiect/Landing page/ > landingPage.html


Structura aplicației

Pagina principală (landing page)

Utilizatorul va lua contact initial cu aplicația prin această pagină, având în componență urmatoarele elemente: header, conținut și footer.
Headerul este compus din două bare de navigare:
Prima conține: în partea stângă logo-ul companiei pe care am atașat o tranziție în CSS ce îl face să se rotesca la -90 de grade când facem hover pe el; oriunde în aplicație, când utilizatorul face click pe logo, va fi redirecționat pe pagina principală; în partea dreaptă avem iconițe și link-uri către alte pagini din aplicație, respective coșul de cumpărături, pagina de înregistrare și pagina de autentificare.
Cea de-a doua conține meniuri dropdown către diferite categorii de produse oferite pe website; când utilizatorul face hover pe fiecare meniu în parte, poate vedea o listă cu mai multe tipuri de produse.
Conținutul paginii format din:
Hero ce include un câmp de căutare – conținutul paginii are o imagine de fundal pozitionată ca atașament fix, iar culoarea de fundal a hero-ului are un grad de transpareță astfel încât fundalul hero-ului ramâne fixat atunci când utilizatorul face scroll; în câmpul de căutare utilizatorul poate introduce cuvinte cheie legate de produse și apoi apasă tasta Enter sau face click pe butonul de căutare pentru a afișa mai jos în pagină rezultatele căutarii.
Zona în care se afișează rezultatele căutarii utilizatorului – implicit se afisează opt produse care vor fi înlocuite cu rezultatele căutării utilizatorului.
Carousel în care se afișează alte produse de care utilizatorul ar putea fi interesat, în grupuri de câte trei; utilizatorul poate naviga printer produse folosind săgetile stânga/dreapta.
Zonă promoțională în care poate fi adăugat un mesaj pentru utilizator și prin care i se poate cere să ia o acțiune prin apăsarea unui buton.
Footer-ul conține în principal linkuri către alte pagini utile pentru utilizator sau pagini de rețele sociale.

Pagina de înregistrare (sign up page)

De pe pagina principală, utilizatorul poate face click pe link-ul către pagina de înregistrare de pe prima bandă de navigare din header reprezentat de Register.
Pe pagina de înregistrare, în partea stângă avem un hero al cărui overlay se schimbă când utilizatorul face hover. În partea dreaptă a paginii, utilizatorul trebuie sa completeze toate cele șase câmpuri obligatorii cu informații valide pentru a-și face un cont. Utilizatorul poate face toggle pe campul Password pentru a vedea sau ascunde parola, prin click pe iconița din partea dreaptă a campului. Câmpul Country este blocat implicit și poate fi deblocat de utilizator prin completarea câmpului City. Dacă utilizatorul are deja un cont, poate naviga pe pagina de autentificare facând click pe hyperlink-ul de sub butonul de înregistrare (SIGN UP).

Pagina de autentificare/logare (log in page)

Utilizatorul mai poate naviga pe pagina de autentificare din pagina principală sau pagina de produse facând click pe link-ul către pagina de logare de pe prima bandă de navigare din header reprezentat de Login. Utilizatorul trebuie sa introduca adresa de e-mail și parola pentru a se autentifica în aplicație. Daca nu are un cont, poate naviga pe pagina de înregistrare facând click pe hyperlink-ul de sub butonul de logare (SIGN IN).

Pagina de produse (product page)

Filtrarea rezultatelor în pagină

Utilizatorul poate naviga la pagina de produse, din pagina principal, facând click pe oricare categories au tip de produs din cea de-a doua bandă de navigare din header.
În conținutul paginii produsele sunt afișate în mod implicit în grupuri de câte șase. Folosind butoanele Previous page și Next page utilizatorul poate naviga prin lista completă de produse disponibile. Utilizatorul poate schimba numarul de produse care să fie afișate la un moment dat în pagină selectând un număr diferit de Results per page.
Pentru a filtra rezultatele după categoria de produs sau tipul produsului, utilizatorul va folosi opțiunile din cea de-a doua bandă de navigare din header, făcând click pe opțiunea dorită.

Modificarea coșului de cumpărături

Utilizatorul poate adăuga elemente în coșul de cumpărături făcând hover pe cardul de produs și apoi făcând click pe butonul ADD TO CART. Atunci când coșul de cumpărături nu este gol, numărul de produse din coș este afișat în header în dreptul iconiței de shopping cart. Facând hover pe numărul de produse din coș utilizatorul poate vedea detaliile coșului său, respectiv, ce produse sunt în coș (numele și poza produsului), numarul fiecărui tip de produs, prețul per produs, prețul per tip de produs (utilizatorul poate modifica numărul de produse de același tip din coș) și valoarea totală a comenzii.

Afișarea paginii de produs

Utilizatorul poate accesa o pagina cu detalii despre produsul dorit, făcând hover pe cardul de produs și apoi click pe butonul SEE DETAILS. Pe pagina produsului utilizatorul poate vedea mai întâi o imagine mărită cu produsul. Dacă sunt disponibile mai multe imagini cu produsul, utilizatorul poate naviga printer ele, făcând click pe imaginea mica dorită care va duce la afișarea imaginii corespondente în format mare. În partea de jos a paginii utilizatorul are la dispozitie o descriere detaliată a produsului. În partea dreaptă a paginii de produs, avem un card cu numele produsului, prețul și un buton cu ajutorul căruia utilizatorul poate adăuga produsul în coșul de cumpărături.





