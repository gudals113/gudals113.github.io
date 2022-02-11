---
title: "[운영체제/OS]Operating System Concepts - 공룡책 개념 정리(2)"
excerpt: Chapter2. 운영체제 구조
tags:
- cs
- os
categories:
- cs
toc: true
toc_sticky: true
---

> 이번 글부터는 번역이 잘 안되는 부분만 참고하기 위해 영어로 작성하겠습니다.

# Operating-System Structures

## 1. Operating-System Services

An operating system provides an environment for the execution of programs.

1. User interface 
    - 대부분의 운영체제는 UI를 갖고 있다. 인터페이스는 I/O를 지시하고 메뉴에서 선택하고 텍스트를 입력하는 등의 역할을 하는 시스템이다.
    - 인터페이스는 다양한 형태를 가질 수 있으며 일반적으로 GUI가 사용된다. 키보드와 마우스, 터치스크린을 통해 컴퓨터에 명령을 내린다.
    - 또 다른 인터페이스에는 command-line interface(CLI)가 있다. 사용자가 텍스트를 통해 명령을 내리는 방법이다.
2. Program execution 
    - 시스템은 프로그램을 메모리에 로드하고 실행 할 수 있어야 한다. 프로그램이 정상적으로 혹은 비정상적으로(오류 발생 시) 종료될 수 있어야한다.
3. I/O operation 
    - 프로그램이 입출력을 요구할 때 사용자는 효율성과 보안적인 문제로 인해 직접적으로 입출력 장치를 제어할 수 없다. 이 때 운영체제는 입출력을 수행할 수 있는 수단을 제공해야 한다.
4. File-system manipulation 
    - 프로그램은 파일과 디렉토리를을 읽고 쓰고 생성하고 삭제할 필요가 있다. 파일을 검색하고 이름별로 정리할 수 있어야한다. 또한 운영체제는 파일의 소유권에 따라 접근을 허용하거나 거부할 수 있어야한다.
5. Communications 
    - 서로 다른 프로세스 간 정보를 교환해야 하는 상황이 있다. 이러한 통신은 같은 컴퓨터의 프로세스들 혹은 네트워크에 의해 연결된 다른 컴퓨터의 프로세스들 사이에서 발생할 수도 있다.
    - 통신은 둘 이상의 프로세스가 공유하는 메모리 혹은 메세지 패싱을 통해 구현할 수 있다.
6. Error detection 
    - 운영체제는 지속적으로 오류를 감지하고 수정해야한다.

**사용자를 위한 기능뿐만 아니라 시스템 자체의 효율적인 작동을 보장하기 위한 기능들도 존재한다.** 

1. Resource allocation 
    - 여러 프로세스가 동시에 실행되는 경우각 프로세스에 자원(리소스)을 할당해야 한다. 운영체제는 CPU cycle, 메인 메모리, 파일 저장소와 같은 자원을 관리한다.
2. Logging 
    - 어떤 프로그램이 얼마나 많은 양의 자원을 사용하는지, 어떠한 종류의 자원을 사용하는 지 추적하기 위해 운영체제는 기록한다.
3. Protection and security 
    - 사용자는 정보의 사용을 통제할 수도 있다. 프로세스가 다른 프로세스 혹은 운영체제를 방해할 수 없어야한다.
    - 외부인으로부터 접근을 제한하는 보안도 중요하다.

## 2. System Calls

System calls provide an interface to the services made available by an operating system. These calls are generally available as functions written in C and C++, although certain low-level tasks (for example, tasks where hardware must be accessed directly) may have to be written using assembly-language instructions.

일반적으로 프로그램의 실행 시에 파일을 읽고 쓰는 등의 커널 모드 범주의 작업을 수행해야 한다. 운영체제는 시스템 콜을 통해 커널 모드에 작업을 요청하고 반환되는 결과를 프로그램에 다시 전달해준다. 

### Application Programming Interface

