describe('Test of DemoComponent',()=>{
    test("This test can't fail", () => {
        // Arrange
        const msg = 'Hello World';
        // Act 
        const result = msg.split(' ');
        // Assert
        expect(result).toEqual(['Hello', 'World']);
    })

})