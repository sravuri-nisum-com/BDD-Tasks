
    describe('ContactManager.Models.Contact', () => {
        let contact;
      
        beforeEach(() => {
         contact = new ContactManager.Models.Contact();
        });
      
        it('should set default values of name ,tel,email to null and avatar to constant image', () => {
            expect(contact.get('name')).toBe(null);;
            expect(contact.get('tel')).toBe(null);;
            expect(contact.get('email')).toBe(null);;
            expect(contact.get('avatar')).toBe('6.jpg');;
        });
        describe('Setting values', () => {
            beforeEach(() => {
             contact.set({
                name:"sam",
                tel:"849-219-6965",
                email:"sr@gmail.com",
                avatar:"6.jpg"
                
              });
            });
            it('Will set passed attributes on the model instance when created.', function() {
            
                expect(contact.get('name')).toBe('sam');
                expect(contact.get('tel')).toBe('849-219-6965');
                expect(contact.get('email')).toBe('sr@gmail.com');
                expect(contact.get('avatar')).toBe('6.jpg');
           });
    
    });
});
