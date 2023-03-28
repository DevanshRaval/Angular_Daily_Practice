export class DataService{
    user = [
        {name : 'user1', status: 'Active'},
        {name : 'user2', status: 'Active'},
        {name : 'user3', status: 'Inactive'},
        {name : 'user4', status: 'Active'},
        {name : 'user5', status: 'Active'},
    ]

    addUserService(name : string , status : string){
        this.user.push({name ,status});
    }
}