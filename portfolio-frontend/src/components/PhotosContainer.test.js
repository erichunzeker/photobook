const PhotosContainer = require("./PhotosContainer")

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new PhotosContainer.default(["Michael", "Pierre Edouard", "Pierre Edouard"])
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
