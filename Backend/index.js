const express=require('express');
const mongoose=require("mongoose");
const fertilizers=require("./models/fertilizer.js");
const plants = require("./models/plants.js");
const gifts = require("./models/gifts.js");
const seeds = require("./models/seeds.js");
const accesories= require("./models/accesories");
const herbs= require('./models/herbs.js');
const cors=require('cors');
const path=require('path');
const admins = require('./models/admin.js'); // Import your Admin model
const multer = require('multer');
const fs = require('fs');
const Delivery=require('./models/delivery_staf.js');
const service =require('./models/service_staff.js');
const vendour=require('./models/vendour.js');
const customers=require('./models/Customer.js');
const Order =require('./models/order.js');
const Review =require('./models/review.js');
const Appointment = require ('./models/appointment.js');
const cusorder=require('./models/cusorder.js');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Specify the upload folder path
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Generate a unique filename
  },
});



const upload = multer({ storage });


const app=express();

app.use(express.json())
app.use(express.static('uploads')); // Serve uploaded images
app.use(cors(
  {
    orign:["https://leafy-luxe-ffront.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
  }
));



const MONGO_URL="mongodb://127.0.0.1:27017/leafyluxe";
main().then(()=>{
    console.log("connected to db");
}).catch(err=>{console.log(err);
});

 async function main()
{
mongoose.connect('mongodb+srv://admin:admin123@leafyluxe.rbkui5q.mongodb.net/leafyluxe?retryWrites=true&w=majority&appName=Leafyluxe')


 }

app.get("/",(req,res)=>{
    res.send("app is working")
});



app.get("/getfertilizers",async (req,res)=>{
        fertilizers.find()
        .then(fertilizers=>res.json(fertilizers))
        .catch(err=>res.json(err))
   });

   app.get("/getgifts",async (req,res)=>{
    gifts.find()
    .then(gifts=>res.json(gifts))
    .catch(err=>res.json(err))
});

app.get("/getplants",async (req,res)=>{
    plants.find()
    .then(plants=>res.json(plants))
    .catch(err=>res.json(err))
});

app.get("/getseeds",async (req,res)=>{
    seeds.find()
    .then(seeds=>res.json(seeds))
    .catch(err=>res.json(err))
});

app.get("/getherbs",async (req,res)=>{
    herbs.find()
    .then(herbs=>res.json(herbs))
    .catch(err=>res.json(err))
});

app.get("/getaccesories",async (req,res)=>{
    accesories.find()
    .then(accesories=>res.json(accesories))
    .catch(err=>res.json(err))
});

app.post('/addfertilizers', (req, res) => {
  const ownerData = JSON.parse(req.body.owner); // Parse the owner data as JSON
  const sp=(req.body.price)*10/100+req.body.price;
const ownerId = ownerData._id; 
  const newFertilizer = new fertilizers({
    cp: req.body.price,
    quantity: req.body.quantity,
    price:sp,
    name: req.body.name,
    type: req.body.type,
    nutrient_content: req.body.nutrient_content,
    image: req.body.image,
    manufacturer: req.body.manufacturer,
    city: req.body.city,
    owner: ownerId, // Assuming the owner ID is passed in the request body
  });
  
  newFertilizer.save()
    .then(fertilizer => res.json(fertilizer))
    .catch(err => res.status(400).json({ error: err.message }));
});

 
app.post('/addseeds', upload.single('image'),(req, res) => {
  const ownerData = JSON.parse(req.body.owner); // Parse the owner data as JSON
  const ownerId = ownerData._id;
  const sp=(req.body.price)*10/100+req.body.price;
  const newFertilizer = new seeds({
    name: req.body.name,
    description: req.body.description,
    cp: req.body.price,
    material: req.body.material,
    price:sp,
    image: req.body.image,
    manufacturer: req.body.manufacturer,
    city: req.body.city,
    owner: ownerId, // Assuming the owner ID is passed in the request body
  });
   newFertilizer.save()
    .then(fertilizer => res.json(fertilizer))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/addherbs', upload.single('image'),(req, res) => {
  const ownerData = JSON.parse(req.body.owner); // Parse the owner data as JSON
  const ownerId = ownerData._id;
  const sp=(req.body.price)*10/100+req.body.price;
  const newFertilizer = new herbs({
    name: req.body.name,
    scientific_name: req.body.scientific_name,
    description: req.body.description,
    growing_conditions: req.body.growing_conditions,
    price:sp,
    image: req.body.image,
    cp: req.body.price,
    city: req.body.city,
    owner: ownerId, // Assuming the owner ID is passed in the request body
  });
  newFertilizer.save()
    .then(fertilizer => res.json(fertilizer))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/addplants', upload.single('image'),(req, res) => {
  const ownerData = JSON.parse(req.body.owner); // Parse the owner data as JSON
  const ownerId = ownerData._id;
  const sp=(req.body.price)*10/100+req.body.price;
  const newFertilizer = new plants({
    name: req.body.name,
    description: req.body.description,
    price:sp,
    cp: req.body.price,
    core_instructions: req.body.core_instructions,
    image: req.body.image,
    manufacturer: req.body.manufacturer,
    city: req.body.city,
    owner: ownerId, // Assuming the owner ID is passed in the request body
  });
  newFertilizer.save()
    .then(fertilizer => res.json(fertilizer))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/addaccessories', upload.single('image'),(req, res) => {
  const ownerData = JSON.parse(req.body.owner); // Parse the owner data as JSON
  const ownerId = ownerData._id;
  const sp=(req.body.price)*10/100+req.body.price;
  const newFertilizer = new accesories({
    name: req.body.name,
    description: req.body.description,
    price:sp,
    cp: req.body.price,
    material: req.body.material,
    image: req.body.image,
    manufacturer: req.body.manufacturer,
    city: req.body.city,
    owner: ownerId, // Assuming the owner ID is passed in the request body
  });
  newFertilizer.save()
    .then(fertilizer => res.json(fertilizer))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/addgifts', upload.single('image'),(req, res) => {
  const ownerData = JSON.parse(req.body.owner); // Parse the owner data as JSON
  const ownerId = ownerData._id;
  const sp=(req.body.price)*10/100+req.body.price;
  const newFertilizer = new gifts({
    name: req.body.name,
    description: req.body.description,
    cp: req.body.price,
    price:sp,
    image: req.body.image,
    manufacturer: req.body.manufacturer,
    city: req.body.city,
    owner: ownerId, // Assuming the owner ID is passed in the request body
  });

  newFertilizer.save()
    .then(fertilizer => res.json(fertilizer))
    .catch(err => res.status(400).json({ error: err.message }));
});



app.delete('/fertilizers/:id', async (req, res) => {
  const fertilizerId = req.params.id;
  try {
    const deletedFertilizer = await fertilizers.findByIdAndDelete(fertilizerId);
    if (!deletedFertilizer) {
      return res.status(404).json({ error: 'Fertilizer not found' });
    }
    res.status(200).json({ message: 'Fertilizer deleted successfully', deletedFertilizer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting fertilizer' });
  }
});

app.delete('/accesories/:id', async (req, res) => {
  const accesoriesId = req.params.id;
  try {
    const deletedaccesories = await accesories.findByIdAndDelete(accesoriesId);
    if (!deletedaccesories) {
      return res.status(404).json({ error: 'Fertilizer not found' });
    }
    res.status(200).json({ message: 'Fertilizer deleted successfully', deletedaccesories});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting accesories' });
  }
});

app.delete('/gifts/:id', async (req, res) => {
  const giftsId = req.params.id;
  try {
    const deletedgifts = await gifts.findByIdAndDelete(giftsId);
    if (!deletedgifts) {
      return res.status(404).json({ error: 'Fertilizer not found' });
    }
    res.status(200).json({ message: 'Fertilizer deleted successfully', deletedgifts});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting gifts' });
  }
});

app.delete('/herbs/:id', async (req, res) => {
  const herbsId = req.params.id;
  try {
    const deletedherbs = await herbs.findByIdAndDelete(herbsId);
    if (!deletedherbs) {
      return res.status(404).json({ error: 'Fertilizer not found' });
    }
    res.status(200).json({ message: 'Fertilizer deleted successfully', deletedherbs});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting herbs' });
  }
});

app.delete('/plants/:id', async (req, res) => {
  const plantsId = req.params.id;
  try {
    const deletedplants = await plants.findByIdAndDelete(plantsId);
    if (!deletedplants) {
      return res.status(404).json({ error: 'plants not found' });
    }
    res.status(200).json({ message: 'plants deleted successfully', deletedplants});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting plants' });
  }
});

app.delete('/seeds/:id', async (req, res) => {
  const seedsId = req.params.id;
  try {
    const deletedseeds = await seeds.findByIdAndDelete(seedsId);
    if (!deletedseeds) {
      return res.status(404).json({ error: 'seeds not found' });
    }
    res.status(200).json({ message: 'seeds deleted successfully', deletedseeds});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting seeds' });
  }
});



app.post('/admin/register', upload.single('photo'), async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const photoPath = req.file ? req.file.filename : null; // Get the filename
    const newadmin=new admins({username,email,photo: photoPath,password,role});
    await newadmin.save()
    
    res.status(201).json({ message: 'Admin registered successfully.' });


  } catch (error) {
    //console.error('Error registering admin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/login", async (req,res)=>{
  
  if(req.body.password && req.body.email)
  {
    let admin= await admins.findOne(req.body).select("-password");
    let vendours=await vendour.findOne(req.body).select("-password");
    let customer=await customers.findOne(req.body).select("-password");

  if(admin){
    res.send(admin)
    console.log(admin)
  }
  else if(vendours){
    res.send(vendours)
  }
  else if(customer)
  {
    res.send(customer) 
    console.log("good")
  }
  else{
    res.send({result:'No user Found'})
  }
  }else{
    res.send({result:'No userrrr Found'})
  }
})

app.get("/getadmins",async (req,res)=>{
  admins.find()
  .then(admins=>res.json(admins))
  .catch(err=>res.json(err))
});

app.delete('/admins/:id', async (req, res) => {
  const adminsId = req.params.id;
  const admin=await admins.findById(adminsId);
  try {
    const deletedadmins= await admins.findByIdAndDelete(adminsId);
    if (!deletedadmins) {
      return res.status(404).json({ error: 'admin not found' });
    }
    res.status(200).json({ message: 'admin deleted successfully', deletedadmins});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting admin' });
  }


  const imagePath = `./uploads/${admin.photo}`;

    // Delete the image file from the server
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
});

//fertilizer edit

app.get('/fertilizers/:id',async (req, res) => {
  try {
      const fertilizer = await fertilizers.findById(req.params.id);
      if (!fertilizer) {
          return res.status(404).json({ error: 'Fertilizer not found' });
      }
      res.json(fertilizer);
  } catch (error) {
      res.status(500).json({ error: 'Server error' });
  }
});


app.put('/fertilizers/:id',async (req, res) => {
try {
    const fertilizer = await fertilizers.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fertilizer) {
        return res.status(404).json({ error: 'Fertilizer not found' });
    }
    res.json(fertilizer);
} catch (error) {
    res.status(500).json({ error: 'Server error' });
}
});

//gifts edit
app.get('/gifts/:id', async (req, res) => {
  try {
      const gift = await gifts.findById(req.params.id);
      if (!gift) {
          return res.status(404).json({ error: 'Gift not found' });
      }
      res.json(gift);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});

app.put('/gifts/:id',async (req, res) => {
  try {
      const fertilizer = await gifts.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!fertilizer) {
          return res.status(404).json({ error: 'gift not found' });
      }
      res.json(fertilizer);
  } catch (error) {
      res.status(500).json({ error: 'Server error' });
  }
  });

  //herbs edit 
  app.get('/herbs/:id', async (req, res) => {
    try {
        const herb = await herbs.findById(req.params.id);
        if (!herb) {
            return res.status(404).json({ error: 'Herb not found' });
        }
        res.json(herb);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.put('/herbs/:id', async (req, res) => {
  try {
      const herb = await herbs.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!herb) {
          return res.status(404).json({ error: 'Herb not found' });
      }
      res.json(herb);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});
//seeds
app.get('/seeds/:id', async (req, res) => {
  try {
      const herb = await seeds.findById(req.params.id);
      if (!herb) {
          return res.status(404).json({ error: 'Herb not found' });
      }
      res.json(herb);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});

app.put('/seeds/:id', async (req, res) => {
try {
    const herb = await seeds.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!herb) {
        return res.status(404).json({ error: 'Herb not found' });
    }
    res.json(herb);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
}
});
//accesories
app.get('/accessories/:id', async (req, res) => {
  try {
      const herb = await accesories.findById(req.params.id);
      if (!herb) {
          return res.status(404).json({ error: 'Herb not found' });
      }
      res.json(herb);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});

app.put('/accessories/:id', async (req, res) => {
try {
    const herb = await accesories.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!herb) {
        return res.status(404).json({ error: 'Herb not found' });
    }
    res.json(herb);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
}
});

//plants edit 
app.get('/plants/:id', async (req, res) => {
  try {
      const herb = await plants.findById(req.params.id);
      if (!herb) {
          return res.status(404).json({ error: 'Herb not found' });
      }
      res.json(herb);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});

app.put('/plants/:id', async (req, res) => {
try {
    const herb = await plants.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!herb) {
        return res.status(404).json({ error: 'Herb not found' });
    }
    res.json(herb);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
}
});

app.post('/delivery/register', upload.single('photo'), async (req, res) => {
  try {
    const { name, email, phone, address, order_id, availability } = req.body;
    const photoPath = req.file ? req.file.filename : null; // Get the filename

    // Assuming 'serviceteams' is the model for service teams
    const newServiceTeam = new Delivery({
      name,
      email,
      phone,
      address,
      order_id,
      availability,
      photo: photoPath // Assuming the field in the model is 'photo'
    });

    await newServiceTeam.save();

    res.status(201).json({ message: 'Service team registered successfully.' });
  } catch (error) {
    console.error('Error registering service team:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/serviceteam/register', upload.single('photo'), async (req, res) => {
  try {
    const { name, email, phone, address, appointment_id, availability } = req.body;
    const photoPath = req.file ? req.file.filename : null; // Get the filename

    // Assuming 'serviceteams' is the model for service teams
    const newServiceTeam = new service({
      name,
      email,
      phone,
      address,
      appointment_id,
      availability,
      photo: photoPath // Assuming the field in the model is 'photo'
    });

    await newServiceTeam.save();

    res.status(201).json({ message: 'Service team registered successfully.' });
  } catch (error) {
    console.error('Error registering service team:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/getDelivery",async (req,res)=>{
  Delivery.find()
  .then(Delivery=>res.json(Delivery))
  .catch(err=>res.json(err))
});

app.get("/getserviceteam",async (req,res)=>{
  service.find()
  .then(service=>res.json(service))
  .catch(err=>res.json(err))
});

//vendour 
app.get('/vendorslist', async (req, res) => {
  try {
    const vendors = await vendour.find();
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/vendour/register', upload.single('photo'), async (req, res) => {
  try {
    const {vname, email, photo,password,phone,product,confirm } = req.body;
    const photoPath = req.file ? req.file.filename : null; // Get the filename
    const newadmin=new vendour({vname, email,photo: photoPath,password,phone,product,confirm});
    await newadmin.save()
    
    res.status(201).json({ message: 'registered successfully.' });


  } catch (error) {
    console.error('Error registering admin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//order fertilizer
app.get('/order', async (req, res) => {
  try {
    const { product } = req.query;
    let vendors;
    if (product) {
      vendors = await vendour.find({ product: product });
    } else {
      vendors = await vendour.find();
    }
    res.json(vendors);
  } catch (error) {
    console.error('Error fetching vendors:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//order fertilizer from vendour 
app.get('/orderfertilizer/:vendorId', async (req, res) => {
  try {
    const { vendorId } = req.params;
    const fertilizer = await fertilizers.find({ owner: vendorId });
    if (!fertilizer) {
      return res.status(404).json({ message: 'Fertilizer not found' });
    }
    res.json(fertilizer);
  } catch (error) {
    console.error('Error fetching fertilizer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//order acc from vendour
app.get('/orderacc/:vendorId', async (req, res) => {
  try {
    const { vendorId } = req.params;
    const fertilizer = await accesories.find({ owner: vendorId });
    if (!fertilizer) {
      return res.status(404).json({ message: 'Fertilizer not found' });
    }
    res.json(fertilizer);
  } catch (error) {
    console.error('Error fetching fertilizer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//order gifts
app.get('/ordergifts/:vendorId', async (req, res) => {
  try {
    const { vendorId } = req.params;
    const fertilizer = await gifts.find({ owner: vendorId });
    if (!fertilizer) {
      return res.status(404).json({ message: 'Fertilizer not found' });
    }
    res.json(fertilizer);
  } catch (error) {
    console.error('Error fetching fertilizer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//order plants
app.get('/orderplants/:vendorId', async (req, res) => {
  try {
    const { vendorId } = req.params;
    const fertilizer = await plants.find({ owner: vendorId });
    if (!fertilizer) {
      return res.status(404).json({ message: 'Fertilizer not found' });
    }
    res.json(fertilizer);
  } catch (error) {
    console.error('Error fetching fertilizer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//order seeds 
app.get('/orderseeds/:vendorId', async (req, res) => {
  try {
    const { vendorId } = req.params;
    const fertilizer = await seeds.find({ owner: vendorId });
    if (!fertilizer) {
      return res.status(404).json({ message: 'Fertilizer not found' });
    }
    res.json(fertilizer);
  } catch (error) {
    console.error('Error fetching fertilizer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//order herbs detail
app.get('/orderherbs/:vendorId', async (req, res) => {
  try {
    const { vendorId } = req.params;
    const fertilizer = await herbs.find({ owner: vendorId });
    if (!fertilizer) {
      return res.status(404).json({ message: 'Fertilizer not found' });
    }
    res.json(fertilizer);
  } catch (error) {
    console.error('Error fetching fertilizer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//vendour delete
app.delete('/vendourdelete/:vendorId', async (req, res) => {
  const { vendorId } = req.params;
  try {
    // Find the vendor by ID and delete it
    await vendour.findByIdAndDelete(vendorId);
    res.status(200).json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    console.error('Error deleting vendor:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/showvendourproducts/:uid', async (req, res) => {
  try {
    const uid = req.params.uid;
    const productType = req.query.productType;

    // Choose the appropriate model based on the product type
    let ProductModel;
    switch (productType) {
      case 'fertilizer':
        ProductModel = fertilizers;
        break;
      case 'gifts':
        ProductModel = gifts;
        break;
      case 'herbs':
        ProductModel = herbs;
        break;
      case 'plants':
        ProductModel = plants;
        break;
      case 'seeds':
        ProductModel = seeds;
        break;
      case 'accesories':
        ProductModel = accesories;
        break;
      default:
        return res.status(400).json({ error: 'Invalid product type' });
    }

    // Query the appropriate model to get products based on the owner ID
    const products = await ProductModel.find({ owner: uid });

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/registercustomer', upload.single('photo'), async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, DOB, gender, address, city, pincode, password } = req.body;
    const photoPath = req.file ? req.file.filename : null; // Get the filename of the uploaded photo
    const newCustomer = new customers({
      firstName,
      lastName,
      email,
      phoneNumber,
      DOB,
      gender,
      address,
      city,
      pincode,
      password,
      photo: photoPath // Save the filename in the 'photo' field of the Customer model
    });
    await newCustomer.save();
    
    res.status(201).json({ message: 'Customer registered successfully.' });
  } catch (error) {
    console.error('Error registering customer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/cosdetass/:id', async (req, res) => {
  try {
    // Extract the ID parameter from the request
    const { id } = req.params;

    // Fetch accessory details from MongoDB using Mongoose
    const accessory = await accesories.findById(id);

    if (!accessory) {
      // If accessory with the given ID is not found, return 404 Not Found
      return res.status(404).json({ error: 'Accessory not found' });
    }

    // Send response with the accessory details
    res.json(accessory);
  } catch (error) {
    // If an error occurs, return 500 Internal Server Error
    console.error('Error fetching accessory details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/cosdetfer/:id', async (req, res) => {
  try {
    // Extract the ID parameter from the request
    const { id } = req.params;

    // Fetch accessory details from MongoDB using Mongoose
    const fertilizer = await fertilizers.findById(id);

    if (!fertilizer) {
      // If accessory with the given ID is not found, return 404 Not Found
      return res.status(404).json({ error: 'Accessory not found' });
    }

    // Send response with the accessory details
    res.json(fertilizer);
  } catch (error) {
    // If an error occurs, return 500 Internal Server Error
    console.error('Error fetching accessory details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/cosdetgift/:id', async (req, res) => {
  try {
    // Extract the ID parameter from the request
    const { id } = req.params;

    // Fetch accessory details from MongoDB using Mongoose
    const gift = await gifts.findById(id);

    if (!gift) {
      // If accessory with the given ID is not found, return 404 Not Found
      return res.status(404).json({ error: 'Accessory not found' });
    }

    // Send response with the accessory details
    res.json(gift);
  } catch (error) {
    // If an error occurs, return 500 Internal Server Error
    console.error('Error fetching accessory details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/cosdetherb/:id', async (req, res) => {
  try {
    // Extract the ID parameter from the request
    const { id } = req.params;

    // Fetch accessory details from MongoDB using Mongoose
    const herb = await herbs.findById(id);

    if (!herb) {
      // If accessory with the given ID is not found, return 404 Not Found
      return res.status(404).json({ error: 'Accessory not found' });
    }

    // Send response with the accessory details
    res.json(herb);
  } catch (error) {
    // If an error occurs, return 500 Internal Server Error
    console.error('Error fetching accessory details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/cosdetplant/:id', async (req, res) => {
  try {
    // Extract the ID parameter from the request
    const { id } = req.params;

    // Fetch accessory details from MongoDB using Mongoose
    const plant = await plants.findById(id);

    if (!plant) {
      // If accessory with the given ID is not found, return 404 Not Found
      return res.status(404).json({ error: 'Accessory not found' });
    }

    // Send response with the accessory details
    res.json(plant);
  } catch (error) {
    // If an error occurs, return 500 Internal Server Error
    console.error('Error fetching accessory details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/cosdetseed/:id', async (req, res) => {
  try {
    // Extract the ID parameter from the request
    const { id } = req.params;

    // Fetch accessory details from MongoDB using Mongoose
    const seed = await seeds.findById(id);

    if (!seed) {
      // If accessory with the given ID is not found, return 404 Not Found
      return res.status(404).json({ error: 'Accessory not found' });
    }

    // Send response with the accessory details
    res.json(seed);
  } catch (error) {
    // If an error occurs, return 500 Internal Server Error
    console.error('Error fetching accessory details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/apiorders', async (req, res) => {
  try {
    // Extract data from the request body
    const { customer, product, quantity, totalAmount, status } = req.body;

    // Create a new order instance
    const newOrder = new Order({
      customer: customer,
      product: product,
      quantity: quantity,
      totalAmount: totalAmount,
      status: status
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();

    // Send a response indicating success
    //  res.status(201).json(savedOrder);
  } catch (error) {
    // If there's an error, send a response with the error message
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
      const orders = await Order.find();
      res.json(orders);
  } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/getCustomers",async (req,res)=>
{
        customers.find()
        .then(fertilizers=>res.json(fertilizers))
        .catch(err=>res.json(err))
   });

   app.post('/submit-review', (req, res) => {
    const { name, email, subject, message } = req.body;
  
    const newReview = new Review({
      name,
      email,
      subject,
      message
    });
  
    newReview.save()
      .then(() => res.status(201).json({ message: 'Review submitted successfully' }))
      .catch(err => res.status(500).json({ error: err.message }));
  });
  
  app.post('/submit-appointment', (req, res) => {
   try{const { userId, date, timeSlot } = req.body;
   
    const newAppointment = new Appointment({
      userId,
      date,
      timeSlot
    });
  
    newAppointment.save()
  }catch(err)
  {
    console.log(err);
  }
      // .then(() => res.status(201).json({ message: 'Appointment scheduled successfully' }))
      // .catch(err => res.status(500).json({ error: err.message }));
  
  });

  app.get('/seeappointments', async (req, res) => {
    try {
      // Fetch all appointments
      const appointments = await Appointment.find();
  
      // Fetch corresponding customer data for each appointment
      const appointmentsWithCustomers = await Promise.all(appointments.map(async (appointment) => {
        // Find the customer using the userId in the appointment
        const customer = await customers.findById(appointment.userId);
  
        // Combine appointment and customer data
        return { appointment, customer };
      }));
  
      // Send the combined data back to the front end
      res.json(appointmentsWithCustomers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  app.post('/user-appointments', async (req, res) => {
    try {
      const { userId } = req.body;
  
      // Fetch appointments for the user based on userId
      const userAppointments = await Appointment.find({ userId });
  
      // Send user appointments back to the frontend
      res.json(userAppointments);
    } catch (error) {
      console.error('Error fetching user appointments:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/apicusorders', async (req, res) => {
    try {
      // Extract data from the request body
      const { customer, product, quantity, totalAmount,name ,url, description, status,cp } = req.body;
  
      // Create a new order instance
      const newOrder = new  cusorder({
        customer: customer,
        product: product,
        quantity: quantity,
        totalAmount: totalAmount,
        status: status,
        name: name ,
        cp:cp,
        description: description,
        url: url,
      });
  
      // Save the order to the database
      const savedOrder = await newOrder.save();
  
      // Send a response indicating success
      //  res.status(201).json(savedOrder);
    } catch (error) {
      // If there's an error, send a response with the error message
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/seecusorders', async (req, res) => {
    try {
      // Fetch all customer orders
      const cusorders = await cusorder.find();
  
      // Fetch corresponding customer data for each order
      const ordWithCustomers = await Promise.all(cusorders.map(async (order) => {
        // Find the customer using the customer ID in the order
        const customer = await customers.findById(order.customer);
  
        // Combine order and customer data
        return { order, customer };
      }));
  
      // Send the combined data back to the frontend
      res.json(ordWithCustomers);
    } catch (error) {
      console.error('Error fetching customer orders:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  app.get('/seecusorderss/:customerId', async (req, res) => {
    try {
      const { customerId } = req.params;
  
      // Fetch all customer orders for the given customer ID
      const cusorders = await cusorder.find({ customer: customerId });
  
      // Fetch corresponding customer data
      const customer = await customers.findById(customerId);
  
      // Send the combined data back to the frontend
      res.json({ orders: cusorders, customer });
    } catch (error) {
      console.error('Error fetching customer orders:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  app.get('/api/orders/count', async (req, res) => {
    try {
      const count = await cusorder.countDocuments();
      res.json({ count });
    } catch (error) {
      console.error('Error fetching order count:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.put('/statusedit/:id', async (req, res) => {
    try {
      const orderId = req.params.id;
      const newStatus = req.body.status;
  
      // Update order status in the database
      const updatedOrder = await Order.findByIdAndUpdate(orderId, { status: newStatus }, { new: true });
  
      if (!updatedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      res.json(updatedOrder);
    } catch (error) {
      console.error('Error updating order status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.put('/statuseditt/:id', async (req, res) => {
    try {
      const orderId = req.params.id;
      const newStatus = req.body.status;
  
      // Update order status in the database
      const updatedOrder = await cusorder.findByIdAndUpdate(orderId, { status: newStatus }, { new: true });
  
      if (!updatedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      res.json(updatedOrder);
    } catch (error) {
      console.error('Error updating order status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/appointments/count',async (req, res) => {
    
    try {
      const count = await Appointment.countDocuments();
      res.json({ count });
    } catch (error) {
      console.error('Error fetching order count:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    
  });

  app.get('/api/delivery-staff/count',async (req, res) => {
   
    try {
      const count = await Delivery.countDocuments();
      res.json({ count });
    } catch (error) {
      console.error('Error fetching order count:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

    // Endpoint to get the count of service staff
    app.get('/api/service-staff/count', async(req, res) => {
      try { 
        const count = await service.countDocuments();
        res.json({ count });
      } catch (error) {
        console.error('Error fetching order count:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });


  app.get('/reviewshow', async (req, res) => {
    try {
      const reviews = await Review.find();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.get('/api/fertilizer/search', async (req, res) => {
  try {
      const searchTerm = req.query.name;
      // Perform the search operation based on the searchTerm
      // Example: Search for fertilizer with names containing the searchTerm
      const searchResults = await fertilizers.find({ name: { $regex: searchTerm, $options: 'i' } } );
      res.json(searchResults);
  } catch (error) {
      console.error('Error searching for fertilizers:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/orderrevenue/total', async (req, res) => {
  try {
    const orders = await cusorder.find();
    let totalRevenue = 0;
    orders.forEach(order => {
      totalRevenue += order.totalAmount;
    });
    res.json({ totalRevenue });
  } catch (error) {
    console.error('Error fetching total revenue:', error);
    res.status(500).json({ error: 'Failed to fetch total revenue' });
  }
});
  

app.get('/api/orders/today-revenue', async (req, res) => {
  try {
    // Calculate today's revenue
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0); // Set to the beginning of the day
    const startOfToday = today.toISOString();

    const orders = await cusorder.find({
      createdAt: { $gte: startOfToday } // Find orders created today
    });

    // Calculate sum of totalAmount
    const todayRevenue = orders.reduce((total, order) => total + order.totalAmount, 0);

    res.json({ todayRevenue });
  } catch (error) {
    console.error('Error fetching today\'s revenue:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.patch('/fertilizers/:id/toggleAvailable', async (req, res) => {
  const { id } = req.params;
  try {
    // Find the fertilizer by id
    const fertilizer = await fertilizers.findById(id);
    if (!fertilizer) {
      return res.status(404).json({ error: 'Fertilizer not found' });
    }

    // Toggle the availability
    fertilizer.available = !fertilizer.available;

    // Save the updated fertilizer
    await fertilizer.save();

    // Send a response with the updated fertilizer
    res.json({ fertilizer });
  } catch (error) {
    console.error('Error toggling availability of fertilizer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.patch('/fertilizers/:id/toggleAvailableacc', async (req, res) => {
  const { id } = req.params;
  try {
    // Find the fertilizer by id
    const fertilizer = await accesories.findById(id);
    if (!fertilizer) {
      return res.status(404).json({ error: 'Fertilizer not found' });
    }

    // Toggle the availability
    fertilizer.available = !fertilizer.available;

    // Save the updated fertilizer
    await fertilizer.save();

    // Send a response with the updated fertilizer
    res.json({ fertilizer });
  } catch (error) {
    console.error('Error toggling availability of fertilizer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.patch('/fertilizers/:id/toggleAvailablegifts', async (req, res) => {
  const { id } = req.params;
  try {
    // Find the fertilizer by id
    const fertilizer = await gifts.findById(id);
    if (!fertilizer) {
      return res.status(404).json({ error: 'Fertilizer not found' });
    }

    // Toggle the availability
    fertilizer.available = !fertilizer.available;

    // Save the updated fertilizer
    await fertilizer.save();

    // Send a response with the updated fertilizer
    res.json({ fertilizer });
  } catch (error) {
    console.error('Error toggling availability of fertilizer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.patch('/fertilizers/:id/toggleAvailableherbs', async (req, res) => {
  const { id } = req.params;
  try {
    // Find the fertilizer by id
    const fertilizer = await herbs.findById(id);
    if (!fertilizer) {
      return res.status(404).json({ error: 'Fertilizer not found' });
    }

    // Toggle the availability
    fertilizer.available = !fertilizer.available;

    // Save the updated fertilizer
    await fertilizer.save();

    // Send a response with the updated fertilizer
    res.json({ fertilizer });
  } catch (error) {
    console.error('Error toggling availability of fertilizer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.patch('/fertilizers/:id/toggleAvailableseeds', async (req, res) => {
  const { id } = req.params;
  try {
    // Find the fertilizer by id
    const fertilizer = await seeds.findById(id);
    if (!fertilizer) {
      return res.status(404).json({ error: 'Fertilizer not found' });
    }

    // Toggle the availability
    fertilizer.available = !fertilizer.available;

    // Save the updated fertilizer
    await fertilizer.save();

    // Send a response with the updated fertilizer
    res.json({ fertilizer });
  } catch (error) {
    console.error('Error toggling availability of fertilizer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.patch('/fertilizers/:id/toggleAvailableplants', async (req, res) => {
  const { id } = req.params;
  try {
    // Find the fertilizer by id
    const fertilizer = await plants.findById(id);
    if (!fertilizer) {
      return res.status(404).json({ error: 'Fertilizer not found' });
    }

    // Toggle the availability
    fertilizer.available = !fertilizer.available;

    // Save the updated fertilizer
    await fertilizer.save();

    // Send a response with the updated fertilizer
    res.json({ fertilizer });
  } catch (error) {
    console.error('Error toggling availability of fertilizer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/orders/total-profit', async (req, res) => {
  try {
    const orders = await cusorder.find();
    let profit = 0;
    orders.forEach(order => {
      profit += order.totalAmount-order.cp;
    });
    res.json({ profit });
  } catch (error) {
    console.error('Error fetching total revenue:', error);
    res.status(500).json({ error: 'Failed to fetch total revenue' });
  }
    // Aggregate pipeline to calculate total profit
   
});
app.use('/images', express.static('uploads'));

app.listen(8080);
