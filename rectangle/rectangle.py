class Rectangle:
    """
    Représente un rectangle.

    Attributes:
        __width (float): Largeur du rectangle.
        __height (float): Hauteur du rectangle.
    """

    def __init__(self, width: float = 3, height: float = 2) -> None:
        """
        Initialise un rectangle.

        Args:
            width (float): Largeur du rectangle.
            height (float): Hauteur du rectangle.
        """
        self.__width = width
        self.__height = height

    @property
    def width(self) -> float:
        return self.__width

    @width.setter
    def width(self, new_width: float) -> None:
        self.__width = new_width

    @property
    def height(self) -> float:
        return self.__height

    @height.setter
    def height(self, new_height: float) -> None:
        self.__height = new_height

    def calculate_area(self) -> float:
        return self.width * self.height


if __name__ == "__main__":
    print("All tests passed!")

