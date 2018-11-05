



	let variavel; //Variavel do escopo sem hosting


	variavel="Hello World"; //Variável vai assumir como uma string 


	console.log(variavel)  //Printf no console de desenvolvedor

	let lista_de_arquivos =  [113, "Rua Elis Regina" , -55.2032 , "U" , true] ; //Faz uma lista de variaveis 

	for (let i = 0 ; i < lista_de_arquivos.length ; i = i + 1 ){ //Percorre a lista 

		console.log( lista_de_arquivos [i]);

	}

	let pessoa =  {             //Cria um objeto com dois atributos
		nome : "Uriel" , 	    // usa-se "  :  " para fazer a igualdade e " ,  " para separar os atributos
		idade : 20 
	}

	pessoa.peso = "66 Kg"     //Cria outro atributo no objeto, mesmo depois de feito

	console.log(pessoa.nome);
	console.log(pessoa.idade);
	console.log(pessoa.peso);

	if(pessoa.idade >= 20){
		console.log("Essa pessoa já pode tirar carteira");
	}

	let pessoa2 =  {             //Cria um objeto com dois atributos
		nome : "Geraldo" , 	    // usa-se "  :  " para fazer  a igualdade e " ,  " para separar os atributos
		idade : 63 
	}

	let pessoa3 =  {             //Cria um objeto com dois atributos
		nome : "Sirlene" , 	    // usa-se "  :  " para fazer a igualdade e " ,  " para separar os atributos
		idade : 54 
	}

	var tiraMediaIdades = function(p1,p2,p3){

		let soma_idades = p1.idade + p2.idade + p3.idade ;
		let media = soma_idades / 3;

		console.log( "Média das Idades é : " + media.toPrecision(5) ) ; //Mostra no console a media de idades com 4 digitos decimais de preicsao

	}

	tiraMediaIdades(pessoa,pessoa2,pessoa3);

	var mostraNomes = function(){

		for (let k = 0 ; k < arguments.length ; k = k +1  ){ //Faz a funcao de acordo com o tamaho de argumentos
			console.log(arguments[k]);
		}

	}

	//	mostraNomes ();
	mostraNomes ("Rei");
	mostraNomes ("Uriel" , "Julia");
	mostraNomes ("Zoro","Sanji" , 'Luffy' , 'Chopper' , "Robin");
