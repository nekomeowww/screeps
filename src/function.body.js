//Body的转化
//包含生成配置文件config.spawn.js
var configSpawn = require('config.spawn');
var configRoom = require('config.room');
//主体
var functionBody = {
    /** @param {Body} body **/
    run: function (){
        //循环遍历所有数组并且选择必要的部分
        //Demo set
        var initlist = [{work:3},{carry:2},{move:1}];

        //区分部件
        var setCreepWORK = [];
        for(var i = 0; i < initlist[0].work; i++) {
            setCreepWORK[i] = "WORK";
        }
        var setCreepCARRY = [];
        for(var j = 0; j < initlist[1].carry; j++) {
            setCreepCARRY[j] = "CARRY";
        }
        var setCreepMOVE = [];
        for(var k = 0; k < initlist[2].move; k++) {
            setCreepMOVE[k] = "MOVE";
        }

        var setCreep = [];
        setCreep = setCreepWORK.concat(setCreepCARRY);
        setCreep = setCreep.concat(setCreepMOVE);
        setCreepWORK = null;
        setCreepCARRY = null;
        setCreepMOVE = null;
        return setCreep;
    }
};

module.exports = functionBody;
