---
title: 비트코인 트레이딩 봇 만들기(1)- pyupbit, 잔고 조회 및 백테스트
categories:
- dev
tags:
- upbit
- python
sitemap:
    changefreq : daily
    priority : 1.0
---

지난 글에서는 Upbit API 공식 문서에서 잔고와 마켓에 대한 정보를 불러오는 법을 알아봤다. 이번 글에서 부터는 python 라이브러리인 pyupbit를 통해 더욱 쉽고 간편하게 다양한 정보와 자동 매매를 위한 코드를 작성해보자. 
# pyupbit 라이브러리 사용하기

## 1. pyupbit 라이브러리 설치 및 사용

```bash
pip install pyupbit
```

## 2. 라이브러리 이용하여 잔고 및 티커 불러오기

[https://github.com/sharebook-kr/pyupbit](https://github.com/sharebook-kr/pyupbit)

```python
# main.py
# market.py, account.py 등 필요없다.
import os
import pyupbit

access_key = os.environ['ACCESS_KEY']
secret_key = os.environ['SECRET_KEY']
upbit=pyupbit.Upbit(access_key, secret_key)

#전체잔고
BALANCE = upbit.get_balances()
#원화 잔고
KRW_BALANCE = upbit.get_balance('KRW')
#비트코인 잔고
BTC_BALANCE = upbit.get_balance('BTC')

#원화 마켓 티커
krw_tickers = pyupbit.get_tickers("KRW")

#print(BALANCE)
```

비트코인 트레이딩 봇 만들기(0)에서 사용했던 Upbit API를 사용하지 않고 잔고와 마켓 정보를 불러올 수 있다.

마찬가지로 os.environ 내장 함수를 통해 env파일에 적어둔 access key와 secret key를 불러온다. 

# 매수 전략 설정하기

가장 유명한 변동성 돌파 전략을 사용해보자.

해당 전략은 어제의 고가와 저가의 변동폭의 K배만큼 상승(오늘 시가 기준)이 발생하면 매수를 진행한다.

이를 위해 우리는 24시간 운영되는 비트코인 시장에서 어제와 오늘의 기준을 설정하고 고가와 저가의 변동폭, 그리고 백테스트를 통해 적절한 K를 구해야한다. 

## 1. backtest

현재 매수 전략을 과거에 실행했을 때 수익률을 알아보자. 과거의 데이터를 통해 미래를 보장할 수는 과거의 가격 변동 추세와 현재의 그래프를 비교하여 수익률을 대략적으로 예측할 수 있을 것이다.

```python
# backtest.py
import os
import pyupbit
import pandas as pd
import numpy as np

def GET_ROR(K):
    
    df = pyupbit.get_ohlcv("KRW-BTC", count=30)

    
    df['range'] = (df['high']-df['low']) * K
    df['target'] = df['open'] + df['range'].shift(1)

    tax=0.0005
    
    df['ror'] = np.where(df['high'] > df['target'],
                        ( df['close']*(1-tax) ) / ( df['target']*(1+tax) ),
                        1
                        )

    df['hpr'] = df['ror'].cumprod()
    
    
    # print(df)
    return(df['hpr'][-1])

for i in np.arange(0.3, 0.9, 0.05):
    ROR=GET_ROR(i)
    print(i, ROR)
```

1. pyupbit의 get_ohlcv 함수를 이용한다. OHLCV란 Open, High, Low, Close, Volume의 앞글자로 시가, 고가, 저가, 종가, 거래량에 대한 정보를 데이터프레임 형태로 반환해준다. 데이터프레임은 파이썬 라이브러리인 pandas에서 사용되는 데이터 형태이다.
2. df에 30일 동안 ohlcv 정보를 저장한다. df는 데이터프레임 형태이기 때문에 새로운 변수를 선언만 하면 바로 추가할 수 있다.
3. ‘range’에 고가와 저가의 차에 K를 곱한 값을 저장하여 df에 추가한다. 
4. ‘target’은 우리가 매수하고자 하는 목표가이다. 금일의 시가에 전날 구한 range를 더한 것이 목표가이기 때문에 range를 shift(1)을 통해 1일만큼 미루고 시가 (df[’open’])를 더한다.  
5. 업비트는 매수할 때와 매도할 때 모두 0.05%의 수수료가 존재한다. 
6. np.where은 넘파이에서 조건에 맞는 값을 찾아주는 함수이다. 당일의 고가가 목표가 보다 높을 때 매도를 하기 때문에 해당 조건에 맞는 날에만 수익률을 계산한다.
7. cumprod() 함수는 numpy에서 누적곱을 구할 때 사용된다. hpr에는 수익률의 누적곱이 저장된다. 가장 마지막 날의 누적곱이 30일간 수익률이다.

**for 문을 통해 K값을 바꾸어 가며 과거에 최대 수익률을 낼 수 있었던 K값을 찾을 수 있다.**
