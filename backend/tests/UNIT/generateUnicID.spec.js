const generateUniqueID = require('../../src/utils/generateUnicID')

describe('Generate Unique ID', () => {
    it('should generatean unique id', () => {
        const id = generateUniqueID()

        expect(id).toHaveLength(8);
    })
})