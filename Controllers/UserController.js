const UserData = require('../Models/UserModel');

exports.addUser = async (req, res) => {
    console.log(req.body); // Log request body for debugging
    try {
        const { name, email, Password, Type, Location } = req.body;
        const newUser = new UserData({
            name,
            email,
            Password,
            Type,
            Location
        });
        await newUser.save();
        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Error adding user', error: err.message });
    }
};


exports.authenticateUser = async (req, res) => {
    const { email, password } = req.body; // Ensure 'password' is correctly named and used
    try {
        // Find the user by email
        const user = await UserData.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log("USER PWD : " + password);
        console.log("DB PWD : " + user.Password);

        // Compare the provided password with the stored password
        const isMatch = (password === user.Password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Successful authentication
        res.status(200).json({ message: 'Authentication successful', user });
    } catch (err) {
        res.status(500).json({ message: 'Error authenticating user', error: err.message });
    }
};

exports.getUserByEmail = async (req, res) => {
    const { email } = req.body; // Extract email from body parameters
    try {
        const user = await UserData.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving user', error: err.message });
    }
};
