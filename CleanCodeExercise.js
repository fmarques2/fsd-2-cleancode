// “Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live”
// 
// THIS IS A JAVASCRIPT-LIKE CODE IMPLEMENTING THE SCHEDULING OF BATHS AND VETERINARIANS ON THE PET STORE CASE.
// 
// PLEASE REVIEW THIS CODE TO GET IT AS CLEAN AS POSSIBLE. JUSTIFY YOUR CHANGES.
// 

// A variável C representa o que?
var c;

public class Costumer {
	//E se o cliente tiver mais de 4 animais? é melhor substituir por um array de pets.
	constructor(name, address, petName1, petName2, petName3, petName4, phoneNumber) {
		this.name = height; //height??? de onde saiu isso?
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
	
	//serviceDescription não é usado na clase então pra que chamar no construtor??.
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
	// Todo código algum dia muda....
	public saveSchedule() {
		return $http.post('myServer.com/saveSchedule', this);
	}
};


//Scheduling baths

//os nomes de funções devem ser descritivos sem necessidade de comentários.
function scheduleBath(dia, hora, duracao, customerId) {
	c = Customer.getCustomer(customerId);
	try {
		//c.petNames[0] só vai marcar o banho para o primeiro pet da lista.
		Schedule s = new Schedule(dia, hora, duracao, customerId, "BANHO", "Dono(a): " + c.name + ". Nome do pet: " + c.petNames[0]);
		s.saveSchedule();
		return "Agendamento realizado";
	} catch (Exception s) {
		//Exeções devem ser tratadas, espero que esse método não retorne a stack de erro ao usuário.
		return "Agendamento deu erro. " + s.printStackTrace();
	}
	//Esse return nunca será alcançado;
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
