# 1-  open set , closed set
# 2- for each sucessor(neighbor) to a cell, calculate the score
# 3- if neighbor is in open list and we reached it before with lower score :
#     3.1- then skip this neighbor
# 4- if neighbor is in closed list and we checked it before:
#     4.1- if the earlier score is less than the current then skip
#     4.2- else if we found a better route to this neighbor then add neighbor to open list
#
