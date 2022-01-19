var store = [{
        "title": "안녕하세요 개구리입니다.",
        "excerpt":"안녕하세요. 노션에 정리해가며 공부를 했었는데 올해부터는 블로그에 정리를 하려고 합니다. 글이 많아지면 방문하시는 분들도 생기겠죠. 잘 부탁드립니다. 궁금하신 점이나 제 글에 오류가 있다면 알려주세요.  ","categories": ["life"],
        "tags": ["life"],
        "url": "/life/introduce/",
        "teaser": null
      },{
        "title": "[백준]2178번 미로탐색 - bfs",
        "excerpt":"prev에 경로를 저장하고 BFS를 돌렸다. BFS가 끝나면 prev를 거꾸로 돌아가며 지나온 개수를 구한다. 돌아가는 과정이 비효율적이다. from collections import deque N, M = map(int, input().split()) miro=[[0 for _ in range(M) ] for _ in range(N)] for i in range(N): line=input() for j in range(M): miro[i][j]=int(line[j]) visited=[[0 for _ in range(M)...","categories": ["algorithm"],
        "tags": ["algorithm","bfs","graph","python"],
        "url": "/algorithm/acmicpc-2178/",
        "teaser": null
      },{
        "title": "[백준]2098번 외판원 순회 - bitmasking",
        "excerpt":"알고리즘분석 시간에 배웠던 NP 중 하나인 TSP 문제다. N이 작은 경우 DP와 비트마스킹을 통해 풀 수 있다. import sys limit_number = 150000 sys.setrecursionlimit(limit_number) N=int(input()) #이동 가능한 도시 경로 작성 path=[[0 for _ in range(N)] for _ in range(N)] for i in range(N): line= list( map ( int, input().split() ) )...","categories": ["algorithm"],
        "tags": ["algorithm","bitmask","dp","python"],
        "url": "/algorithm/acmicpc-2098/",
        "teaser": null
      },{
        "title": "[백준]2133번 타일 채우기 - bitmasking",
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
        "excerpt":"얼마전 유튜브를 보는데 홍준표 국민의힘 대선 경선 후보가 SNL에 나와서 인기를 얻었다. 조회수 200만이 넘었다. SNL에서도 냄새를 맡았는지 정치인들이 계속해서 출연하고 있다. 이번에는 이준석 국민의힘 당대표가 나왔다. 비트코인 얘기를 하는데 자동투자로 선거 세네 번 치를 비용을 얻었다고 말했다. https://www.youtube.com/watch?v=0dA1Pldtbxw 자, 드가자. python 모듈인 pyupbit를 사용하기 전 우선 API를 익혀보는 글이다....","categories": ["dev"],
        "tags": ["python","api"],
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
      }]
