// Assuming the startTime and endTime are in the format 'HH:mm'
// and the rate is in rupees per hour.
const calculateBookingAmount = (startTime, endTime, rate) => {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    
    // Convert the start and end times to hours
    const startInHours = startHour + startMinute / 60;
    const endInHours = endHour + endMinute / 60;
    
    // Calculate the total hours for booking
    const totalHours = endInHours - startInHours;
    
    // Calculate the booking amount
    const bookingAmount = (totalHours * rate).toFixed(2);
    
    return bookingAmount;
    };

    module.exports = calculateBookingAmount;