import axios from 'axios';
import React, { useState } from 'react';
import './App.css'

function App() {

    const [facility, setFacility] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [bookingStatus, setBookingStatus] = useState('');
    const [bookingAmount, setBookingAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/check-availability', {
                    facility,
                    date,
                    startTime,
                    endTime,
                }
            );
            if (response.status === 201) {
                console.log(response.status);
                setBookingStatus(response.data.message);
            } else {

                setBookingStatus('Booking Successful');
                setBookingAmount(response.data.bookingAmount);

                await axios.post('http://localhost:5000/api/book-facility', {
                    facility,
                    date,
                    startTime,
                    endTime,
                });
            }} 
            
            catch (error) {
                console.error(error);
                setBookingStatus('Error Occurred');
            }
        };
    return (
        <>
        <h1>Facility Booking</h1>
            
        <div className='container'>
            
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    Facility:
                    <select
                        value={facility}
                        onChange={(e) => setFacility(e.target.value)}
                        required
                    >
                        <option value="">Select Facility</option>
                        <option value="Clubhouse">Clubhouse</option>
                        <option value="Tennis Court">Tennis Court</option>
                    </select>
                </label>
            <br />
                <label>
                    Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
            <br />
                <label>
                    Start Time:
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                    />
                </label>
            <br />
                <label>
                    End Time:
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                    />
                </label>
            <br />
                <input type="submit" value='Book Facility'/>
            </form>

            
        </div>
            {bookingStatus && (
            <div className='status'>
                {bookingStatus === 'Booking Successful' ?<h2 className='green'>{bookingStatus}</h2> : <h2 className='red'>{bookingStatus}</h2> }
                
                {bookingStatus === 'Booking Successful' && (
                    <>
                        <br/>
                        <p>Booking Amount: Rs. {bookingAmount}</p>
                    </>
                    
                )}
            </div>
            )}
        </>
    );
}

export default App;