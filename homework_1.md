异步就是把一个任务分成两段,先执行第一段,然后去执行其他任务,等做好了准备,再回头执行第二段;

EventLoop是指任务进入主线程,而是进入消息队列,等主线程空了,任务才会进入主线程执行;

消息队列是一种进程间通信或同一进程的不同线程间的通信方式,软件的贮列用来处理一系列的输入.
消息队列提供了异步的通信协议,每一个贮列中的纪录包含详细说明的数据,包含发生的时间,输入设备的种类,以及特定的输入参数.消息的发送者和接收者不需要同时与消息队列交互,消息会保存在队列中,直到接收者取回它

宿主环境提供的叫宏任务,由语言标准提供的叫微任务