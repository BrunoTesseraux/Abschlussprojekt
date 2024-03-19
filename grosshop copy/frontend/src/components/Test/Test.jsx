const Test = ({ user, handleChange }) => {
    const formatDateOfBirth = (dateOfBirth) => {
        const [year, month, day] = dateOfBirth.split('-');
        // Erstellen Sie ein neues Datum mit Jahr, Monat und Tag
        return new Date(year, month - 1, day);
    };

    const dateOfBirth = user.dateOfBirth ? user.dateOfBirth : '1990-01-01'; // Standarddatum, wenn user.dateOfBirth nicht vorhanden ist
    console.log('Date of Birth:', dateOfBirth);
    
    const formattedDate = formatDateOfBirth(dateOfBirth);
    console.log('Formatted Date:', formattedDate);
    
    return ( 
         <input 
            type="date" 
            name="dateOfBirth" 
            value={formattedDate.toISOString().substr(0, 10)} 
            onChange={handleChange}
        />
     );
}
 
export default Test;