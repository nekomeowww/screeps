//留个爪印——by薛定谔

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var actionTower = require('action.tower');
var actionW27N26Spawn = require('action.W27N26.spawn');
var configSpawn = require('config.spawn');
var functionBody = require('function.body');
var functionRoomProbe = require('function.room.probe');


    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('正在清理不存在的代码虫标记：', name);
        }
    }

module.exports.loop = function () {
//使用对象来运行函数。这里的module.exports.loop已经包含了自动循环的函数
//tower的运行
    actionTower.run();
    actionW27N26Spawn.run();
    functionBody.run();
    for(var name in Game.creeps) {
    //循环代码虫的名字
        var creep = Game.creeps[name];
        //赋予creep的值为代码虫的名字
        if(creep.memory.role == 'harvester') {
        //如果检测到这个代码虫的标记为开采虫,那么运行下面的代码
            roleHarvester.run(creep);
          //运行开采的module
        }
        if(creep.memory.role == 'upgrader') {
        //如果检测到这个代码虫的标记为升级虫，那么运行下面的代码
            roleUpgrader.run(creep);
            //运行开采的代码
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
    functionBody.run();
    functionRoomProbe.run('W27N26');
    //console.log(functionBody.run());
    //console.log(_.size(Game.spawns.Factory01.room.find(FIND_CONSTRUCTION_SITES)));
};
