function AddressBook() 
{
  this.contacts = []
}
// contacts list

function Contact(first_name, second_name, phone_number, email, address) /*The constructor function */
 {
	 
  // The properties of this object
  this.first_name = first_name,
  this.second_name = second_name,
  this.phone_number = phone_number,
  this.email = email,
  this.address = address
}

Contact.prototype.full_name = function() 

{
	
  console.log("Your full_name:"  + this.first_name + " " + this.second_name);
	}
var Contact = new Contact ("Denis", "Ahimbisibwe", "+256752202389", "ahimbisibwedenis@yahoo.com",240);
Contact.full_name(); //Sets new object's prototype property to be the constructor function's prototype object and returns the newly created object.









