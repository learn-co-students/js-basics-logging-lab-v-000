const driver = 'bob';

function calledWithExactly (a, b) {
  if (!!b) {
    console.log(a, b);
  } else {
    console.log(a);
  }
}

calledWithExactly('this code was called');
calledWithExactly(driver);
calledWithExactly(driver, 'is the driver variable name');