간단한 프로그램을 실행하기 위해서도 시스템 호출이 많이 사용된다. 개발자들은 이러한 세부적인 시스템 호출을 모두 신경쓸 수 없기 때문에 API에 따라 프로그램을 설계하게 된다. **API는 개발자들을 대신하여 실제 시스템 호출을 실행한다.** 예를 들어, 윈도우 함수 CreateProcess()는 실제로 윈도우 커널에서 NTCreateProcess() 시스템 호출을 실행한다.

The RTE provides a system-call interface that serves as the link to system calls made available by the operating system. The system-call interface intercepts function calls in the API and invokes the necessary system calls within the operating system.

시스템 호출을 처리할 때 또 다른 중요한 요소는 실시간 환경(RTE)이다. RTE는 시스템 호출에 대한 링크 역할을 하는 시스템 호출 인터페이스를 제공한다. 시스템 호출 인터페이스는 API에서 함수 호출을 가로채고 운영체제 내에서 필요한 시스템 호출을 실행한다. 

![Untitled](/assets/images/dinosaur-os/2-1.png)

---

**시스템 호출을 위해서는 운영체제에 매개 변수를 전달해야 한다.** 일반적으로 레지스터 내에 전달하는 방법이 있다. 레지스터보다 매개 변수가 많은 경우에는 블록 혹은 테이블의 주소가 레지스터에 담겨서 전달된다. 리눅스의 경우 이러한 방식을 조합하여 파라미터가 5개 이하인 경우 레지스터를 5개 이상인 경우 블록 방식을 사용한다. 일부 운영 체제에서는 스택을 이용한 방법을 사용하기도 한다. 프로그램에 의해 스택에 push되고 운영체제에 의해 스택에서 pop된다.

### Types of System Calls

시스템 호출은 크게 6가지 범주로 분류할 수 있다. 

1. 프로세스 제어 (Process Control) 
    - 프로그램을 정상적으로(end()) 혹은 비정상적으로(abort()) 실행을 중지할 수 있어야한다. 비정상적으로 종료하는 경우 메모리 덤프가 발생하기도 한다.
    - 하나의 프로그램을 실행하고 있는 프로세스가 다른 프로그램을 로드(load())하고 실행(execute())하기를 원할 수도 있다.
    - 새로운 프로세스를 생성하고(create process()) 속성을 확인하고 재설정할 수 있다. (get/set process attributes()) 새로운 프로세스가 생성되면 실행이 완료될 때까지 기다리거나(wait time()) 특정 이벤트 발생 전까지 기다려야할 수도 있다(wait event()).
    - 두 개 이상의 프로세스가 데이터를 공유할 때 운영체제는 데이터의 무결성(integrity of data)를 보장하기 위해 데이터를 잠글 수 있다(lock()). 다른 프로세스는 잠금이 풀릴 때까지(release lock()) 데이터에 접근할 수 없다.
2. 파일 관리 (File Management) 
    - 파일을 생성(create())하고 삭제(delete())할 수 있어야 한다.
    - 파일이 생성되면 파일을 열어(open()) 읽기(read()), 쓰기(write()), 혹은 위치 변경(reposition())을 할 수 있어야 한다. 더 이상 사용하지 않음을 나타내기 위해 파일을 닫을(close()) 수 있어야 한다.
    - 파일 시스템에 파일을 구성하기 위해 디렉토리 구조가 필요하다. 이를 위해서 파일의 속성을 불러오고 설정할 수 있어야한다. (get/set file attributes())
3. 장치 관리 (Device Management) 
    - 프로세스를 실행하기 위해 메인 메모리, 디스크 드라이브, 파일에 대한 액세 등의 여러 자원(resources)이 필요하다.
    - 운영체제에 의해 제어되는 다양한 자원들은 장치라고 생각할 수 있다. 물리적 장치인 디스크 드라이브와 추상적이고 가상적인 장치인 파일이 있다.
    - 여러 사용자가 있는 시스템은 장치를 독점적으로 사용하기 위해 우선 요청(request())을 해야한다.
    - 장치를 모두 사용하고 난 뒤 우리는 방출(release())해야 한다. 이러한 동작은 파일 관리에서 open() 및 close() 와 유사하다.
