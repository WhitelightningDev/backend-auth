const User = require('./models/User');

const sampleUsers = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  // Add more sample users as needed
];

async function insertSampleUsers() {
  try {
    await User.insertMany(sampleUsers);
    console.log('Sample users inserted successfully.');
  } catch (err) {
    console.error('Error inserting sample users:', err);
  }
}

insertSampleUsers();
