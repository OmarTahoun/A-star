class cell(object):
    """
    docstring for cell.

    1- each cell has x,y
    2- each cell hass f(), h(), g()
    3- neighbors for each cell
    4- parent for each cell


    h(only four directions) = abs (current_cell.x – goal.x) + abs (current_cell.y – goal.y)  (right, left, up, down)
    g() = cost from the begining to a cell
    """
    def __init__(self, arg):
        self.arg = arg