4. 정보 유지 (Information Maintenance) 
    - 시스템 호출은 사용자와 운영체제 간에 정보를 전송하기 위한 목적으로 존재한다. 시간 혹은 날짜를 반환한다.
    - 운영체제의 버전과 사용 가능한 메모리 디스크 공간 등과 같은 시스템에 대한 정보를 반환한다.
    - 메모리 덤프(dump())를 통해 디버깅을 하는 데 도움을 준다.
    - 프로세스에 대한 모든 정보를 가져오고 설정할 수 있다.
5. 통신 (Communication)
    - 프로세스 간 통신에는 메세지 전달 모델(message passing model)과 공유 메모리 모델(shared-memory model)이 있다.
    - 대부분의 시스템은 두 가지 모델 모두 구현할 수 있다.
    - 메세지 전달 모델은 구현이 쉬우며 적은 양의 데이터를 교환할 때 유용하다.
    - 공유 메모리 모델은 컴퓨터 내에서 발생할 때 메모리 전송 속도로 실행 할 수 있기 때문에 최대 속도와 편의성에서 우수하다.
6. 보호 (Protection) 
    - 컴퓨터 시스템이 제공하는 자원에 대한 액세스를 제어하는 장치가 필요하다.

## 3. System Services

논리적 컴퓨터 계층(logical computer hierarchy)에서 가장 낮은 레벨에는 하드웨어가 있다. 그 다음은 운영체제, 그 다음은 시스템 서비스, 마지막으로 애플리케이션 프로그램이 위치한다. 시스템 유틸리티라고도 불리는 시스템 서비스는 프로그램 개발과 실행을 위해 편리한 환경을 제공한다. 다음과 같은 범주로 분류할 수 있다.

1. 파일 관리 (File management) 
    - 파일 및 디렉토리 생성, 삭제, 복사, 이름 변경, 인쇄, 열거(list), 접근, 조작한다.
2. 상태 정보 (Status information)
    - 일부 프로그램들은 단순히 시스템에 날짜, 시간, 메모리 및 디스크 정보 등을 요구한다.
    - 더 복잡한 상세한 성능과 로깅 및 디버깅 정보를 제공할 수도 있다.
3. 파일 수정 (File modification)
    - 텍스트 편집기를 사용하여 저장 장치의 파일을 생성하고 수정할 수 있다.
4. 프로그래밍 언어 지원 (Programming-language support) 
    - 컴파일러, 어셈블리어, 디버거 및 인터프리터(interpreters)가 제공된다.
5. 프로그램 로드 및 실행 (Program loading and execution)
    - 프로그램이 어셈블 혹은 컴파일 된 후 실행하기 전에 메모리에 로드되어야 한다.
6. 통신 (Communication)
    - 프로세스, 사용자 및 컴퓨터 시스템 간에 가상 연결을 생성한다.
7. 백그라운드 서비스 (Background services)
    - 모든 범용 시스템(general-purpose)은 부팅 시 특정 시스템 프로그램 프로세스를 시작한다.
    - 이러한 프로세스들 중 일부는 작업을 완료한 후 종료되고 일부는 시스템이 중단될 때까지 실행한다. 지속적으로 실행되는 프로세르를 하위 시스템(subsystems) 혹은 데몬(daemons)이라고 한다.
    - 네트워크 연결을 수신하거나 프로세스 스케줄러와 같은 데몬들이 존재한다.

## 4. Linkers and Loaders

일반적으로 프로그램은 이진 파일 형태로 디스크에 상주한다. (Usually, a program resides on disk as a binary executable file— for example, a.out or prog.exe.) CPU에서 프로그램이 실행되기 위해서 메모리로 이동하여 프로세스 형태로 배치되어야 한다.  아래의 그림은 프로그램을 컴파일하는 것부터 CPU 코어에서 실행할 수 있는 형태로 메모리에 배치하는 단계까지를 설명하고 있다. 

