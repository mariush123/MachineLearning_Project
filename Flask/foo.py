import csv
import pandas as pd
import numpy as np
from sklearn import *
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
import matplotlib.pyplot as plt 
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score



def fun(period,duration):
    data=pd.read_csv("files/shampoo_sales.csv")
    x=[i for i in range(1,37)]
    y=data['Sales']
    y=y.values
    x=np.reshape(x,(-1,1))
    y=np.reshape(y,(-1,1))

    x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.33)
    poly = PolynomialFeatures(degree = 2)

    x_poly = poly.fit_transform(x_train)
    final = poly.transform(x_test)
    model=LinearRegression()
    model.fit(x_poly,y_train)
    plt.plot(x,y)
    result=model.predict(final)
    r2score = r2_score(y_test,result)
    
    print(duration)
    if(period=='Year'):
        duration=duration*12
    duration+=36
    forecast = [i for i in range(36,duration+1)]
    forecast = np.reshape(forecast,(-1,1))
    dur = poly.transform(forecast)
    p = model.predict(dur)
    plt.plot(forecast,p,color='yellow')
    plt.savefig('files/fig.png')



