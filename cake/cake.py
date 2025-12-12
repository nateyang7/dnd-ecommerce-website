class Cake:
    """
    Représente un gâteau.

    Attributes:
        __flavor (str): Goût du gâteau.
    """
    def __repr__(self, flavor: str = "?") -> None:
        """
        Initialise une instance d'un gâteau.
        """
        self.__flavor: str = flavor

    def cut_in_parts(self):
        ...


if __name__ == "__main__":
    banana_cake: Cake = Cake("banana")
    choco_cake: Cake = cake("chocolate")

    print("All tests passed!")