![Untitled](/assets/images/dinosaur-os/2-2.png)

1. 소스 파일은 컴파일러에 의해 물리적인 메모리 장소에 로드될 수 있는 **재배치 가능한 오브젝트 파일**로 컴파일 된다. (relocatable object fille).
2. **링커(Linker)**는 재배치 가능한 오브젝트 파일들을 하나의 **실행 가능한** 이진 실행 파일(single binary executable file)로 결합한다. 
3. 로더(Loader)는 이진 실행 파일을 메모리에 로드한다. 메모리에 로드되면 CPU 코어에서 파일을 실행 할 수 있게 된다. 

An activity associated with linking and loading is relocation, which assigns final addresses to the program parts and adjusts code and data in the program to match those addresses so that, for example, the code can call library functions and access its variables as it executes.

링크와 로딩은 프로그램에게 최종적인 주소를 할당하고 코드가 라이브러리 함수를 호출하고 실행될 때 변수에 접근 할 수 있도록 하는 재배치이다.

When a program name is entered on the command line on UNIX systems— for example, ./main— the shell first creates a new process to run the program using the fork() system call. The shell then invokes the loader with the exec() system call, passing exec() the name of the executable file.

## 5. Why Applications Are Operating-System Specific

일반적으로 한 운영체제에서 컴파일된 응용 프로그램은(applications) 다른 운영체제에서는 실행할 수 없다. 각 운영체제는 고유한 시스템 호출을 제공한다. 시스템 호출은 운영체제에서 응용 프로그램을 사용할 수 있도록 하기 위해 제공하는 서비스의 집합이다. 하지만 여러 운영체제에서 동일한 응용 프로그램을 사용할 수 있는 방법이 있다.  

1. 여러 운영체제에서 사용할 수 있는 인터프리터(interpreter)가 있는 인터프리터 언어(ex. Python, Ruby)를 이용하여 응용 프로그램을 작성한다.
2. 가상 머신을 포함하고 있는 언어로 응용 프로그램을 작성한다. 예를 들어 자바의 경우 로더, 바이트 코드 검증기(verifier) 및 자바 응용 프로그램을 자바 가상 머신에 로드하는 여러 요소들을 가지고 있는 RTE를 갖고 있다.
3. 개발자는 컴파일러가 이진 파일을 생성하는 표준 언어 혹은 API를 사용할 수 있다. 

## 6. Operating System Structures

현대의 운영체제는 매우 복잡하고 크기 때문에 세심하게 설계 되어야 한다. 일반적으로 하나의 시스템이 아닌 작은 구성 요소 혹은 모듈로 분할할 수 있다. 각각의 모듈은 전체 시스템의 일부분으로 세심하게 정의된 인터페이스와 기능을 갖고 있다. 

### 6.1 모놀리식 구조 (Monolithic Strcuture)

가장 간단한 구조는 구조가 없는 것이다. 커널의 모든 기능을 단일 주소 공간(single address space)에서 실행되는 단일 정적 이진 파일(single static binary file)에 넣는 것이 모놀리식 구조이다. 초기 UNIX는 모놀리식 구조를 갖고 있다.

- 커널은 시스템 콜을 통해 파일 시스템, CPU 스케줄링, 메모리 관리 등의 기능을 제공한다. 하나의 주소 공간에 결합하는 기에는 많은 기능들이다.
- 모놀리식 구조는 단순하지만 구현 및 확장에 어려움이 있다.
- 모놀리식 구조의 시스템 콜은 오버헤드가 적고 커널 내에서 통신 속도가 빠르다.

### 6.2 계층적 접근 (Layered Approach)

