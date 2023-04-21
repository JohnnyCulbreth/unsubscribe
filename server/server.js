const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI);

app.use(cors());
app.use(express.json());

const connectionString = process.env.MONGO_URI;

// Create a new MongoClient
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
});

// The database to use
const dbName = 'unsubscribeForm';

const startServer = async () => {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    const db = client.db(dbName);

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../build')));

      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
      });
    }

    // Define the unsubscribe endpoint
    app.post('/unsubscribe', async (req, res) => {
      const { email } = req.body;

      try {
        const result = await db.collection('unsubs').insertOne({ email });
        res.status(200).send('Email saved');
      } catch (error) {
        console.error('Error saving email:', error);
        res.status(500).send('Error saving email');
      }
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
