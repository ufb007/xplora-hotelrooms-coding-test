import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({placeholder, onDateChange}: {placeholder: string, onDateChange: any}) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
      <ReactDatePicker
        className='px-2 py-1 rounded-lg border border-gray-400'
        placeholderText={placeholder}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
      />
  );
}

export default DatePicker;
