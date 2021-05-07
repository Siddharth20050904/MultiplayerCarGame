class Form{
    constructor(){

    }
    display(){
        //input box & button
        var title = createElement('h');
        title.html("Car Racing Game");
        title.position(600,150);
        
        var input = createInput('name');
        input.position(600,200);

        var button = createButton('Enter');
        button.position(250,200);
        button.mousePressed(function(){

            input.hide();
            button.hide();

            var name = input.value();

            var greeting = createElement('h3');
            greeting.html("Hello "+name);
            greeting.position(200,200);
            
        })
    }
}