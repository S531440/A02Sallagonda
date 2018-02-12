QUnit.test('Testing calculateSeats function with several sets of inputs', function (assert) {
    assert.equal(average1(5,5), 5, 'Tested with two relatively small positive numbers');
    assert.equal(average1(-5,-5), 0, 'Tested with two negative numbers. Any arguments less than 0 will be set to 0.');    
});