const Manager = require("../lib/Manager")

describe('Manager Class functionality', () => {
    
      it("testing manager object creation with a name, id, email and officeNumber",()=>{
        const manager = new Manager("Karan",12,"karansingh@gmail.com",45);

        expect(manager.name).toEqual(expect.any(String));
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.officeNumber).toEqual(expect.any(Number));
      })

      it("should return a manager object with name,id,email, officeNumber",()=>{
        const manager = new Manager("Sodhi",11,"karan@gmail.com",33)
        const {id,name,email,officeNumber} = manager.getManager();

        expect(name).toEqual(expect.any(String));
        expect(id).toEqual(expect.any(Number));
        expect(email).toEqual(expect.any(String));
        expect(officeNumber).toEqual(expect.any(Number));
      })
    
  });
