{
    interface Profile {
        name:string,
        age:number,
        email:string
    }
   
    const updateProfile=(person:Profile,updates:Partial<Profile>):Profile=>{

        if("name" in updates){
           person.name=updates.name as string;
        }
        if('age' in updates){
            person.age=updates.age as number;
        }
        if('email' in updates){
            person.email=updates.email as string;
        }
        return person
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    const res:object=updateProfile(myProfile, { age: 26 });
}