모놀리식 구조의 경우 시스템의 한 부분을 변경하면 다른 부분에 광범위한 영향을 줄 수 있다. 이를 밀접하게 결합된(tightly coupled)시스템이라고 부른다. 이에 대한 대안으로 특정하고 한정적인 기능을 가진 개별적인 요소로 구성된 느슨하게 결합된(loosely coupled) 시스템이 있다. 이러한 모듈 방식(modular approach)의 장점은 시스템 구현자가 내부 작동을 더 자유롭게 생성하고 수정할 수 있다는 것이다. 계층적 접근 방식은 모듈 방식 중 하나이다.

- 계층적 접근 방식에서 운영체제는 여러 개의 층(layers, levels)으로 나뉜다. 최하위 층은 하드웨어, 최상위  층은 사용자 인터페이스(User Interface)이다.
- 운영체제 층은 데이터와 데이터를 조작할 수 있는 연산들로 이루어진 추상적 객체의 구현이다. 운영체제 층은 상위 층에서 호출할 수 있는 기능들(set of functions)과 자료구조로 구성된다. 운영체제 층은 다시 하위층에 대한 연산을 호출할 수 있다. (An operating-system layer is an implementation of an abstract object made up of data and the operations that can manipulate those data. A typical operating-system layer—say, layer M—consists of data structures and a set of functions that can be invoked by higher-level layers. Layer M, in turn, can invoke perations on lower-level layers.)
- 계층적 접근 방식은 구현과 디버깅이 단순하다. 각각의 층들은 자신의 하위층의 서비스와 기능들을 사용할 수 있다. 예를 들어 첫 번째 하드웨어 층은 나머시 시스템에 신경을 쓰지 않고 디버깅할 수 있다. 이후에 두 번 째 층을 디버깅할 때는 첫번 째 층이 정확하게 동작한다고 가정할 수 있다.
- 각 층은 하위층에 의해 제공된 연산(operations)들만 사용하여 구현된다. 이러한 연산들이 어떻게 구현되는 지 알 필요가 없으며 무엇을 하는 지만 알면 된다. 즉 각 층은 특정 자료 구조, 연산, 하드웨어의 존재를 상위층에 숨기고 있다.

### 6.3 마이크로커널 (MicroKernels)

초기 UNIX에 비해 커널이 커진 UNIX의 관리가 힘들어졌다. 이에 따라 마이크로커널 방식을 사용하여 커널을 모듈화한 Match라고 불리는 운영체제가 개발되었다.

마이크로커널은 중요하지 않은 구성 요소들을 커널로부터 제거하고 사용자 단계(user-level)의 프로그램으로 구현하여 별도의 작은 커널에 구성하는 방식이다. 마이크로커널은 최소한의 프로세스와 메모리 관리를 제공한다.

![Untitled](/assets/images/dinosaur-os/2-3.png)

- 마이크로커널의 주요 기능은 클라이언트 프로그램과 사용자 공간(user spcae)에서 실행되는 다양한 서비스 간에 통신을 제공하는 것이다. ex) 클라이언트 프로그램이 파일에 접근하려면 파일 서버와 마이크로커널을 통하여 간접적으로 통신해야 한다.
- 마이크로커널 방식의 장점은 운영체제의 확장이 쉽다는 것이다. 새로운 서비스는 사용자 공간(user space)에 추가되기 때문에 커널을 수정할 필요가 없다. 마이크로커널은 이름에서 알 수 있듯이 커널이 변경되어야 할 때는 보통 변경 대상이 작다.
- 서비스의 대부분이 커널이 아닌 사용자 프로세스로 수행되기 때문에 높은 보안성과 신뢰성을 제공한다. 서비스가 잘못되더라도 운영체제에 다른 부분은 영향을 주지 않는다.
- macOS, iOS, watchOS 등 Apple의 운영체제들은 전부 마이크로커널인 Darwin을 기반으로 하고 있다.

### 6.4 모듈 (Modules)

적재가능 커널 모듈(loadable kernel modules, LKM)은 운영체제를 설계하는 가장 최신 기술이다. 핵심적인 구성요(core components)를 가지고 있는 커널은 부가적인 서비스들을 모듈을 통해 연결(link)할 수 있다.

