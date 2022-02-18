var store = [{
        "title": "안녕하세요 개구리입니다.",
        "excerpt":"안녕하세요.  노션에 정리해가며 공부를 했었는데 올해부터는 블로그에 정리를 하려고 합니다.  글이 많아지면 방문하시는 분들도 생기겠죠.  잘 부탁드립니다.  궁금하신 점이나 제 글에 오류가 있다면 알려주세요.  ","categories": ["life"],
        "tags": ["life"],
        "url": "/life/introduce/",
        "teaser": null
      },{
        "title": "[백준/python]2178번 미로탐색 - bfs",
        "excerpt":"prev에 경로를 저장하고 BFS를 돌렸다. BFS가 끝나면 prev를 거꾸로 돌아가며 지나온 개수를 구한다. 돌아가는 과정이 비효율적이다. from collections import deque N, M = map(int, input().split()) miro=[[0 for _ in range(M) ] for _ in range(N)] for i in range(N): line=input() for j in range(M): miro[i][j]=int(line[j]) visited=[[0 for _ in range(M)...","categories": ["algorithm"],
        "tags": ["algorithm","bfs","graph","python"],
        "url": "/algorithm/acmicpc-2178/",
        "teaser": null
      },{
        "title": "[백준/python]2098번 외판원 순회 - bitmasking",
        "excerpt":"알고리즘분석 시간에 배웠던 NP 중 하나인 TSP 문제다. N이 작은 경우 DP와 비트마스킹을 통해 풀 수 있다. import sys limit_number = 150000 sys.setrecursionlimit(limit_number) N=int(input()) #이동 가능한 도시 경로 작성 path=[[0 for _ in range(N)] for _ in range(N)] for i in range(N): line= list( map ( int, input().split() ) )...","categories": ["algorithm"],
        "tags": ["algorithm","bitmask","dp","python"],
        "url": "/algorithm/acmicpc-2098/",
        "teaser": null
      },{
        "title": "[백준/python]2133번 타일 채우기 - bitmasking",
        "excerpt":"매 열마다 3개의 타일이 있다.채워진 타일을 1, 채워지지 않은 타일을 0으로 표시한다. ex)맨 위 타일 하나만 채워진 경우 100. 비트마스크는 알고리즘의 한 종류가 아닌 일종의 기법이라는 것을 해당 문제에서 알 수 있다. 점화식을 잘 표현하면 굳이 비트표현이 아닌 정수표현으로 풀어도 상관없다. 다만 0과 1의 직관적인 표현이 문제 풀이에 조금이나마 도움이...","categories": ["algorithm"],
        "tags": ["algorithm","python","bitmask","dp"],
        "url": "/algorithm/acmicpc-2133/",
        "teaser": null
      },{
        "title": "[AWS]mac환경에서 EC2 - VPC 설정",
        "excerpt":"VPC   격리형 클라우드 리소스 하나의 계정에서 생성하는 리소스들만의 격리된 네트워크 환경 구성 가능함.   VPC의 구성요소      VPC   서브넷   라우트 테이블   인터넷 게이트웨이  ","categories": ["aws"],
        "tags": ["aws","vpc","ec2"],
        "url": "/aws/aws-1/",
        "teaser": null
      },{
        "title": "[백준/python]1194번 달이 차오른다, 가자 - bfs, bitmasking",
        "excerpt":"처음에 비트마스킹을 잘못 이해했다. 보유할 수 있는 열쇠의 경우의 수를 비트마스킹으로 표현했다. (7bit) visited를 2차원 배열로 만들고 특정 지점을 방문했을 때 가지고 있는 열쇠를 visited배열의 값으로 갖도록 코드를 짰다. ex)visited[x][y] = 0b1 000 001 : a 열쇠를 갖고 있고 해당 지점을 방문한 적이 있음, visited[x][y] = 0b0 100 001 :...","categories": ["algorithm"],
        "tags": ["algorithm","python","bitmask","bfs"],
        "url": "/algorithm/acmicpc-1194/",
        "teaser": null
      },{
        "title": "비트코인 트레이딩 봇 만들기(0)- python, Upbit API",
        "excerpt":"얼마전 유튜브를 보는데 홍준표 국민의힘 대선 경선 후보가 SNL에 나와서 인기를 얻었다. 조회수 200만이 넘었다. SNL에서도 냄새를 맡았는지 정치인들이 계속해서 출연하고 있다. 이번에는 이준석 국민의힘 당대표가 나왔다. 비트코인 얘기를 하는데 자동투자로 선거 세네 번 치를 비용을 얻었다고 말했다. 돈 벌러 가자. https://www.youtube.com/watch?v=0dA1Pldtbxw Upbit API를 간단하게 알아보는 글이다. pyupbit를 활용한 매매는...","categories": ["dev"],
        "tags": ["python","upbit"],
        "url": "/dev/upbit-trading-bot-0/",
        "teaser": null
      },{
        "title": "[백준/python]10816번 숫자 카드2 - binary search",
        "excerpt":"10815번의 변형 문제이다. 해당 문제를 푸는 여러 풀이가 있지만 어떤 풀이를 선택하든 딕셔너리(해쉬맵)을 사용해야 시간 내에 풀 수 있다. 10815번과 다르게 이진 탐색의 범위를 줄여줄 때 mid에 +-1 을 하지 않고 범위를 줄이는 방식을 선택했다. 이렇게 하기 위해서는 초기에 s와 t를 리스트이 범위[0,N-1]보다 넓게[-1,N] 설정해주어야 루프의 조건이 t-s&gt;1 일 때...","categories": ["algorithm"],
        "tags": ["algorithm","binarySearch","python"],
        "url": "/algorithm/acmicpc-10816/",
        "teaser": null
      },{
        "title": "[백준/python]2001번 보석줍기 -  bfs, bitmasking",
        "excerpt":"이제 비트마스킹은 그만 풀어야겠다. 2001번 보석줍기 문제는 주어진 테스트 케이스가 많이 없었고 오류를 찾지 못해서 5시간은 걸린 것 같다. #보석줍기 bitmasking from collections import deque def bitCount(bit): count=0 while bit&gt;0: count+= 0b1 &amp; bit bit = bit&gt;&gt;1 return count N,M,K= map( int, input().split() ) path=[[]for _ in range(N+1)] diamond=[] for...","categories": ["algorithm"],
        "tags": ["algorithm","bfs","bitmask","graph"],
        "url": "/algorithm/acmicpc-2001/",
        "teaser": null
      },{
        "title": "[백준/python]21608번 상어 초등학교 -  implementation",
        "excerpt":"구현 문제는 코드를 작성하면서도 너무 복잡한 것 아닌가 하는 의문이 든다. 그러나 의문을 뒤로 하고 일단 끝까지 풀 수 있다. N= int(input()) room=[[0 for _ in range(N)] for _ in range(N)] #채워진 상태 wanted=[[] for _ in range(1+ N**2)] # 내가 원하는 친구들 assigned=[[-1,-1] for _ in range (1+ N**2)]...","categories": ["algorithm"],
        "tags": ["algorithm","python","implementation"],
        "url": "/algorithm/acmicpc-21608/",
        "teaser": null
      },{
        "title": "[백준/python]15686번 치킨 배달 - implementation",
        "excerpt":"문제를 풀다보면 조합이 필요한데 이 때 가장 많은 의문이 들었다. 하지만 구현 문제라는 것을 알고 풀었기 때문에 차근차근 코드를 작성했다. https://gudals113.github.io/algorithm/acmicpc-21608/ 21608번 상어 초등학교 문제 풀 때도 그랬지만 의문이 생겨서 시간이 정체되는 것이 구현 문제의 함정인 것 같다. from itertools import combinations N, M = map(int, input().split()) # city =...","categories": ["algorithm"],
        "tags": ["algorithm","implementation","python"],
        "url": "/algorithm/acmicpc-15686/",
        "teaser": null
      },{
        "title": "[백준/python]15732번 도토리 숨기기 - binary search",
        "excerpt":"1300번 문제 K번째 수와 유사한 문제이다. 어떤 것을 기준으로 이분 탐색을 할 지 찾는 것이 중요하다. # 도토리 숨기기 (binary search) 1300번문제와 유사 import sys def input(): return sys.stdin.readline() N,K,D = map(int, input().split()) rule=[] for i in range(K): line = list(map(int, input().split())) rule.append(line) ans=0 s,t=0, N+1 while t-s&gt;1: mid =...","categories": ["algorithm"],
        "tags": ["binarySearch","algorithm","python"],
        "url": "/algorithm/acmicpc-15732/",
        "teaser": null
      },{
        "title": "[백준/python]1182번 부분수열의 합 - backtracking",
        "excerpt":"N과 M 문제보다 먼저 풀었다. 백트래킹에 대한 개념을 몰라서 백트래킹 문제 중에서도 상대적으로 쉬운 문제였지만 시간이 꽤 걸렸다. 첫 풀이도 백트래킹이지만 다른 사람들의 코드를 참고하여 더 간단하게 풀 수 있음을 알게 되었다. 코드 DFS를 이용해 재귀로 풀었다. N, S = map(int, input().split()) arr = list(map(int, input().split())) ans = 0 def...","categories": ["algorithm"],
        "tags": ["algorithm","backtracking","dfs","python"],
        "url": "/algorithm/acmicpc-1182/",
        "teaser": null
      },{
        "title": "[백준/python]15649번 N과 M (1), 15650번 N과 M(2) - backtracking",
        "excerpt":"N과 M 문제를 통해 백트래킹을 익혀보자. 백트래킹에서 가장 중요한 전략은 가지치기이다. 백트래킹은 기본적으로 재귀 함수로 구현된 DFS의 구조이다. 재귀를 반복하며 조건과 맞지 않는 케이스를 잘 처리하는 것이 중요하다. 15649번 N과 M (1) 코드 N,M = map(int, input().split()) arr=[] ans=0 def DFS(ans): global arr if ans==M: print(' '.join(map(str, arr))) return for...","categories": ["algorithm"],
        "tags": ["backtracking","dfs","algorithm","python"],
        "url": "/algorithm/acmicpc-15649/",
        "teaser": null
      },{
        "title": "[운영체제/OS]Operating System Concepts - 공룡책 개념 정리(1)",
        "excerpt":"Introduction A stored-program computer stored program computer - 폰 노이만이 개발한 memory에 progrmas 저장하는 형태의 컴퓨터 program - set of instructions Operating System Operating System is a software that manages a computer’s hardware. provides a basis for application progrmas acts as an intermediary(중개인) between the computer user and the computer...","categories": ["cs"],
        "tags": ["cs","os"],
        "url": "/cs/dinosaur-os-1/",
        "teaser": null
      },{
        "title": "[백준/python]14712번 넴모넴모(Easy) - backtracking",
        "excerpt":"#넴모넴모(easy) , backtraking N, M = map(int, input().split()) arr=[ [0 for _ in range(M+1)] for _ in range(N+1) ] ans=0 def DFS(index_x,index_y): global ans if index_x==N and index_y == M+1 : ans+=1 return if index_y ==M+1: index_x+=1 index_y=1 DFS(index_x, index_y+1) if arr[index_x -1][index_y]==0 or arr[index_x][index_y-1]==0 or arr[index_x-1][index_y-1]==0: arr[index_x][index_y]=1 DFS(index_x, index_y+1)...","categories": ["algorithm"],
        "tags": ["algorithm","backtracking","dfs"],
        "url": "/algorithm/acmicpc-14712/",
        "teaser": null
      },{
        "title": "[백준/python]1987번 알파벳 - backtracking",
        "excerpt":"보드를 방문하며 해당 보드를 방문한 적이 있는지, 해당 알파벳을 이미 마주친 적 있는 지만 확인해주면 된다. DFS를 이용한 백트래킹으로 간단하게 구현했다. 다른 풀이를 찾아보니 BFS로 푼 경우도 있고 시간초과가 나는 경우도 있는 것 같다. DFS와 백트래킹을 사용하지 않는다면 최단 거리 문제를 푸는 것처럼 BFS로 풀어도 되는 문제이다. R, C =...","categories": ["algorithm"],
        "tags": ["algorithm","backtracking","dfs"],
        "url": "/algorithm/acmicpc-1987/",
        "teaser": null
      },{
        "title": "[백준/python]2580번 스도쿠 - backtracking",
        "excerpt":"스도쿠 문제다. 스도쿠 문제를 풀어봤다면 백트래킹으로 풀어야 된다는 생각이 자연스럽게 떠오를 것 같다. #스도쿠 sdoku = [] start = [] for i in range(9): line = list(map(int, input().split())) for j in range(9): if line[j]==0 : start.append([i,j]) sdoku.append( line ) def DFS(idx): global ans if idx == len(start) : for i...","categories": ["algorithm"],
        "tags": ["algorithm","dfs","backtracking"],
        "url": "/algorithm/acmicpc-2580/",
        "teaser": null
      },{
        "title": "[백준/python]9663번 N-queen - backtracking",
        "excerpt":"백트래킹의 대표적인 예제다. 넴모넴모 문제를 풀고 풀어서 모든 격자를 방문하며 가로방향, 세로방향, 대각선 방향을 체크하는 방식의 풀이를 생각했었다. 상당히 복잡하고 시간도 오래 걸렸다. 많은 시행착오 후에 각각의 행과 열에는 오직 1개의 퀸이 올 수 있다는 것을 생각해낼 수 있었다. # N - queen N = int(input()) chess=[-1 for _ in...","categories": ["algorithm"],
        "tags": ["algorithm","backtracking","dfs"],
        "url": "/algorithm/acmicpc-9663/",
        "teaser": null
      },{
        "title": "[백준/python]7569번 토마토 - \bbfs",
        "excerpt":"3차원 그래프 문제다. 이미 익은 토마토를 기준으로 BFS를 실행하면서 총 소요되는 시간을 더해준다. #토마토 from collections import deque M,N,H = map(int, input().split()) tomato = [] already =[] #이미 익은 좌표 notready = 0 #인 익은 개수 for i in range(H): floor = [] for j in range(N): line = list(map(int,...","categories": ["algorithm"],
        "tags": ["algorithm","bfs"],
        "url": "/algorithm/acmicpc-7569/",
        "teaser": null
      },{
        "title": "[백준/python]16236번 아기상어 - bfs, implementation",
        "excerpt":"BFS를 사용하는 구현 문제이다. 조건이 다양하기 때문에 주의해서 풀어야 한다. #아기 상어 (BFS, 구현) from collections import deque N = int(input()) sea = [ ] # 격자 저장 shark = [] # 상어 시작 위치 저장 for i in range(N): line = list(map(int, input().split())) sea.append(line) for j in range(N): if...","categories": ["algorithm"],
        "tags": ["algorithm","bfs","implementation"],
        "url": "/algorithm/acmicpc-16236/",
        "teaser": null
      },{
        "title": "[백준/python/오답]1493번 박스 채우기 - divide and conquer",
        "excerpt":"box=[] l,w,h = map(int, input().split()) N = int(input()) for i in range(N): box.append(list( map(int, input().split()) )) sol = 0 def dividing(x,y,z) : global sol if x==0 or y==0 or z==0 : return 0 for idx in range(N-1,-1,-1): num = box[idx][1] line = 2**box[idx][0] if num &gt;0 and line&lt;=min(x,y,z): box[idx][1] -=...","categories": ["algorithm"],
        "tags": ["algorithm","divideConquer"],
        "url": "/algorithm/acmicpc-1493/",
        "teaser": null
      },{
        "title": "[백준/python]2662번 기업투자 - knapsack, dp",
        "excerpt":"0-1 냅색 문제다. 냅색 알고리즘 유형을 분석하고 풀었더니 생각보다 쉽게 풀 수 있었다. 투자했을 때 최대 이익과 함께 각 기업에 투자한 액수를 출력해야 한다. 각 기업에 투자한 액수를 구하기 위해 dp를 모두 갱신한 뒤 다시 거꾸로 거슬러 올라가며 체크한다. N, M = map(int, input().split()) company = [[0 for _ in...","categories": ["algorithm"],
        "tags": ["algorithm","knapsack","dp"],
        "url": "/algorithm/acmicpc-2662/",
        "teaser": null
      },{
        "title": "[백준/python]7579번 앱 - knapsack, dp",
        "excerpt":"냅색 알고리즘에 해당 되는 문제이다. 냅색 알고리즘에는 가방에 보석을 담을 때 보석을 자를 수 없다고 가정하는 0-1 냅색 알고리즘과 자를 수 있다고 가정하는 Fractional 냅색 알고리즘이 있다. 이 문제는 0-1 냅색 알고리즘에 해당되는 문제다. 앱을 종료했을 때 최소한의 비용으로 최대한 M바이트 이상을 확보해야 한다. DP를 사용하여 앱을 종료했을 때 확보할...","categories": ["algorithm"],
        "tags": ["algorithm","dp","knapsack"],
        "url": "/algorithm/acmicpc-7579/",
        "teaser": null
      },{
        "title": "비트코인 트레이딩 봇 만들기(1)- pyupbit, 잔고 조회 및 백테스트",
        "excerpt":"지난 글에서는 Upbit API 공식 문서에서 잔고와 마켓에 대한 정보를 불러오는 법을 알아봤다. 이번 글에서 부터는 python 라이브러리인 pyupbit를 통해 더욱 쉽고 간편하게 다양한 정보와 자동 매매를 위한 코드를 작성해보자. pyupbit 라이브러리 사용하기 1. pyupbit 라이브러리 설치 및 사용 pip install pyupbit 2. 라이브러리 이용하여 잔고 및 티커 불러오기 https://github.com/sharebook-kr/pyupbit...","categories": ["dev"],
        "tags": ["upbit","python"],
        "url": "/dev/upbit-trading-bot-1/",
        "teaser": null
      },{
        "title": "비트코인 트레이딩 봇 만들기(2) - pyupbit, 로컬 환경에서 자동 매매",
        "excerpt":"자동매매 실행하기 1. 로컬 환경에서 실행 클라우드에서 24시간 자동 매매를 실행하기 전 로컬 환경에서 테스트를 해보자. # main.py import os import pyupbit import time, datetime import pandas as pd import numpy as np ACCESS_KEY = os.environ['ACCESS_KEY'] SECRET_KEY = os.environ['SECRET_KEY'] upbit=pyupbit.Upbit(ACCESS_KEY, SECRET_KEY) #K 30일마다 갱신해주자 def GET_TARGET_PRICE(K): df = pyupbit.get_ohlcv(\"KRW-BTC\", count=2)...","categories": ["dev"],
        "tags": ["python","upbit"],
        "url": "/dev/upbit-trading-bot-2/",
        "teaser": null
      },{
        "title": "[백준/python]5525번 IOI - string",
        "excerpt":"stack에 I가 등장하면 인덱스를 push하고 stack의 원소의 차이가 2이상이면 답을 늘려가는 방식으로 풀 수 있다. 그러나 문자열 문제이기 때문에 split을 사용하는 방식으로 풀어보았다. 풀이 I를 기준으로 split하여 입력값을 받는다. 입력된 배열을 탐색하며 연속하는 ‘O’의 개수를 계산한다. ‘O’가 아닌 값이 등장하거나 배열의 마지막 인덱스에 도착하면 총 몇 개의 Pn이 만들어지는 지...","categories": ["algorithm"],
        "tags": ["string","algorithm"],
        "url": "/algorithm/acmicpc-5525/",
        "teaser": null
      },{
        "title": "[운영체제/OS]Operating System Concepts - 공룡책 개념 정리(2)",
        "excerpt":"이번 글부터는 번역이 잘 안되는 부분만 참고하기 위해 영어로 작성하겠습니다. Operating-System Structures 1. Operating-System Services An operating system provides an environment for the execution of programs. User interface 대부분의 운영체제는 UI를 갖고 있다. 인터페이스는 I/O를 지시하고 메뉴에서 선택하고 텍스트를 입력하는 등의 역할을 하는 시스템이다. 인터페이스는 다양한 형태를 가질 수 있으며...","categories": ["cs"],
        "tags": ["cs","os"],
        "url": "/cs/dinosaur-os-2/",
        "teaser": null
      },{
        "title": "[백준/python]1254번 팰린드롬 만들기 - string",
        "excerpt":"python 문자열 문자열 거꾸로 출력하기 반복문을 통해 새로운 문자열을 만드는 방법 외에 ‘pythonic’한 방법을 알아보자. .reverse() 함수 이용하기 - 문자열을 리스트로 변환하고 reverse함수를 이용하여 순서를 뒤집는 방법 s[::-1] - 문자열 s를 [::-1]이라는 인덱스를 이용하여 호출하면 거꾸로 뒤집힌 문자열이 반환된다. 1254번 풀이 처음 생각한 풀이 주어진 문자열에 팰린드롬이 있더라도 마지막 문자가...","categories": ["algorithm"],
        "tags": ["algorithm","string"],
        "url": "/algorithm/acmicpc-1254/",
        "teaser": null
      },{
        "title": "[백준/python]4358번 생태학 - string",
        "excerpt":"python 포맷팅 - 소수점 자릿수 표현 python의 포맷팅 방법에는 3가지가 있다. %, format, f-string 중에서 f-string을 이용하는 방법에 대하여 알아보자. f-string python 3.6부터 사용할 수 있는 문법이다. 문자열 앞에 f를 붙이고 중괄호 안에 변수를 넣으면 된다. 을 사용해서 표현할 자릿수를 지정해준다. a,b= 1,3 print(f'{a}+{b}={a*b}') print(f'{a}/{b}={a/b:.3f}' # 소수점 3자리까지 표현 4358번...","categories": ["algorithm"],
        "tags": ["algorithm","string"],
        "url": "/algorithm/acmicpc-4358/",
        "teaser": null
      },{
        "title": "[백준/python]5430번 AC - string",
        "excerpt":"풀이 함수에서 R이 등장할 때마다 뒤집고 D가 등장하면 삭제하게 된다면 최악의 경우 계속해서 뒤집기만 할 수 있기 때문에 이 방법은 아니라고 생각했다. 파이썬의 reverse 메서드의 시간 복잡도는 O(N)이다. 시간 효율에 중점을 두고 문제를 풀었다. D는 언제나 배열의 첫 번째 수를 버리므로 방향을 알려주는 변수를 선언하고 R이 등장하면 -1을 곱해서 지워야...","categories": ["algorithm"],
        "tags": ["string","algorithm"],
        "url": "/algorithm/acmicpc-5430/",
        "teaser": null
      },{
        "title": "[백준/python]냅색 문제 2차원 배열 및 1차원 배열 정리, 1106번 호텔 - knapsack",
        "excerpt":"냅색 분류인 것을 보고 풀었기 때문에 일단 2차원 배열을 만들어야겠다는 생각을 했다. 풀긴 했지만 코드가 깔끔하지도 않고 시간도 꽤나 오래 걸렸다. 1106번 문제를 풀기 전에 1차원 배열을 이용해 평범한 배낭 문제를 풀이하는 방법을 알아보자. 일반적인 냅색 풀이(2차원/1차원 배열 이용) 평범한 배낭 문제를 기준으로 설명하겠습니다. 2차원 배열에서 dp[i][j]에 i번째 보석까지 j...","categories": ["algorithm"],
        "tags": ["knapsack","dp","algorithm"],
        "url": "/algorithm/acmicpc-1106/",
        "teaser": null
      },{
        "title": "[백준/python] 14003번 가장 긴 증가하는 부분 수열 5 - dp",
        "excerpt":"가장 긴 증가하는 부분 수열 문제 중 가장 마지막 문제다. 주어진 수열의 길이가 작다면 dp를 이용하여 O(n^2)의 시간 복잡도로 해결하는 것이 일반적인 방법이다. 그러나 백준 12738번, 가장 긴 증가하는 부분 수열 3과 해당 문제의 경우 수열의 길이가 1,000,000이다. dp와 함께 이분 탐색을 활용하여 시간 복잡도를 줄일 수 있다. O(n log...","categories": ["algorithm"],
        "tags": ["binarySearch","dp","algorithm"],
        "url": "/algorithm/acmicpc-14003/",
        "teaser": null
      }]
