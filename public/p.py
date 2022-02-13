with open("countries.txt") as f, open("countriesDisplay.txt", "a") as o:
	for row in f:
		o.write((row[0]+row[1].upper()+row[2:].replace("-"," ")).title())
