var Room1 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,-,-,-,-,S,S,-,S,-,S,-,E,-,G,G/\
G,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,S,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,G,G,-,S,S,M,-,S,S,S,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,G,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,G,G,G,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,G,G,G,G,G/\
G,-,-,-,-,-,-,-,-,-,-,S,-,G,G,G,G,G,G,G/\
G,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G/\
G,-,C,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,S,S,S,-,-,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room2 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,E,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,G,G,G,G,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,G,G,-,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,M,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,G,G,G,G,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,-,-,C,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room3 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,-,-,E,-,-,-,M,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,G/\
G,-,-,-,-,-,-,-,-,G,-,-,G,-,G,-,-,-,-,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,-,-,G,G,G,G,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,-,-,-,-,-,-,-,G,G,G,G,-,G,G,-,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,-,L,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,-,C,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room4 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,E,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,-,-,-,G,G,G,G,-,-,-,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,G,-,-,-,-,-,G,G,-,-,-,-,G,G/\
G,G,-,-,-,G,G,G,-,-,-,-,-,-,G,-,M,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,-,-,-,-,-,L,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,G,G,-,-,-,G,-,-,G,G,-,-,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,C,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room5 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,C,G,G/\
G,G,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,-,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,-,-,G,G,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,-,G,G,G,-,-,-,-,G,G/\
G,G,G,G,G,G,G,-,-,-,G,G,G,G,G,-,-,G,-,-,G,G,-,-,-,G,G,G,G,-,G,G/\
G,G,G,-,-,-,-,-,-,G,G,G,G,G,G,-,-,G,-,-,-,-,-,-,-,G,-,-,-,-,G,G/\
G,G,G,-,-,-,-,-,G,G,G,G,G,G,G,-,-,G,G,L,-,-,-,-,-,G,-,-,-,-,G,G/\
G,G,-,-,G,-,-,-,G,G,G,G,G,G,G,-,-,G,G,G,G,G,-,-,-,G,-,G,G,G,G,G/\
G,G,-,-,G,-,-,G,-,-,G,G,G,G,G,-,-,G,-,-,-,-,-,-,-,G,-,-,-,-,G,G/\
G,G,-,-,G,-,-,G,-,-,-,G,G,G,G,-,-,G,-,-,-,-,-,-,G,G,-,-,-,-,G,G/\
G,G,-,-,G,G,G,G,-,-,-,-,G,G,G,-,-,G,-,-,-,-,-,G,-,G,G,G,G,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,G,G,-,-,G,-,-,-,-,G,-,-,G,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,G,-,-,-,G,-,-,-,G,-,-,-,-,G,G/\
G,G,-,-,-,E,-,-,-,-,-,-,-,-,G,-,-,G,G,-,-,-,-,-,-,G,-,G,G,G,G,G/\
G,G,-,-,G,G,G,-,-,-,-,-,-,-,G,-,-,G,G,G,-,-,-,-,-,G,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,G,G,G,G,-,-,-,-,G,-,-,-,-,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,G,-,-,-,-,G,G,G,G,G,-,-,-,G,G,G,G,-,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,G,-,-,-,-,G,G,G,G,G,G,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,-,-,-,-,-,-,-,G,G,G,-,-,G,G,G,G,G,G,G,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,-,-,-,-,-,-,-,G,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,-,-,-,-,-,-,G,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,-,G,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G,G,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room6 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,E,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,-,G,G,-,G,G,-,G,G,-,G,G,-,-,-,G,G,G,-,-,-,-,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,-,-,-,-,-,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,-,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,-,-,G,G,G,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,-,-,-,-,-,-,-,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,-,-,-,-,-,-,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,-,-,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,-,-,-,-,-,-,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,G,G,G,-,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,-,C,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,G,-,-,-,-,-,-,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room7 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,-,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,-,-,-,-,-,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,-,-,-,-,-,-,G,G,G,G,G,G,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,C,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,G,G/\
G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,-,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,E,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,G,G,G,G,G,G,G,G,-,-,-,G,-,-,G,-,-,G,-,-,G,-,-,G,-,-,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room8 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,E,-,G,G/\
G,G,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,G,G,G,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,-,-,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,G,G,G,G,G,-,-,-,G,-,-,-,G,G/\
G,G,-,-,G,G,G,G,G,G,G,G,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,G,G/\
G,G,-,-,-,G,-,-,-,G,G,G,G,G,G,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,G,G,G,G,G,-,-,-,G,G,G/\
G,G,-,-,-,-,-,-,-,G,G,G,-,-,-,-,G,G,G,G/\
G,G,-,-,G,-,-,G,-,G,-,-,-,-,-,G,G,G,G,G/\
G,G,-,-,G,-,G,G,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,-,G,G,-,G,G,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,C,-,G,G,G,G,-,M,-,-,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room9 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,C,-,-,-,-,G,-,E,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,-,-,-,G,G,G,G,G,-,G,G,G,-,-,G,G/\
G,G,-,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,G,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,-,-,-,-,-,G,-,-,G,G,-,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,G,G,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,G,G,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,G,G,G,G,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,G,G,G,G,G,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,G,-,-,-,-,-,G,G,-,-,-,G,G/\
G,G,-,-,-,-,-,G,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,-,-,-,-,-,G,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,-,-,-,-,-,G,-,-,-,-,-,-,-,G,G,G,G,G/\
G,G,-,-,-,-,-,G,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room10 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,E,-,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,G,-,-,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,G,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,G,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,G,-,G,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,G,G,-,G,G,-,-,-,-,-,G,G/\
G,G,-,-,-,G,G,-,-,-,-,-,-,G,G,-,-,-,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G/\
G,G,G,G,-,-,G,-,-,-,-,-,G,G,-,-,G,G,G,G/\
G,G,G,G,-,-,-,-,-,G,G,-,-,-,-,-,G,G,G,G/\
G,G,G,G,-,-,-,-,G,-,-,G,L,-,-,-,G,G,G,G/\
G,G,G,G,-,-,-,G,-,-,-,-,G,-,-,-,G,G,G,G/\
G,G,-,-,C,-,G,-,-,-,-,-,-,G,-,-,-,-,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,G,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room11 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,C,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,G,G,G,G,G,G,G,G,G,G,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,G,G,G,G,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,G,G,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,E,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,-,-,-,-,-,G,G,G,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room12 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,E,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,L,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,7,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,C,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room13 ="G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,E,-,G,G/\
G,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,G,G,G,G,-,-,G,G/\
G,G,-,-,-,-,-,-,-,G,G,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,C,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room14 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,-,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,G,G,G,G,-,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,G,G,G,G,G,-,G,G,G,G,G,-,-,-,-,G,G/\
G,G,-,-,-,G,-,-,G,G,-,-,G,G,G,G,G,G,G,G,-,G,G,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,E,-,-,G,G,G,-,-,G,-,-,G,-,-,G,G,-,-,G,G,G,G,-,-,-,-,G,G,G,G/\
G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,-,-,G,G,G,G,G/\
G,G,-,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,-,G,G,G,G,G,G/\
G,G,C,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,-,-,G,-,-,-,-,-,G,G,G,G,G,G/\
G,G,G,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,G,-,-,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,G,-,-,-,L,-,-,-,-,-,-,-,-,G,-,-,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,G,-,G,-,G,-,G,-,G,-,G,-,G,-,-,G,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room15 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,E,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,-,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,G,G,G,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G,G,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,G,G,G,-,-,-,L,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,G,G,G,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,L,-,-,-,G,G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,L,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,-,-,-,-,-,-,-,-,G,G,-,G,G,-,-,G,G,-,-,G,G,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,G,-,-,-,-,-,-,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,G,-,-,-,-,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,-,-,-,G,-,-,-,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,-,-,-,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,G,G,G,G,G,-,-,G,G,-,G,G,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,G,-,-,-,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G,G,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,-,-,-,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G,G,-,-,-,-,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,-,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,-,-,-,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,G,G,G,G,G,G,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,G,G,G,G/\
G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,-,G/\
G,G,-,-,-,-,-,-,-,-,-,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,L,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,-,-,G,-,-,-,G,-,-,G,G,-,-,-,-,-,-,G,G,-,-,-,G,G,G,-,-,-,-,-,G,G,G,-,-,-,-,-,-,-,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,-,-,-,-,G,-,-,-,-,-,-,-,-,G,G,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,L,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,C,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,G,G,G,G,G,G,-,-,-,G,-,-,-,G,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,G,G,G,-,-,-,G,-,-,-,G,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,G,G,-,-,-,G,-,-,-,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,G,-,-,-,G,-,-,-,G,-,-,-,-,G,-,-,-,-,-,-,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,G,-,-,-,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,-,-,-,-,-,-,G,-,-,-,G,-,-,-,G,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,-,-,-,-,-,G,-,-,-,G,-,-,-,G,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var roomList = [Room1, Room2, Room3, Room4, Room5, Room6, Room7, Room8, Room9, Room10, Room11, Room12, Room13, Room14, Room15];
