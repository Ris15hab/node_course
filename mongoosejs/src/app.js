const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/trail")
    .then(() => console.log("connection successful..."))
    .catch((err) => console.log(err));

const playistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

//creation of collection ..... variable name should be in capital as it is the name of the class
const Playlist = new mongoose.model("Playlist", playistSchema);

//create documents

/*
const reactPlaylist = new Playlist({
    name: "React JS",
    course: "Front End",
    videos: 80,
    author: "Rishab",
    active: true
    //date nahi denge toh bhi ok as we have given default value.
});

reactPlaylist.save();//this returns a promise for error handling you can do .catch here.
*/

/*
const createDocument = async()=>{
    try{
        const NodePlaylist = new Playlist({
            name: "Node JS",
            course: "Back End",
            videos: 50,
            author: "Rishab",
            active: true
            //date nahi denge toh bhi ok as we have given default value.
        });

        const response = await NodePlaylist.save();
        console.log(response);
    }catch(err){
        console.log(err);
    }
}
*/


/*

//creating multiple document at once....
const createDocument = async()=>{
    try{
        const jsPlaylist = new Playlist({
            name: "JavaScript",
            course: "Front End",
            videos: 150,
            author: "Rishab",
            active: true
            //date nahi denge toh bhi ok as we have given default value.
        });

        const mongoPlaylist = new Playlist({
            name: "MongoDB",
            course: "Database",
            videos: 10,
            author: "Rishab",
            active: true
            //date nahi denge toh bhi ok as we have given default value.
        });

        const response = await Playlist.insertMany([jsPlaylist,mongoPlaylist]);
        console.log(response);
    }catch(err){
        console.log(err);
    }
}

createDocument();
*/

/*
const getDocument = async () => {
    try{
        const result = await Playlist.find({name:"MongoDB"});
        console.log(result);
    }catch(err){
        console.log(err);
    }
};

getDocument();
*/

//update document

/*
const updateDocument = async (_id) => {
    try {
        const result = await Playlist.updateOne({ _id }, {
            $set: { name: "Javascript" }
        });   //or u can also do const result= Plalist.updateOne({_id:"640497075be08757764c5c6f"});

        console.log(result);//shows how many documents are updated and details..
    } catch (err) {
        console.log(err);
    }
}

updateDocument("640497075be08757764c5c6f");
*/

//alternate method

/*
const updateDocument = async (_id) => {
    try {
        const result = await Playlist.findByIdAndUpdate({ _id }, {
            $set: { name: "JavaScript" }
        },
            { new: true });  

        console.log(result);//shows how many documents are updated and details..
    } catch (err) {
        console.log(err);
    }
}

updateDocument("640497075be08757764c5c6f");
*/