const express = require('express');
const app = express();

const PORT = 3000;

const korisnici = [
  { id: 1, ime: 'Ivan', prezime: 'Horvat' },
  { id: 2, ime: 'Ana', prezime: 'Kovačević' },
  { id: 3, ime: 'Marko', prezime: 'Babić' },
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/users', (req, res) => {
  res.json(korisnici);
});

app.listen(PORT, error => {
  if (error) {
    console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
  } else {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
  }
});
