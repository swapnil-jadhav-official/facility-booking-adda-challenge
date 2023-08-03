
const data = require('../misc/data');

const findMatchingSlot = (facility, startTime, endTime)=>{

    // Sample data for facilities and their booking rates
    const facilities = data;
    const selectedFacility = facilities.find((f) => f.name === facility);

    if (!selectedFacility) {
        return res.status(400).json({ message: 'Facility not found.' });
    }

    const selectedSlot = selectedFacility.slots.find(
        (slot) => startTime >= slot.startTime && endTime <= slot.endTime
    );

    return selectedSlot;
}

module.exports = findMatchingSlot;