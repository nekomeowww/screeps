//生成配置 Spawning Configuration

var configSpawn = [
    {
        listnum:0,
        set:"Harvester01",
        body:[{work:1},{carry:1},{move:1}],
        number:0,
        role:"harvester",
        dest:{target:0},
        room:"W27E27",
        comment:"前往资源点一的一级开采虫"
    },
    {
        listnum:0,
        set:"Harvester02",
        body:[{work:1},{carry:1},{move:1}],
        number:0,
        role:"harvester",
        dest:{target:1},
        room:"W27N26",
        comment:"前往资源点二的一级开采虫"
    },
    {
        listnum:0,
        set:"Upgrader01",
        body:[{work:1},{carry:1},{move:1}],
        number:0,
        role:"upgrader",
        dest:{target:null},
        room:"W27N26",
        comment:"前往资源点一的一级升级虫"
    },
    {
        listnum:0,
        set:"Builder01",
        body:[{work:1},{carry:1},{move:1}],
        number:0,
        role:"builder",
        dest:{target:0},
        room:"W27N26",
        comment:"前往资源点二的一级建造虫"
    }
];

module.exports = configSpawn;
