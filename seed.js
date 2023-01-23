'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {
  // **name: {type: String, required: true},
  // **color: {type: String, required: true},
  // **spayNeuter: {type: Boolean, required: true},
  // **location: {type: String, required: true}

  await Book.create({
    title: 'The Hitchhikers Guide to the Galaxy',
    description: '42',
    status: 'available'
  });

  console.log('book 1 was created!');

  await Book.create({
    title: 'Quotations from Chairman Mao Tse-Tung',
    description: 'non-fiction',
    status: 'available'
  });

  console.log('book 2 was created');

  await Book.create({
    title: 'The Lord of the Rings',
    description: 'fiction',
    status: 'available'
  });

  console.log('book 3 was created');

  mongoose.disconnect();
}

seed();
