const calculateBookingAmount = require('../misc/calculateAmount');
const findMatchingSlot = require('../misc/findMatchingSlot');
 

// Sample data for storing booked slots
const bookedSlots = [];

const checkController = (req, res) => {
    const { facility, date, startTime, endTime } = req.body;
   
    // // Check if the facility exists in the data
    // const selectedFacility = facilities.find((f) => f.name === facility);
  
    const selectedSlot = findMatchingSlot(facility, startTime, endTime);
    if(!selectedSlot){
        return res.status(201).json({
            message: 'This slot is not valid. Please select slot between ["startTime": "10:00", "endTime": "16:00"] OR ["startTime": "16:00", "endTime": "22:00"]'
        });
    }
    console.log(selectedSlot);
    // if (!selectedFacility) {
    //     return res.status(400).json({ message: 'Facility not found.' });
    // }

    // Check if the requested slot is available
    const isSlotAvailable = !bookedSlots.some((slot) =>
        slot.facility === facility &&
        slot.date === date &&
        ((startTime >= slot.startTime && startTime < slot.endTime) || (endTime > slot.startTime && endTime <= slot.endTime))
    );


    if (!isSlotAvailable) {
        return res.status(201).json({
         message: 'Booking Failed, Slot already booked.',
        });
    }

    // Calculate the booking amount based on the selected facility and time slot
    // const selectedSlot = selectedFacility.slots.find(
    //     (slot) => startTime >= slot.startTime && endTime <= slot.endTime
    // );
    

    const bookingAmount =calculateBookingAmount(startTime, endTime, selectedSlot.rate)
    if (bookingAmount<=0) {
        return res.status(201).json({
            message: 'This slot is not valid. Please select slot between ["startTime": "10:00", "endTime": "16:00"] OR ["startTime": "16:00", "endTime": "22:00"]'
        });
    }
  
    return res.json(
        {
            message: 'Slot Available, Booking successful.',
            bookingAmount
        }
    )}

    const bookController = (req, res) => {
        
        const { facility, date, startTime, endTime } = req.body;
            bookedSlots.push({ facility, date, startTime, endTime });
            return res.json({ message: 'Booking Successful.' });
        }

   module.exports= {checkController, bookController};