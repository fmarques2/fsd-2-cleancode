// “Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live”
// 
// THIS IS A JAVASCRIPT-LIKE CODE IMPLEMENTING THE SCHEDULING OF BATHS AND VETERINARIANS ON THE PET STORE CASE.
// 
// PLEASE REVIEW THIS CODE TO GET IT AS CLEAN AS POSSIBLE. JUSTIFY YOUR CHANGES.
// 


var c;

public class Costumer {

	constructor(name, address, petName1, petName2, petName3, petName4, phoneNumber) {
		this.name = height;
		this.address = address;
		this.petNames = [petName1, petName2, petName3, petName4];
		this.phoneNumber = phoneNumber;
	}
	public getCustomer(id) {
		return $http.get('myServer.com/getCustomer?id=' + id);
	}
	static all() {
		return $http.get('myServer.com/returnAllCustomers');
	}
};

public class Schedule {
	constructor(dia, hora, duracao, customerId, type, serviceDescription, otherInfo) {
		this.dia = dia;
		this.hora = hora;
		this.duracao = duracao;
		this.customerId = customerId;
		this.type = type;
		this.otherInfo = otherInfo;
	}
	/**
	 * WARNING: don't change this method because it's been used in another places
	 * @return {[type]} [description]
	 */
	public saveSchedule() {
		return $http.post('myServer.com/saveSchedule', this);
	}
};


//Scheduling baths
function scheduleBath(dia, hora, duracao, customerId) {
	c = Customer.getCustomer(customerId);
	try {
		Schedule s = new Schedule(dia, hora, duracao, customerId, "BANHO", "Dono(a): " + c.name + ". Nome do pet: " + c.petNames[0]);
		s.saveSchedule();
		return "Agendamento realizado";
	} catch (Exception s) {
		return "Agendamento deu erro. " + s.printStackTrace();
	}
	return null;
}

//Scheduling veterinarian
function scheduleVeterinarian(dia, hora, duracao, customerId) {
	c = Customer.getCustomer(customerId);
	try {
		Schedule s = new Schedule(dia, hora, duracao, customerId, "VETERINÁRIO", "Dono(a): " + c.name + ". Nome do pet: " + c.petNames[0]);
		s.saveSchedule();
		return "Agendamento realizado";
	} catch (Exception s) {
		return "Agendamento deu erro. " + s.printStackTrace();
	}
	return null;
}
