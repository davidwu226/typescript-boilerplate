import chai from 'chai'
import 'mocha'
import deql from 'deep-equal-in-any-order'
import chaiAsPromised from 'chai-as-promised'

const { expect } = chai

chai.use(deql)
chai.use(chaiAsPromised)

describe('example', () => {
  it('should be the same', async () => {
    expect([1, 2, 3]).to.deep.equalInAnyOrder([3, 2, 1])
  })
})

