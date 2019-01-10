class Cell():
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.f = 0
        self.g = 0
        self.h = 0

        self.neighbors = []
        self.cameFrom = None

    def get_neighbors(self, grid, rows, cols):
        x = self.x
        y = self.y

        if x < rows-1:
            self.neighbors.append(grid[x+1][y])
            if y > 0:
                self.neighbors.append(grid[x+1][y-1])
            if y < cols-1:
                self.neighbors.append(grid[x+1][y+1])

        if x > 0:
            self.neighbors.append(grid[x-1][y])
            if y > 0:
                self.neighbors.append(grid[x-1][y-1])
            if y < cols-1:
                self.neighbors.append(grid[x-1][y+1])

        if y < cols-1:
            self.neighbors.append(grid[x][y+1])

        if y > 0:
            self.neighbors.append(grid[x][y-1])


    def heuristic(self, goal):
        distance = max(abs(self.x - goal.x), abs(self.y - goal.y))
        return distance
