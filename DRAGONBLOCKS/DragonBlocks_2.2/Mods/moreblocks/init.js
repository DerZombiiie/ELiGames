if(moreblocks)	{
var cobblestone={name:"cobblestone",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(Mods/moreblocks/textures/cobblestone.png)",
groups:["stonebased"],
up:0,
brakedown:0,
}
var planks={
	name:"planks",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(Mods/moreblocks/textures/oak_planks.png)",
groups:["woodbased"],
up:0,
brakedown:0,
}
var pumpkin={
	name:"pumpkin",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(Mods/moreblocks/textures/pumpkin.png)",
groups:["plant"],
up:0,
brakedown:0,
}
var sponge={
	name:"sponge",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(Mods/moreblocks/textures/sponge.png)",
groups:["sponge"],
up:0,
brakedown:0,
}
var wet_sponge={
	name:"wet_sponge",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(Mods/moreblocks/textures/wet_sponge.png)",
groups:["sponge"],
up:0,
brakedown:0,
}
var prismarin={
	name:"prismarin",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(Mods/moreblocks/textures/broken_prismarin.png)",
groups:["prismarin"],
up:0,
brakedown:0,
}
var dark_prismarin={
	name:"dark_prismarin",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(Mods/moreblocks/textures/dark_prismarin.png)",
groups:["prismarin"],
up:0,
brakedown:0,
}
var bedrock={
	name:"bedrock",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(Mods/moreblocks/textures/bedrock.png)",
groups:["creative"],
up:0,
brakedown:0,
}
var soul_sand={
	name:"soul_sand",
mobStability:false,
buildStability:true,
liquids:true,
texture:"url(Mods/moreblocks/textures/soul_sand.png)",
groups:["sand"],
up:9.41,
brakedown:0.5,
}
var bricks={
	name:"bricks",
mobStability:true,
buildStability:true,
liquids:true,
texture:"url(Mods/moreblocks/textures/bricks.png)",
groups:["bricks","stonebased"],
up:1,
brakedown:0,
}
var sand={
	name:"sand",
mobStability:true,
buildStability:true,
liquids:true,
texture:"url(Mods/moreblocks/textures/sand.png)",
groups:["sand"],
up:1,
brakedown:0,
}
var red_sand={
	name:"red_sand",
mobStability:true,
buildStability:true,
liquids:true,
texture:"url(Mods/moreblocks/textures/red_sand.png)",
groups:["sand"],
up:1,
brakedown:0,
}
var sandstone={
	name:"sandstone",
mobStability:true,
buildStability:true,
liquids:true,
texture:"url(Mods/moreblocks/textures/sandstone.png)",
groups:["stonebased"],
up:1,
brakedown:0,
}
var red_sandstone={
	name:"red_sandstone",
mobStability:true,
buildStability:true,
liquids:true,
texture:"url(Mods/moreblocks/textures/red_sandstone.png)",
groups:["stonebased"],
up:1,
brakedown:0,
}
var chisel_sandstone={
	name:"chisel_sandstone",
mobStability:true,
buildStability:true,
liquids:true,
texture:"url(Mods/moreblocks/textures/chisel_sandstone.png)",
groups:["stonebased"],
up:1,
brakedown:0
}
var red_chisel_sandstone={
	name:"red_chisel_sandstone",
mobStability:true,
buildStability:true,
liquids:true,
texture:"url(Mods/moreblocks/textures/red_chisel_sandstone.png)",
groups:["stonebased"],
up:1,
brakedown:0,
}
blocks.push(cobblestone);
blocks.push(planks);
blocks.push(pumpkin);
blocks.push(sponge);
blocks.push(wet_sponge);
blocks.push(prismarin);
blocks.push(dark_prismarin);
blocks.push(bedrock);
blocks.push(soul_sand);
blocks.push(bricks);
blocks.push(sand);
blocks.push(sandstone);
blocks.push(chisel_sandstone);
blocks.push(red_sand);
blocks.push(red_sandstone);
blocks.push(red_chisel_sandstone);
if(SimpleDigging){
cobblestone.hardness=9;
planks.hardness=6;
prismarin.hardness=5;
dark_prismarin.hardness=5;
sand.hardness=3;
soul_sand.hardness=3;
red_chisel_sandstone.hardness=8;
chisel_sandstone.hardness=8;
sandstone.hardness=8;
red_sandstone.hardness=8;
bricks.hardness=9;
pumpkin.hardness=4;
sponge.hardness=2;
wet_sponge.hardness=2;
red_sand.hardness=3;
}
}