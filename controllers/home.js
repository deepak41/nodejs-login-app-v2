const getHome = (req,res) => {
    res.status(200).send('<h1>Welcome to NodeJS Login App</h1>');
}

module.exports = {
    getHome: getHome
}
