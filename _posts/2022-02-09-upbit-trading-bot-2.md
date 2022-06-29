---
title: 비트코인 트레이딩 봇 만들기(2) - pyupbit, 로컬 환경에서 자동 매매
categories:
- dev
tags:
- python
- upbit
sitemap:
    changefreq : daily
    priority : 1.0
---

# 자동매매 실행하기

## 1. 로컬 환경에서 실행

클라우드에서 24시간 자동 매매를 실행하기 전 로컬 환경에서 테스트를 해보자. 

```python
# main.py
import os
import pyupbit
import time, datetime
import pandas as pd
import numpy as np

ACCESS_KEY = os.environ['ACCESS_KEY']
SECRET_KEY = os.environ['SECRET_KEY']   
upbit=pyupbit.Upbit(ACCESS_KEY, SECRET_KEY)

#K 30일마다 갱신해주자
def GET_TARGET_PRICE(K):
    df = pyupbit.get_ohlcv("KRW-BTC", count=2)
    gap = df['high'][0] - df['low'][0] #전날 고점 저점의 변동폭
    target = df['open'][-1] + gap*K
    return target

def SET_START_TIME():
    df = pyupbit.get_ohlcv("KRW-BTC",count=1)
    start = df.index[0]
    return start

def GET_BALANCE(ticker):
    balances = upbit.get_balances()
    for balance in balances:
        if balance['currency'] == ticker and balance['balance'] != None:
            return float(balance['balance'])
        else:
            return 0            
        
def GET_CURRENT_PRICE_LIST():
    current = pyupbit.get_orderbook(ticker="KRW-BTC")
    df = pd.DataFrame(current)
    return df

def GET_CURRENT_PRICE():
    price = pyupbit.get_orderbook(ticker="KRW-BTC")["orderbook_units"][0]["ask_price"]
    return price

while True:
    try:
        NOW = datetime.datetime.now()
        START_TIME=SET_START_TIME()
        END_TIME = START_TIME + datetime.timedelta(days=1)
        KRW_BALANCE=GET_BALANCE("KRW")
        BTC_BALANCE=GET_BALANCE("BTC")
        
        #매매 시간일 때 (하루 중)
        if START_TIME <= NOW < END_TIME :
            TARGET_PRICE=GET_TARGET_PRICE(0.5)
            CURRENT_PRICE = GET_CURRENT_PRICE()
            
            if TARGET_PRICE < CURRENT_PRICE and KRW_BALANCE >5000:
                upbit.buy_market_order("KRW-BTC", KRW_BALANCE*0.9995)
        else:
            if BTC_BALANCE > 0 :
                upbit.sell_market_order("KRW-BTC", BTC_BALANCE)
                    
        time.sleep(1)
            
    except Exception as e:
        print(e)
        time.sleep(1)
```

기본적인 python 문법을 알고 있다면 쉽게 만들 수 있는 코드이다.

while 루프 안에서 하루가 시작되면 목표값에서 매수를 실행하고 하루가 끝나는 시점에 당일에 매수한 내역이 있으면 모두 매도한다. 매수 목표가까지 가격이 오르지 않으면 매수하지 않는다.  매수 목표가는 이전 글에서 다룬 변동성 돌파 전략을 따른다.  
실행 하면 정상적으로 작동하는 모습이다. 다만 24시간 자동매매를 위해서는 컴퓨터를 24시간동안 끄면 안된다. 다음 글에서는 EC2 환경에서 자동 매매를 실행해보자.
