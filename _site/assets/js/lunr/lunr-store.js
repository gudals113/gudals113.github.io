var store = [{
        "title": "안녕하세요 개구리입니다.",
        "excerpt":"안녕하세요. 노션에 정리해가며 공부를 했었는데 올해부터는 블로그에 정리를 하려고 합니다. 글이 많아지면 방문하시는 분들도 생기겠죠. 잘 부탁드립니다. 궁금하신 점이나 제 글에 오류가 있다면 알려주세요.  ","categories": ["life"],
        "tags": ["life"],
        "url": "/life/introduce/",
        "teaser": null
      },{
        "title": "[백준]2178번 미로탐색",
        "excerpt":"prev에 경로를 저장하고 BFS를 돌렸다. BFS가 끝나면 prev를 거꾸로 돌아가며 지나온 개수를 구한다. 돌아가는 과정이 비효율적이다. from collections import deque N, M = map(int, input().split()) miro=[[0 for _ in range(M) ] for _ in range(N)] for i in range(N): line=input() for j in range(M): miro[i][j]=int(line[j]) visited=[[0 for _ in range(M)...","categories": ["algorithm"],
        "tags": ["algorithm","bfs","graph","python"],
        "url": "/algorithm/acmicpc-2178/",
        "teaser": null
      },{
        "title": "[백준]2098번 외판원 순회",
        "excerpt":"알고리즘분석 시간에 배웠던 NP 중 하나인 TSP 문제다. N이 작은 경우 DP와 비트마스킹을 통해 풀 수 있다. import sys limit_number = 150000 sys.setrecursionlimit(limit_number) N=int(input()) #이동 가능한 도시 경로 작성 path=[[0 for _ in range(N)] for _ in range(N)] for i in range(N): line= list( map ( int, input().split() ) )...","categories": ["algorithm"],
        "tags": ["algorithm","bitmask","dp","python"],
        "url": "/algorithm/acmicpc-2098/",
        "teaser": null
      },{
        "title": "[백준]2133번 타일 채우기",
        "excerpt":"매 열마다 3개의 타일이 있다.채워진 타일을 1, 채워지지 않은 타일을 0으로 표시한다. ex)맨 위 타일 하나만 채워진 경우 100. 비트마스크는 알고리즘의 한 종류가 아닌 일종의 기법이라는 것을 해당 문제에서 알 수 있다. 점화식을 잘 표현하면 굳이 비트표현이 아닌 정수표현으로 풀어도 상관없다. 다만 0과 1의 직관적인 표현이 문제 풀이에 조금이나마 도움이...","categories": ["algorithm"],
        "tags": ["algorithm","python","bitmask","dp"],
        "url": "/algorithm/acmicpc-2133/",
        "teaser": null
      }]
