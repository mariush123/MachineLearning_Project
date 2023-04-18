import csv
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt 
from sklearn.model_selection import train_test_split

def fun(period,duration):
    data=pd.read_csv("files/PCEPersonalSpending.csv")
    x=[i for i in range(1,253)]
    y=data['Spending']
    y=y.values
    x=np.reshape(x,(-1,1))

    x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.33)
    model=LinearRegression()
    model.fit(x_train,y_train)
    plt.plot(x,y)
    result=model.predict(x_test)
    print(duration)
    if(period=='Year'):
        duration=duration*12
    predict=model.predict([[duration]])    
    plt.scatter(x_test,result,color="red")
    plt.savefig("files/fig.png")
    plt.show()



