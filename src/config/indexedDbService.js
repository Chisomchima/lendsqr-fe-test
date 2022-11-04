// db.js
import Dexie from 'dexie';
import axios from "axios"

export const db = new Dexie('lendsqrDb');
db.version(1).stores({
  users: '&id, createdAt, orgName, userName, email, phoneNumber, lastActiveDate, profile, guarantor, accountBalance, accountNumber, socials, education, id', // Primary key and indexed props
  // education: 'duration, employmentStatus, level, loanRepayment, monthlyIncome, officeEmail, sector'
});


export const getUserFromApi = async () => {
  try {
    const response = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export const saveUserToDb = (userArray) => {
  db.users.bulkAdd(userArray).then(function (lastKey) {
    console.log("Done adding 100,000 raindrops all over the place");
    console.log("Last raindrop's id was: " + lastKey); // Will be 100000.
  }).catch(Dexie.BulkError, function (e) {
    // Explicitely catching the bulkAdd() operation makes those successful
    // additions commit despite that there were errors.
    console.error("Some userss did not succeed. However, " +
      userArray.length - e.failures.length + " raindrops was added successfully");
  });
}


