module.exports = {  
  // Secret key for JWT signing and encryption
  'secret': 'N Y T R E A C T',
  // Database connection information
  'database': process.env.MONGODB_URI || 'mongodb://localhost:27017/nytreact',
  // Setting port for server
  'port': process.env.PORT || 3001
}