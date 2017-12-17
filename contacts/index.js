const express = require('express')
const app = express.Router()

let DataContacts = [
    {ID: 0, Name: 'Sirichai Songwas', Email: '57160656@go.buu.ac.th', Phone: '0925049334'},
    {ID: 1, Name: 'Pimnapa Klahan', Email: '57160014@go.buu.ac.th', Phone: '098-7765432'},
    {ID: 2, Name: 'Anutida Puengrung', Email: '57160361@go.buu.ac.th', Phone: '084-0997967'},
    {ID: 3, Name: 'Sakuntra Chaladha', Email: '57160006@go.buu.ac.th', Phone: '087-6675143'},
  ];

app.get('/contacts', (req, res) => {
    res.json(DataContacts)
})
app.get('/contacts/:ID', (req, res) => {
    let ID = req.params.ID
    res.json(DataContacts[ID])
})

app.post('/contacts', (req, res) => {
    let NewContact = req.body
    NewContact.ID = DataContacts.length
    DataContacts.push(NewContact)
    res.status(201).json(NewContact)
})

module.exports = app