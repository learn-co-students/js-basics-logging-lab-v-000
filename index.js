const driver = 'bob';

function calledWithExactly() {
    console.log('this code was called')
    console.log(driver)
    console.log(driver, 'is the driver variable name')
}

calledWithExactly()