const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = 'mongodb+srv://busra:asd123@cluster0.5ucspfc.mongodb.net/node-blog?retryWrites=true&w=majority&appName=Cluster0'
        mongoose.connect(conn);
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log("Database error")
    }
    /*const conn = 'mongodb+srv://busra:asd123@cluster0.5ucspfc.mongodb.net/node-blog?retryWrites=true&w=majority&appName=Cluster0'
    mongoose.connect(conn, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => app.listen(4000))
        .catch((err) => console.log(err))*/
};

module.exports = dbConnect;