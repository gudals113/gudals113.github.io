---
title: "[운영체제/OS]Operating System Concepts - 공룡책 개념 정리(1)"
excerpt: Chapter1. 서론
tags:
- cs
- os
categories:
- cs
toc: true
toc_sticky: false
---

#### **공룡책 개념정리 **

[공룡책 개념정리(2) - Ch.2 운영체제 구조](https://gudals113.github.io/cs/dinosaur-os-2/)

## A stored-program computer

stored program computer - 폰 노이만이 개발한 memory에 progrmas 저장하는 형태의 컴퓨터

program - set of instructions

# Operating System

## Operating System

is a software that manages a computer’s hardware. 
provides a basis for application progrmas
acts as an intermediary(중개인) between the computer user and the computer hardware

## What Operating Systems Do

coputer system can be devided roughly into four components - hardware, operating system, application programs, user

hardware - CPU, memory, I/O devices

application programs - such as word processors, spreadsheets, compilers, web browers 

OS - controls the hardware and coordinates its use among the various application programs for
the various users. 

**사용자를 위해 하드웨어를 제어하고 하드웨어의 사용과 어플리케이션 프로그램들의 관계를 조정한다.**

Operating System은 두 가지 관점에서 볼 수 있다.

### 1. User View

Many computer users sit with a laptop or in front of a PC consisting of a monitor, keyboard, and mouse. Such a system is designed for one user to monopolize its resources. the operating system is designed mostly for **ease of use**, with some attention paid to performance and security and none paid to r**esource utilization**. (single-user system에서) 

**모니터, 키보드와 같은 자원은 한 명의 사용자가 독점하도록 설계 되었다. 이 때 사용자가 컴퓨터를 사용하는 동안 자원이 어떻게 활용되는 지 신경쓰지 않고 쉽게 사용하도록 도와준다.**

![Untitled](/assets/images/dinosaur-os/1.png)

### 2. System View

From the computer’s point of view, the operating system is the program most
intimately involved with the hardware. In this context, we can view an operating system as a **resource allocator**. A computer system has many resources that may be required to solve a problem: CPU time, memory space, storage space, I/O devices, and so on.

**컴퓨터 시스템은 문제 해결을 요구하는 많은 자원을 갖고 있다. CPU 시간, 메모리 공간, 저장 공간, 입출력 장치 등의 자원을 관리하는 역할을 한다.**

## Computer-System Organization

A modern general-purpose computer system consists of one or more CPUs and a number of device controllers connected through a common bus that provides access between components and shared memory. 

**현대의 컴퓨터는 여러 CPU들과 많은 controllers들이 bus로 연결되어 동일한 메모리를 공유하고 있다. controller의 종류에 따라서 하나 혹은 그 이상의 장치들이 부착될 수 있다.** 

A device controller maintains some local buffer storage and a set of special-purpose registers. The device controller is responsible for moving the data between the peripheral devices that it controls and its local buffer storage.

**장치 컨트롤러는 해당 컨트롤러가 제어하고 있는 주변 장치들과 그것의 local buffer storage 간의 데이터 이동을 담당한다.** 

Typically, operating systems have a device driver for each device controller. This device driver understands the device controller and provides the rest of the operating system with a uniform interface to the device.

**특히 OS의 경우 각각의 장치 컨트롤러에 대한 장치 드라이버를 갖고 있다.** 

![Untitled](/assets/images/dinosaur-os/2.png)

**CPU와 장치 컨트롤러는 메모리 사이클을 위해 경쟁하며 병렬적으로 실행할 수 있다. 세가지 측면에서 알아보자.**

### Interrupts

The controller starts the transfer of data from the device to its local buffer. Once the transfer of data is complete, the device controller informs the device driver that it has finished its operation. The device driver then gives control to other parts of the operating system, possibly returning the data or a pointer to the data if the operation was a read. For other operations, the device driver returns status information such as “write completed successfully” or “device busy”.

**일반적인 컴퓨터가 I/O를 수행하기 위해서 장치 드라이버가 장치 컨트롤러에 있는 적절한 레지스터를 불러온다(load). 장치 컨트롤러가 적절한 레지스터를 수행하는 것이다. interrupt를 통해 컨트롤러가 장치 드라이버에게 컨트롤러의 operation이 끝났음을 알린다.**

![Untitled](/assets/images/dinosaur-os/3.png)

Hardware may trigger an interrupt at any time by sending a signal to the CPU, usually by way of the system bus. Interrupts are used for many other purposes as well and are a key part of how operating systems and hardware interact. When the CPU is interrupted, it stops what it is doing and immediately transfers execution to a fixed location. The interrupt service routine executes; on completion, the CPU resumes the interrupted computation.

**interrupt는 OS가 하드웨어와 상호 작용하는 중요한 방법 중 하나이다. 하드웨어는 언제든지 시스템 버스를 통해 interrupt를 발생시킬 수 있다. CPU가 interrupt되면 작업이 중단되고 interrupt를 발생시킨 서비스 루틴이 위치한 시작 주소로 가서 루틴이 실행된다. 해당 서비스 루틴이 완료되면 CPU가 다시 서비스 루틴을 재개한다.(원래 propgram counter로 돌아간다.)**

### Storage Structure

The CPU can load instructions only from memory, so any programs must first be loaded into memory to run. All forms of memory provide an array of bytes. Each byte has its own address. Interaction is achieved through a sequence of load or store instructions to specific memory addresses. The load instruction moves a byte or word from main memory to an internal register within the CPU, whereas the store instruction moves the content of a register to main memory. Aside from explicit loads and stores, the CPU automatically loads instructions from main memory for execution from the location stored in the program counter.

**CPU는 메인 메모리(RAM)에서만 명령을 로드할 수 있다. 프로그램을 실행하기 위해서는 우선 메모리에 프로그램을 로드해야한다. 이후에 로드 명령을 통해 메인 메모리에서 CPU 내의 레지스터로 바이트나 WORD 정보를 이동시키고 저장 명령을 통해 레지스터의 내용을 다시 메인 메모리로 이동시킨다.** 

![Untitled](/assets/images/dinosaur-os/4.png)

**프로그램을 메인 메모리에 영구적으로 저장시킬 수는 없을까? 이동시키며 실행하는 이유는 두 가지가 있다.** 

**1. 메인 메모리의 크기는 매우 작아서 모든 프로그램과 데이터를 영구적으로 저장할 수 없다.** 

**2. 메인 메모리는 휘발성이기 때문에 전원이 공급되지 않으면 내용이 손실된다.** 

**그러므로 Secondary 저장소가 필요하다.** 

The wide variety of storage systems can be organized in a hierarchy (Figure 1.6) according to storage capacity and access time. As a general rule, there is a trade-off between size and speed, with smaller and faster memory closer to the CPU. As shown in the figure, in addition to differing in speed and capacity, the various storage systems are either volatile or nonvolatile. Volatile storage, as mentioned earlier, loses its contents when the power to the device is removed, so data must be written to nonvolatile storage for safekeeping.

**저장소는 계층 구조로 구성되어 있다. 일반적으로 CPU에 가까울 수록 용량이 작고 속도는 빠르다. 속도와 용량 차이 외에도 휘발성 혹은 비휘발성으로 구분할 수 있다.**

### I/O Structure

The form of interrupt-driven I/O is fine for moving small amounts of data but can produce high overhead when used for bulk data movement such as NVS I/O. To solve this problem, direct memory access (DMA) is used. After setting up buffers, pointers, and counters for the I/O device, the device controller transfers an entire block of data directly to or from the device and main memory, with no intervention by the CPU.

**소량의 데이터를 주고 받는 경우 interrupt 기반의 I/O 장치는 적합하다. 그러나 많은 양의 데이터 전송이 필요한 경우 DMA가 사용된다. 버퍼, 포인터, 카운터를 설정한 후 장치 컨트롤러는 CPU의 방해 없이 메인 메모리에 직접 접근하여 사용한다. 이렇게 장치 컨트롤러가 작업을 수행하는 동안 CPU는 interrupt 없이 다른 작업을 수행할 수 있다.**

## Computer-System Architecture

들어가기에 앞서 용어를 정리해보자.

- CPU - The hardware that executes instructions.
- Processor - A physical chip that contains one or more CPUs.
- Core - The basic computation unit of the CPU.
- Multicore - Including multiple computing cores on the same CPU.
- Multiprocessor - Including multiple processors

### Single-Processor Systems

The one main CPU with its core is capable of executing a general-purpose instruction set, including instructions from processes. These systems have other special-purpose processors as well. They may come in the form of device-specific processors, such as disk, keyboard, and graphics controllers. 

**과거에는 대부분의 컴퓨터가 한 개의 CPU와 한 개의 프로세싱 코어를 가진 single processor를 사용했다. 하나의 메인 CPU는 범용 명령어(general-purpose instruction)를 실행할 수 있다. 디스크, 키보드, 그래픽 컨트롤러 등에 사용되는 특별한 목적의 프로세서들도 존재한다. 특별한 목적의 프로세서들은 운영 체제와 통신할 수 없으며 프로세서 자체적으로 작업을 수행한다.** 

### Multiprocessor Systems

The processors share the computer bus and sometimes the clock, memory, and peripheral devices. The primary advantage of multiprocessor systems is increased throughput. That is, by increasing the number of processors, we expect to get more work done in less time.

**현대의 모바일 장치와 컴퓨터에서는 multiprocessor 시스템이 사용된다. 두 개 이상의 processor를 가지고 있다. 프로세서들은 컴퓨터 버스를 공유하며 clock, 메모리, 주변 장치들을 공유하기도 한다.** 

**멀티프로세서의 주요 장점은 처리량(throughput)의 증가다. N개의 프로세서를 사용하면 작업의 속도가 N배 증가하는 것은 아니다. 여러 개의 프로세서를 사용하면 일정량의 오버헤드가 발생한다.** 

The most common multiprocessor systems use symmetric multiprocessing (SMP), in which each peer CPU processor performs all tasks, including operating-system functions and user processes. 

A multiprocessor system of this form will allow processes and resources—such as memory— to be shared dynamically among the various processors and can lower the workload variance among the processors.

**일반적인 멀티프로세서 시스템으로 대칭 멀티프로세싱(symmetric multiprocessing)이 있다. 프로세서가 각각 자체적으로 레지스터와 캐시가 포함된 CPU를 갖고 있다. 이들은 모두 시스템 버스를 통해 메모리를 물리적으로 공유한다.** 

**이러한 대칭 멀티프로세싱의 장점은 성능의 저하 없이 많은 프로세스를 동시에 실행할 수 있다는 점이다. 다양한 프로세서들 간에 프로세스와 메모리와 같은 자원을 동적으로 공유하게 함으로써 하나의 CPU만 과부화되는 것을 막을 수 있다.**

![Untitled](/assets/images/dinosaur-os/5.png)

> 대칭 멀티프로세싱과 다르게 비대칭 멀티프로세싱은 계층적인 구조를 갖고 있으며 상위 프로세서가 하위 프로세서에게 일을 배분하는 형태이다.
> 

### Multicore systems

Multicore systems can be more efficient than multiple chips with single cores because on-chip communication is faster than between-chip communication. In addition, one chip with multiple cores uses significantly less power than multiple single-core chips, an important issue for mobile devices as well as laptops. In Figure 1.9, we show a dual-core design with two cores on the same processor chip.

**멀티프로세서의 정의는 시간이 흘러가며 계속해서 발전해왔다. 현재에는 멀티코어 시스템을 포함하고 있다. 멀티코어 시스템이란 하나의 칩에 여러개의 코어가 포함된 것이다. 멀티코어 시스템은 칩 간의 통신이 빠르기 때문에 단일 코어를 가진 여러 개의 칩보다 효율적이다. 아래 그림은 듀얼 코어 시스템이다. 동일한 프로세서 내에 두 개의 코어가 있다. 각 코어에는 자체적인 레지스터와 레벨 1 캐시를 가지고 있다. 또한 레벨 2 캐시는 동일한 칩에 있지만 CPU 코어에 의해 공유되고 있다. 현재 대부분의 아키텍쳐들은 로컬 캐시와 공유 캐시를 결합하는 이러한 방식을 갖고 있다.**

![Untitled](/assets/images/dinosaur-os/6.png)

## Operating-System Operations

운영 체제는 프로그램이 실행되는 환경을 제공한다. 

### Multiprogramming ans Multitasking

One of the most important aspects of operating systems is the ability to run multiple programs, as a single program cannot, in general, keep either the CPU or the I/O devices busy at all times.

The operating system keeps several processes in memory simultaneously. The operating system picks and begins to execute one of these processes. Eventually, the process may have to wait for some task, such as an I/O operation, to complete. In a non-multiprogrammed system, the CPU would sit idle. 

In a multiprogrammed system, the operating system simply switches to, and executes, another process. When that process needs to wait, the CPU switches to another process, and so on. Eventually, the first process finishes waiting and gets the CPU back.

**하나의 프로그램이 CPU 혹은 입출력 장치를 독점할 수 없다. 멀티프로그래밍은 CPU가 항상 한 개의 프로그램(프로세스)을 실행함으로써 CPU의 활용을 높인다. 운영 체제는 여러 프로세스를 메모리에 동시에 보관하고 하나의 프로세스를 선택하여 실행한다. 결국 프로세스는 다른 task가 완료되기 까지 기다려야한다. CPU가 여러 개의 프로세스를 번갈아 가면서 작업하는 동안 다른 프로세스는 대기한다.**

Multitasking is a logical extension of multiprogramming. In multitasking systems, the CPU executes multiple processes by switching among them, but the switches occur frequently, providing the user with a fast response time.

**멀티태스킹은 멀티프로그래밍의 확장된 개념이다. 멀티태스킹은 CPU가 여러 프로세스를 switching 하며 실행하지만 더 자주 switch가 일어난다.**

참고 자료

Operating System Concepts - 10th ed. by A. Silberschatz
