# Importing the cell object file
from cell import *
path = []

# initializing the size of the grid to be 10 x 10
rows = cols = 5
# Creating the grid
grid = [[0 for x in range(rows)] for y in range(cols)]

for i in range(rows):
    for j in range(cols):
        grid[i][j] = Cell(i,j)

for i in range(rows):
    for j in range(cols):
        grid[i][j].get_neighbors(grid, rows, cols)

# Setting the start and end point
start = grid[1][4]
end = grid[3][1]

# creating the set of open and closed cells
open = []
closed = []
open.append(start)


# Checking all the available or open cells
while len(open)>0:
    open.sort(key=lambda x: x.f)
    q = open[0]
    del open[0]


    # Checking all the neighbors that we can visit from the current cell
    for neighbor in q.neighbors:
        print "checking neighbor: "
        print neighbor.x,  neighbor.y

        # Checking if that neighbor is the end point
        if neighbor == end:
            print("Done!")
            neighbor.cameFrom = q
            temp = neighbor
            path.append(temp)
            while(temp.cameFrom):
                path.append(temp.cameFrom)
                temp = temp.cameFrom
            for cell in path:
                print cell.x, cell.y
            exit()


        # Caclculating the score of this neighbor if visited from the current cell
        temp_g = q.g+1
        temp_h = neighbor.heuristic(end)
        temp_f = temp_g + temp_h


        # If this neighbor is already in the open set
        if neighbor not in closed:
            if neighbor not in open:
                neighbor.cameFrom = q
                open.append(neighbor)
            elif temp_f > neighbor.f:
                continue


    closed.append(q)
