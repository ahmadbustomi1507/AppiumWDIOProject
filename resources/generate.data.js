
import { faker } from '@faker-js/faker';


function randomNumber(length) {
    return (Math.floor(Math.random() * (10 ** Number(length)))).toString();
  }

function parseDOB(dob) {
    const [dateNumber, month, year] = dob.split('-');  // Memecah string berdasarkan tanda "-"
    
    // Mengonversi nama bulan menjadi angka bulan
    // const months = [
    //     'January', 'February', 'March', 'April', 'May', 'June',
    //     'July', 'August', 'September', 'October', 'November', 'December'
    // ];
    // const monthIndex = months.indexOf(month);  // Mencari index bulan

    return {
        dateNumber, // Tanggal getDate
        month: month, // getMonth
        year // getFullYear
    };
}

function randomFullName() {
  let fullName = faker.person.fullName();
  let result = fullName + ' Automation';

  // Jika panjangnya lebih dari 40, potong nama depannya agar total panjangnya 40
  if (result.length > 40) {
    let maxNameLength = 40 - ' Automation'.length; // Panjang maksimal untuk nama
    fullName = fullName.substring(0, maxNameLength); // Potong nama
    result = fullName + ' Automation';
  }

  return result;
}


module.exports = {
    randomNumber,
    parseDOB,
    randomFullName
  }

