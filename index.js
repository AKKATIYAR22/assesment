const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const user_id = "ajulkatiyar";

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(200).json({ is_success: false, message: 'Invalid input data' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));

    let highest_alphabet = [];
    if (alphabets.length > 0) {
      const sortedAlphabets = alphabets.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }));
      highest_alphabet = [sortedAlphabets[0]];
    }

    const response = {
      is_success: true,
      user_id: user_id,
      email: 'ak1549@srmist.edu.in',
      roll_number: 'RA2011027020110',
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highest_alphabet
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, message: 'Internal server error' });
  }
});


app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

