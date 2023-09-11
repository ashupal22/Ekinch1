const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser"); 


const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const secretKey = 'your_secret_key';
app.use(bodyParser.json());

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. Token missing.' });
  }

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token.' });
    }
    req.user = user;
    next();
  });
};

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017",{     dbName:"backend1",}) .then(()=>console.log("Database Connected"))
const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  Mobile: Number,
  agency: String,
  post: String,
  password:String,
  projects_added: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
      }
    ]
});
const User = mongoose.model('User', UserSchema);

const projectSchema = new mongoose.Schema({
   
  project_id: String,
  project_name: String,
  project_city:String,
  project_district:String,
  project_state:String,
  project_pincode:Number,
  project_cost:String,
  actual_cost:String,
  bit_cost:String,        
  startDate: Date,
  endDate: Date,
  project_agency:String,  

  project_images: [
      {
          name: String,
          category:String,
          url: String,
          review: String,
      }
  ],  
  project_chat: [
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      message: String,
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  project_admin: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      }
  ],
  project_status: {
  type: String,
  enum: ['ongoing', 'completed', 'upcoming']
}
}); 
const Project = mongoose.model('Project', projectSchema);


// Signup route
app.post('/signup', async (req, res) => {
  const { Mobile, password, name, post } = req.body;
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ Mobile });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      Mobile,
      password: hashedPassword,
      name,
      post,
    });

    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { Mobile, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ Mobile });
    if (!user) {
      return res.status(404).json({ error: 'User does not exist' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/project-submit', async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    console.log(newProject);

    res.status(201).json({ message: 'New project created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/user-details', authenticateToken, async (req, res) => {
  try {
    // The authenticateToken middleware sets the user data in req.user
    // Extract the user ID from the req.user object
    const userId = req.user.userId;

    // Fetch the user details from the database using the user ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user details to the client
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/users', async (req, res) => {
  const searchQuery = req.query.search;
        console.log(searchQuery);

        try {
          let users;
      
          // Check if searchQuery is a valid number
          const parsedQuery = parseInt(searchQuery);
          if (!isNaN(parsedQuery)) {
            users = await User.find({
              $or: [
                { name: { $regex: searchQuery, $options: 'i' } },
                { Mobile: parsedQuery },
                { post: { $regex: searchQuery, $options: 'i' } }
              ]
            });
          } else {
            users = await User.find({
              $or: [
                { name: { $regex: searchQuery, $options: 'i' } },
                { post: { $regex: searchQuery, $options: 'i' } }
              ]
            });
          }
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/projects/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    console.log("Received projectId:", projectId); 
    const project = await Project.findById(projectId);
    console.log(project)

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error('Error fetching project details:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/project-update/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const updatedProjectData = req.body;

    // Check if project exists
    const existingProject = await Project.findById(projectId);
    if (!existingProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Update the project with new data
    await Project.findByIdAndUpdate(projectId, updatedProjectData);

    res.status(200).json({ message: 'Project updated successfully' });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Assuming you have already set up the necessary imports and middleware

// Endpoint to add a user to the project
app.post('/add-user-to-project/:projectId', async (req, res) => {
  const projectId = req.params.projectId;
  const { userId } = req.body;
console.log(projectId)
  try {
    // Check if the project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add the user ID to the project's 'project_admin' array
    project.project_admin.push(userId);
    await project.save();

    res.status(200).json({ message: 'User added to the project successfully' });
  } catch (error) {
    console.error('Error adding user to project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
