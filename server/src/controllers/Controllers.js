exports.hello = async(req, res) => {
    res.send('hello pankaj');
};

exports.registerUser = async(req, res) => {
    console.log('hii');
    console.log(req.body);
    const userData = JSON.parse(req.body.data);
    console.log('userData', userData);
};