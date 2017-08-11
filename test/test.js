var should = require('chai').should()

// at the moment we do not have any test to run
// so I wrote an example to test the mocha engine
describe('test chars', () => {
  it('test abc 1', () => {
    'abc'.should.equal('abc')
  })

  it('test def 1', () => {
    'def'.should.equal('abc')
  })

  it('test def 2', () => {
    'def'.should.equal('def')
  })
  
  it('test abc 2', () => {
    'abc'.should.equal('def')
  })
})
