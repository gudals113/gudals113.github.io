---
title: 비트코인 트레이딩 봇 만들기(0)- python, Upbit API
categories:
- dev
tags:
- python
- upbit
sitemap:
    changefreq : daily
    priority : 1.0
---

얼마전 유튜브를 보는데 홍준표 국민의힘 대선 경선 후보가 SNL에 나와서 인기를 얻었다. 조회수 200만이 넘었다. SNL에서도 냄새를 맡았는지 정치인들이 계속해서 출연하고 있다. 이번에는 이준석 국민의힘 당대표가 나왔다. 비트코인 얘기를 하는데 자동투자로 선거 세네 번 치를 비용을 얻었다고 말했다. 돈 벌러 가자.

[https://www.youtube.com/watch?v=0dA1Pldtbxw](https://www.youtube.com/watch?v=0dA1Pldtbxw)


> Upbit API를 간단하게 알아보는 글이다. pyupbit를 활용한 매매는 다음 글에서 다룬다.


# Upbit Open API 사용하기

## 1. 업비트 회원가입 → 마이페이지 → Open API 관리

[https://upbit.com/mypage/open_api_management](https://upbit.com/mypage/open_api_management)

자산조회, 주문조회, 주문하기 체크, 특정IP에서만 실행 체크 후 Open API Key 발급받기

Access Key와 Secret Key 발급 완료, 따로 저장해두기.

## 2. 고객센터 → Open API 안내 → 업비트 개발자 센터 → API Reference

개발자 센터에서 샘플 코드를 얻을 수 있다.

업비트에서 거래 가능한 마켓 목록을 불러오자. python의 requests 라이브러리가 필요하다. 

맥환경에서 개발 중이므로 python 라이브러리 설치를 위해 homebrew와 pip 설치 후 진행하였다.

### 라이브러리 설치

```python
python3 -m pip install requests
```

### 마켓 코드 조회

```python
# *market.py*
import requests

url = "https://api.upbit.com/v1/market/all?isDetails=false"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.json())
```

response.text 대신 json함수를 이용하여 정리된 결과를 볼 수 있다.

### 전체 계좌 조회

env파일에 ACCESS_KEY와 SECRET_KEY를 저장해두었다.

python의 내장 라이브러리인 os에서 os.environ을 사용하면 env 파일을 읽어올 수 있다.

```python
# *account.py*
import os
import jwt
import uuid
import hashlib
import requests
from urllib.parse import urlencode

access_key = os.environ['ACCESS_KEY']
secret_key = os.environ['SECRET_KEY']
server_url = "https://api.upbit.com"

payload = {
    'access_key': access_key,
    'nonce': str(uuid.uuid4()),
}

jwt_token = jwt.encode(payload, secret_key)
authorize_token = 'Bearer {}'.format(jwt_token)
headers = {"Authorization": authorize_token}

res = requests.get(server_url + "/v1/accounts", headers=headers)

print(res.json())
```

**실행하면 현재 자산을 불러올 수 있다.**
