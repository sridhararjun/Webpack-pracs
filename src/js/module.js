function hello() {
  console.log("Hello hello()");
}

function world() {
  console.log("Hello world()");
}

// module.exports.hello = hello;
// module.exports.world = world;

export { hello, world };
