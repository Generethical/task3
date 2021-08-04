// TODO: add routes for Applicants
// TODO: add skipped logic for
// TODO: Connect this file with server.js and with app variable

const positionModel = require('./positions');
app.get('/positions', async (req, res, next) => {
    try {
        const positions = await positionModel.getAllPositions();
        res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
    } catch (e) {
        next(e);
    }
});

app.get('/positions/:id', (req, res, next) => {
    res.end('Here will be logic for get request');
});
app.post('/positions', async (req, res, next) => {
    res.end('Here will be logic for post request');
});
app.patch('/positions/:id', (req, res) => {
    res.end('Here will be logic for patch update');
});
app.delete('/positions/:id', (req, res) => {
    res.end('Here will be logic for deletion');
});

app.use((err, request, response, next) => {
    console.log(err)
    response.status(500).send("Unexpected server error: " + JSON.stringify(err))
})
