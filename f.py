class Automobile:
    def __init__(self, ndoors=0, clr=""):
        self._doors = ndoors
        self._colour = clr

    def printDoors(self):
        return "Number of doors is:" + str(self._doors)

    def printColour(self):
        return "Colour is:" + self._colour

    def display(self):
        return "Car is: " + str(self._doors) + " doors, " + self._colour


class SportsCar(Automobile):
    def __init__(self, ndoors, clr, eng):
        super().__init__(ndoors, clr)
        self._engine = eng

    def display(self):
        return "Car is: " + str(self._doors) + " doors, " +self._colour + ", with " + str(self._engine) + " hp"


if __name__ == "__main__":
    sCar = SportsCar(4, "red", "McLauren Engine")
    print(sCar.display())
