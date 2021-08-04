// TODO: add skipped functions
const fs = require('fs');
const requireFields = []; // TODO: add here all required fields for positions
const path = require('path');
const dbPath = path.resolve(__dirname, './db/positions');

async function addNewPosition(position) {
    const errorMessage = getRequiredFieldsCheckError(requireFields, position);
    if (errorMessage) {
        throw new Error(errorMessage);
    }
    position.id = `${position.company}-${(new Date).getTime()}`;
    await fs.promises.writeFile(`${dbPath}/${position.id}.txt`, JSON.stringify(position));
    return position.id;
}

function getRequiredFieldsCheckError(requiredFields, objectToCheck) {
    const errors = [];
    requireFields.forEach(requireField => {
        if (!objectToCheck.hasOwnProperty(requireField)) {
            errors.push(requireField);
        }
    });
    return errors.length ? 'No required property(ies): ' + errors : false;
}

async function getPositionById(id) {}

async function removePosition(id) {}

async function updatePosition(id) {}

async function getAllPositions() {
    const positionFilesList = await fs.promises.readdir(dbPath);
    return Promise.all(positionFilesList.map(async positionFile => {
        const positionRaw = await fs.promises.readFile(`${dbPath}/${positionFile}.someFormat`, 'utf8');
        return JSON.parse(positionRaw);
    }));
}

module.exports = {
    addNewPosition,
    getAllPositions
}