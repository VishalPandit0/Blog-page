const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
const blogs = require('./api/blogsData.json')
const port = process.env.PORT || 5000;
const fs = require('fs');

// middlewares
app.use(cors(
    {
        origin:['https://react-blogpage.vercel.app'],
        methods:['GET','POST'],
        credentials:true
    }
))
app.use(express.json())
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("Blog server is running!")
});

app.get('/blogs', (req, res) => {
  res.send(blogs)
})
app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id)
  const blog = blogs.filter(b => b.id === id);
  // console.log(blog)
  res.send(blog)
})

app.post('/addBlog', (req, res) => {
  try {
    const blogData = req.body;

    // Read existing data from the JSON file
    let existingData = [];
    try {
      existingData = require('./api/blogsData.json');
    } catch (error) {
      // File does not exist yet or has invalid JSON
      console.error('Error reading existing data:', error.message);
    }

    // Add the new blog data to the existing data
    existingData.unshift(blogData);

    // Write the updated data back to the JSON file
    fs.writeFileSync('./api/blogsData.json', JSON.stringify(existingData, null, 2));

    res.json({ success: true, message: 'Blog data added successfully!' });
  } catch (error) {
    console.error('Error processing request:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
