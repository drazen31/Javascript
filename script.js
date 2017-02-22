
var user = prompt("papir, kamen, makaze ?");


	user = user.toLowerCase();

	// if(user != "kamen" && user != "kamen" && user != "kamen") {
	// 	alert("Pogresno si uneo, ponovi");
	// 	return;
	// }

	var computer = Math.random();

	if (computer < 0.33)
	{
		computer = "papir";
	}
	else if (computer <= 0.66)
	{
		computer = "kamen";
	}
	else 
	{
		computer = "makaze";
	}

	if (user == computer)
	{
		document.write("<h1>Nereseno je! Refresuj igru!</h1>");
	}
	else if (user == "papir")
	{
		if (computer == "makaze")
		{
			document.write("<h1>Imam makaze! HaHaHa izbubio si!!!</h1>")
		}
		else
		{
			document.write("<h1>Pobedio si! Cestitam! Smes li opet?</h1>")
		}
	}
	else if (user == "kamen")
	{
		if (computer == "papir")
		{
			document.write("<h1>Ja sam papir! Hahaha izbubio si!!!</h1>")
		}
		else 
		{
			document.write("<h1>Pobedio si! Cestitam! Smes li opet?</h1>")
		}

	}

		else if (user == "makaze")

		{
			if (computer == "kamen")
			{
				document.write("<h1>Ja sam kamen! Hahaha izbubio si!!!</h1>")
			}
			else 
			{
				document.write("<h1>Pobedio si! Cestitam! Smes li opet?</h1>")
			}
		}