- 커널은 핵심적인 서비스를 제공하고 커널이 실행되는 동안 다른 서비스들이 동적으로 구현된다. 새로운 기능을 커널에 직접 구현하게 된다면 변경 사항이 생길 때마다 커널을 다시 컴파일해야 한다.
- 커널의 각 부분이 정의(defined)되고 보호받는 인터페이스를 가진 점에서 **계층 구조(layered system)과 유사**하다. 그러나 모듈 방식은 다른 모듈을 호출할 수 있다는 점에서 더 유연하다(flexible).
- 주 모듈(primary module)은 핵심 기능과 다른 모듈을 불러 오거나 통신(communicate)하기 위한 정보만을 갖고 있다는 점에서 **마이크로커널 방식과 유사**하다. 그러나 통신하기 위해 메세지 전달(message passing)을 할 필요가 없다는 점에서 더욱 효율적이다.

### 6.5 하이브리드 시스템 (Hybrid Systems)

**사실상 엄격하게 하나의 구조를 채택하는 운영체제는 없다. 다양한 구조를 결합하여 성능, 보안, 효율성의 문제를 해결한다.** macOS, android 등 자세한 예시는 생략한다.

## 7. Building and Booting an Operating System

### 7.1 운영체제 생성

운영체제는 일반적으로 컴퓨터에 미리 설치되어 있다. 운영체제가 없는 경우 처음부터 생성할 수 있다.

1. 운영체제 소스 코드를 작성하거나 작성된 소스 코드를 구한다.
2. 운영체제가 실행될 시스템에 알맞는 운영체제를 구성한다(configure).
3. 운영체제를 컴파일 한다.
4. 운영체제를 설치한다.
5. 컴퓨터를 부팅한다.

### 7.2 시스템 부트

커널을 적재(load)하여 컴퓨터를 시작하는 과정을 시스템 부팅이라고 한다. 부팅 과정을 간단히 정리하면 다음과 같다.

1. 부트스트랩 프로그램(bootstrap program) 혹은 부트 로더(boot loader)라고 불리는 작은 코드가 커널의 위치를 찾는다(locates the kernel).
2. 커널이 메모리에 적재(loaded)되고 시작된다.
3. 커널이 하드웨어를 초기화(initialize)한다.
4. 루트 시스템 파일이 마운트된다.

**일부 컴퓨터 시스템은 다단계 부트 프로세스(multiprocess를 사용한다.**

- 컴퓨터를 켜면 BIOS라고 불리는 비휘발성 펌웨어에 위치한 작은 부트 로더가 실행된다. (boot loader located in nonvolatile firmware known as BIOS)
- BIOS는 두번째 부트 로더를  적재하는 작업만 수행한다. 두번째 부트 로더(second boot loader)는 부트 블록(boot block)이라고 불리는 디스크 장소(fixed disk location called boot block)에 위치하고 있다.
- 부트 로더는 간단한 코드이며, 디스크의 주소(the address on disk)와 나머지 부트 스트랩 프로그램 나머지의 길이(the length of the remainder of the bootstrap program)만 알고 있다.
- BIOS 혹은 UEFI(최신 컴퓨터 시스템에서 사용하는 방법)에 의해 부트스트랩 프로그램이 부팅되면 부트스트랩 프로그램은 커널 프로그램이 포함된 파일을 메모리에 적재하고, 장치의 상태를 진단한다(runs diagnostics to determine the state of the machine).
- 진단에 통과하게 되면 CPU 레지스터에서 장치 컨트롤러 및 메인 메모리의 내용까지 시스템의 모든 측면을 초기화(initialize) 할 수 있다.
- 운영체제가 시작되고 루트 파일 시스템을 마운트 한다. **이 시점에서 시스템은 실행 중(running)이라고 할 수 있다.**

> 출처 - <Operating System Concepts> 10th ed. by A. Silberschatz

#### 공룡책 개념정리 

[공룡책 개념정리(1) - Ch.1 서론](https://gudals113.github.io/cs/dinosaur-os-1/)

