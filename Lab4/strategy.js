class Info{
    logging(textMessage){
        console.info(textMessage);
    }
}

class Warn{
    logging(textMessage){
        console.warn(textMessage);
    }
}

class Error{
    logging(textMessage){
        console.error(textMessage);
    }
}

class Table{
    logging(textMessage){
        console.table(textMessage);
    }
}

class Strategy{
    setStrategy(methodLogin){
        this.methodLogin = methodLogin;
    }
    logging(textMessage){
        this.methodLogin.logging(textMessage);
    }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);