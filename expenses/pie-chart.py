from matplotlib import pyplot as plt
import numpy as np   


spendings = ["clothings","food","travel","utilities","miscellaneous"]

percentage = [23,29,35,29,41]

fig = plt.figure(figsize=(10,7))
plt.pie(percentage, labels = spendings)


plt.show()