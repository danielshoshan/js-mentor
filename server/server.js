const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/posts');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/js-mentor', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
dbConnection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
app.use('/api/posts', postsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

