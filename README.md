# screeps-build_130595
_Beta版本注意！_    
_这个分支是Beta版本！！！！_    
_只用于源码分享和Custom Mode的模拟测试，如果直接放入default文件夹所导致的后果概不负责。_    
build130595，尚有很多部分不完善，欢迎pull request

# Beta
## 方法
在已有的数据结构上新增了可以通过数组计算工作部件和生产队列的方法。    
- function.body    
- function.room.probe    
- function.source    
分别在main中对应：    
- functionBody    
- functionRoomProbe    
- functionSource    

## 数据结构
和上一个default的发布版本不同，在修改后的数据结构中采用了更快速的检索方法。    
- config.room    
- config.spawn     
分别对应：    
- configRoom    
- configSpawn    

## Creeps
新增了工程虫：可以修复受损的建筑    
