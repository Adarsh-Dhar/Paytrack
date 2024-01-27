import matplotlib.pyplot as plt
import numpy as np

data = {"clothings":23,"food":29,"travel":35,"utilities":29,"miscellaneous":41}
spendings = list(data.keys())
percentage = list(data.values())

fig = plt.figure(figsize = (10,5))
plt.bar(spendings, percentage ,color= "maroon", width = 0.4 )
plt.xlabel("category of spendings")
plt.ylabel("percentage money spend in that category")
plt.title("expense tracker")

plt.show()
