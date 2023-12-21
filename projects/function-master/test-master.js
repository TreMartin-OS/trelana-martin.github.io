(function(){

  QUnit.test( "Our First Test", function( assert ) {
    var value = "hello tests";
    var some_number = 484;

    //                     ┌ Change this to what it should be
    assert.equal( value, 'hello tests');
    //                           ┌ Change this to what it should be
    assert.equal( some_number, 484);
  });

  QUnit.test("Functions can access/modify variables in parent scope.", function(assert){
    var outside_the_function = null;
    function yay(){
      var inside_the_function = "can you see me?";
      outside_the_function = inside_the_function;
    }

    yay();

    assert.equal(outside_the_function, "can you see me?");
  });

  QUnit.test("Function Parameters become scoped to the function.", function(assert){

    function yay(param){
      assert.equal(param, param); // Dont get this
    }

    yay("a fine kettle of fish");
  });

  QUnit.test("A functions local scope is not available in an outer scope.", function(assert){
    function yay(){
      var kix = "kid tested mother approved";
      assert.equal(kix, "kid tested mother approved"); // Why can the answer be kix or the str attached to it, shouldn't there be 1 answeer?
    }
    yay();
    
    var has_kix;
    // NOTE:
    // "this" is a special object that by default represents the global scope.
    // variables declared globally are stored as a property on the object: this.<variable>
    // if the variable is not global then this.<variable> will be undefined
    if(this.kix !== undefined){
      has_kix = kix;
    } else {
      has_kix = "i prefer cheerios";
    }
    assert.equal(has_kix, "i prefer cheerios");  // Same as the kix question
  });

  QUnit.test("Functions don't have access to eachothers scope", function(assert){
    function yay(){
      var from_yay = "i'm inside yay;";
    }

    function foo(){
      var in_foo = "i'm in foo";
      if(this.from_yay !== undefined){
        in_foo = this.from_yay;
      }
      assert.equal(in_foo, "i'm in foo");
      assert.equal(this.from_yay, undefined);  // this is undefined because its var is function locked
    }
    yay();
    foo();
  });

  QUnit.test("Inner scope variables override outter scope variables.", function(assert){

    var peanuts = 300;

    function yay(){
      var peanuts = "roasted";

      assert.equal(peanuts, "roasted"); // answer is "roasted" because function locked
    }
    yay();

    assert.equal(peanuts, 300); // its 300 cause its not in the inner function
  });

  QUnit.test("Variables created with var in a funtion are re-created each time", function(assert){
    function yay(){
      if(this.counter !== undefined){
        counter = counter + 1;
      } else {
        var counter = 10;
      }
    }

    yay();
    assert.equal(this.counter, this.counter); // Why is this the answer? Because the counter is a changing variable?
    yay();
    assert.equal(this.counter, this.counter); // But why are there 3 of these?
    yay();
    assert.equal(this.counter, this.counter);
  });

  QUnit.test("Inner scope can access outer scope", function(assert){
    var im_outside = "alpha";
    function yay(){
      var im_inside = "omega";
      return im_outside + im_inside;
    }

    assert.equal(yay(), yay()); // Answer because chacking that the function has access to im_outside? 
  });

  QUnit.test("Functions retain outer scope references between calls.", function(assert){
    var im_outside = 13;
    function yay(){
      im_outside += 1;
    }

    yay();
    assert.equal(im_outside, im_outside);  // Correct because its an ever changing counter var?
    yay();
    assert.equal(im_outside, im_outside); // Same?
  });

  QUnit.test("We can do goofy stuff with outer scope", function(assert){

    var hello = "greg";
    var name = "";

    function yay(){
      name += hello;
    }

    yay();
    assert.equal(name, name); // Making sure name matches in Global scope?
    yay();
    assert.equal(name, name); // Making sure name matches in Function scope
    yay();
    assert.equal(name, name); // Why is this here? Making sure name is the same after the function call?
  });

  QUnit.test("We can pass functions to other functions and then run them.", function(assert){
    var im_outter = 10;
    function yay(){
      im_outter /= 5;
    }
    function something(whatever){
      im_outter *= 20;
      whatever();
    }
    something(yay);
    assert.equal(im_outter, im_outter);  // Its a Changing counter variable so you dont check for a number

  });

  QUnit.test("We can get crazy with returns.", function(assert){
    function yay(){
      return " is dog";
    }
    function foo(whatever){
      return "hello, this" + whatever();
    }
    assert.equal(foo(yay), "hello, this is dog"); // Result of combining functions
  });

})();
