var Room1 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,E,-,G,G/\
G,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,P,P,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,-,-,-,-,-,G,G,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,-,G,G,G,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,G,G,G,G,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G/\
G,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,-,-,P,P,G,G,G,G,G,G,G,G,G,G/\
G,-,C,-,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room2 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G/\
G,G,-,-,-,-,-,O,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,P,P,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,P,P,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,G,G,G,-,-,-,-,-,-,P,P,P,P,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,P,P,-,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,P,P,P,P,G,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,P,P,G,G,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,-,-,C,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room3 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,-,-,E,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,G,G,G,P,G,G,-,-,-,-,-,-,-,-,-,-,G/\
G,-,-,-,-,-,-,-,-,G,-,-,G,-,P,-,-,-,-,G/\
G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,-,-,G,G,G,G,-,-,-,-,-,-,-,-,-,-,G,P,G/\
G,-,-,-,-,-,-,-,G,G,G,G,-,P,P,-,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G/\
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
G,G,-,-,-,G,G,G,-,-,-,-,-,-,G,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,G,G,-,-,-,G,-,-,G,G,-,-,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,G,-,-,-,-,-,-,-,-,-,-,-,-,G,G/\
G,G,-,-,-,-,-,-,-,-,-,-,-,-,-,-,C,-,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"

var Room5 = "G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G/\
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
G,G,-,-,-,-,-,-,-,G,G,g,-,-,-,-,G,G,G,G/\
G,G,-,-,G,-,-,G,-,G,-,-,-,-,-,G,G,G,G,G/\
G,G,-,-,G,-,G,G,-,-,-,-,-,-,G,G,G,G,G,G/\
G,G,-,G,G,-,G,G,-,-,-,-,-,G,G,G,G,G,G,G/\
G,G,C,-,G,G,G,G,-,-,-,-,G,G,G,G,G,G,G,G/\
G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G"


var roomList = [Room1, Room2, Room3, Room4, Room5];
