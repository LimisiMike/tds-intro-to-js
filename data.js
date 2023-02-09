// Generate some random data objects to simulate an API response
// This is just a helper function to generate some random data
// for the demo. It's not part of the library.
(function generateData() {
  var data = [];
  for (var i = 1; i <= 100; i++) {
    data.push({
      id: i,
      name: "Item " + i,
      price: Math.floor(Math.random() * 1000),
    });
  }
  console.log(data);
  return data;
})();
