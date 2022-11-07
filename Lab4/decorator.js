/**
 * mplement Decorator pattern to add a logger to any object (additional class is needed). 
 * A logger method will log a message to the console.
 */
class User{
  constructor(name){
    this.name = name;
  }
}

class DecoratedUser{
    constructor(user, county, city){
        this.user = user;
        this.name = user.name;
        this.county = county;
        this.city = city;
    }
    logger(){
        console.log(this.name+" "+this.county+" "+this.city);
    }
}

const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();