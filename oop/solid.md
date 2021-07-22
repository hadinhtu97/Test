## SOLID
<hr>
SOLID is a popular set of design principles that are used in object-oriented software development.

SOLID is an acronym that stands for five key design principles: 
* Single responsibility principle
* Open-closed principle
* Liskov substitution principle
* Interface segregation principle
* Dependency inversion principle

`Advantages`: make designs easier to understand, maintain, and extend.

`Disadvantages`: writing longer and more complex code.

## Single responsibility principle - S - SPR
`A class should have one, and only one, reason to change`

A class with too many functions will also become cumbersome and complex.

In the IT industry, requirements are very fickle, leading to code changes.

If a class has too many functions, too cumbersome, changing the code will be very difficult, take a long time, and easily affect other active modules.

Exam wrong: 
```js
class Student {
    name, age

    getInfoText()

    getInfoHTML()

    saveToDB() 

    saveToFile()

    ...
}
```

As the code grows, adding more functions, the Student class will get bigger

And, if there are other classes like Person, Teacher etc., the code to display/store information will be scattered in many classes, very difficult to repair and upgrade.

To solve it, we just need to split it up into many classes, each with its own function. When it is necessary to upgrade and repair, it will take place in each class, not affecting the remaining classes.

```js
class Student {
    name, age
}

class Teacher {
    name, age
}

class GetInfo {
    getInfoText()
    getInfoHTML()
}

class Store {
    saveToDB()
    saveToFile()
}
```

## Open/closed principle - O - OCP
`open for extension but closed for modification`

A module/class/function needs to meet the following two conditions:

* Easy to expand: Can easily upgrade, expand, add new features to a module when required.
* Difficult to modify: Restrict or prohibit modifying the source code of existing modules.

An exam:
Class CreditCard describe a method to caculate monthly discount
```js
class CreditCard {
    //....
    type: string
    monthlyCost: number
    monthlyDiscount() {
        return monthlyCost * 2 / 100
    }
}
```
When monthly discount depend on type of card, which can be : sliver or gold, we should'n modifiy the method monthlyDiscount like :
```js
class CreditCard {
    //....
    type: string
    monthlyCost: number
    monthlyDiscount() {
        if(type === 'Sliver') {
            //
        }
        if(type === 'Gold') {
            //
        }
        return monthlyCost * 2 / 100
    }
}
```
Applying OCP, we should create two new classes explaned from CreditCard 
```js
class CreditCard {
    //....
    type: string
    monthlyCost: number
    monthlyDiscount() {
        return monthlyCost * 2 / 100
    }
}

class SliverCreditCard  extends CreditCard{
    monthlyDiscount() {
        return monthlyCost * 5 / 100
    }
}
class SliverCreditCard extends CreditCard {
    monthlyDiscount() {
        return monthlyCost * 10 / 100
    }
}
```

## Liskov substitution principle - L - LSP
Any instance of a parent class can be replaced by an instance of its child class without changing the correctness of the program.

in the real world a square is a rectangle so the mistake made in code is a square class that is extended from a rectangle class

```js
class Rectangle {
    setWidth(w) {
        width = w
    }
    setHeight(h){
        height = h
    }

    area() {
        return width * height
    }

}

class Square extends Rectangle {
    setWidth(length) {
        width = w
        height = w
    }
    setHeight(length) {
        height = length
        width = length
    }
}
```
To solve this problem, we create an class Shape then Square and Rectangle can extend from Shape

> A is B, does not mean that A should inherit B. A should inherit B only when A can substitute for B

## Interface segregation principle - I - ISP
Instead of using one large interface, we should split it into many small interfaces, with many specific purposes

```js
interface Animal {
    eat()
    sleep()
    fly()
    swim()
}

class Bird implements Animal {
    eat()
    ...
    swim() {
        throw Error()
    }
}

class Fish implements Animal {
    eat()
    ..
    fly() {
        throw Error()
    }
    swim()
}
```
fix
```js
interface Animal {
    eat()
    sleep()
}
interface IBird {
    fly()
}
interface IFish {
    swim()
}
class Bird implements Animal, IBird {
    eat()
    sleep()
    fly()
}
class Fish implements Animal, IFish {
    eat()
    sleep()
    swim()
}
```

## Dependency inversion principle - D - DIP
high-level modules must not depend on low-level modules, both will depend on abstractions

```js
class SqlDB {
    save() {
        //
    } 
}

class Checkout {
      //

      save(db:  SqlDB) {
          db.save()
      }
}
```
when we need to save in mongodb
```js
class SqlDB {
    save() {
        //
    }
}
class MongoDB {
    save() {
        //
    }
}
class Checkout {
    //

    save(db: SqlDB) {
        db.save()
    }
}
```
Applying DIP, we create an interface of database
```ts
interface DB {
    save()
}
class SqlDB implements DB {
    save() {
        //
    }
}
class MongoDB implements DB {
    save() {
        //
    }
}
class Checkout {
    save(db: DB) {
        db.save()
    }
}