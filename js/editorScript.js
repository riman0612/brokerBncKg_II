// editor submit    

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTRkVT7tbugUbV0PGumc4RdGKCZby_DNc",
    authDomain: "tempproject-9e7ae.firebaseapp.com",
    databaseURL: "https://tempproject-9e7ae.firebaseio.com",
    projectId: "tempproject-9e7ae",
    storageBucket: "tempproject-9e7ae.appspot.com",
    messagingSenderId: "682367898884"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages');
    document.getElementById('editorData').onsubmit = (e) => {
        e.preventDefault();
        
        var name = getInputValue('naming');
        var price = getInputValue('price');
        var rate = getInputValue('rate');
        var recoupment = getInputValue('recoupment');
        var profit = getInputValue('profit');
        var description = getInputValue('description');
        var broker = getInputValue('broker');
        var city = getInputValue('city');
        var region = getInputValue('region');
        var section = getInputValue('section');
        var middleMonthTurnovers = getInputValue('middleMonthTurnovers');
        var middleMonthCosts = getInputValue('middleMonthCosts');
        var amountOfWorkers = getInputValue('amountOfWorkers');
        var salary = getInputValue('salary');
        var area = getInputValue('area');
        var rentPrice = getInputValue('rentPrice');
        var businessAge = getInputValue('businessAge');
        var organizationalAndLegalForm = getInputValue('organizationalAndLegalForm');

        saveMessage(name, price, rate, recoupment, profit, description, broker, city, region, section, middleMonthTurnovers, middleMonthCosts, amountOfWorkers, salary, area, rentPrice, businessAge, organizationalAndLegalForm);
        // console.log(name, price, rate, recoupment, profit, description, city, region, section, middleMonthTurnovers, middleMonthCosts, amountOfWorkers, salary, area, rentPrice, businessAge, organizationalAndLegalForm);
        // console.log(name);
    }
    
    function getInputValue(id) {
        return document.getElementById(id).value
    }

    function saveMessage(name, price, rate, recoupment, profit, description, broker, city, region, section, middleMonthTurnovers, middleMonthCosts, amountOfWorkers, salary, area, rentPrice, businessAge, organizationalAndLegalForm) {
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            price: price,
            rate: rate,
            recoupment: recoupment,
            profit: profit,
            description: description,
            broker: broker,
            city: city,
            region: region,
            section: section,
            middleMonthTurnovers: middleMonthTurnovers,
            middleMonthCosts: middleMonthCosts,
            amountOfWorkers: amountOfWorkers,
            salary: salary,
            area: area,
            rentPrice: rentPrice,
            businessAge: businessAge,
            organizationalAndLegalForm: organizationalAndLegalForm
        })
    };


    // console.log(messagesRef.push());
    console.log(firebase.database());