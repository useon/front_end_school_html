// 객체지향

// 1. 모듈 패턴
function person() {
    let age = 35;

    return {
        getAge: function () { return age },
        setAge: function (data) { age = data }
    }
}

const myPerson = person();
console.log(myPerson.getAge());



// 2. 사용자 정의 타입 패턴
function PersonType() {
    this.age = 35;
}

PersonType.prototype.getAge = function () {
    return this.age
}

const instancePerson = new PersonType();
const instancePerson2 = new PersonType();
const instancePerson3 = new PersonType();
const instancePerson4 = new PersonType();


console.log(instancePerson.age);

// 3. 모듈 + 사용자 정의 타입
function personType2() {
    let age = 25;

    function innerPersonType() { }

    innerPersonType.prototype.getAge = function () {
        return age;
    } // 클로져함수

    return innerPersonType;
}

const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge());

// 모듈패턴을 사용하는 이유 값을 은닉하기 위해.
// 함스스코프에 있으면 이걸 사용할 수 없으니까
// retrun키워드를 이용해서 함수 밖으로 값을 빼내는 것이다. 
// 폐쇄된 공간을 만들기 위한 함수

// 사용자 정의 타입 패턴은 새로운 인스턴스를 만들기 위한 함수다
// 생성자 함수 안에 있는 값. 생성자함수에 프로토타입으로 등록된 모든 걸 상속받는 새로운 자식이다.
// new는 인스턴스를 만드는데. 우리가 생성자 함수에 사용했던 this가 가리켰던 값을 인스턴스를 가리키게 만든다.
// 원래 this가 가리키는건 뭐죠? 자신을 호출한 객체를 가리킴.
// 여러분만의 커스텀함수를 만들기 위한 new임.
// 동일한 기능을 할 수 있는 인스턴스를 생성할 수 있다.
// 단점은 값을 은닉할 수 없다 !

// 모듈 + 사용자 정의 타입
// 같은 스코프 안에 있어서 접근이 가능하고 또 인스턴스를 생성할 수 있다. 

// 프로토타입-인스턴스가 상속받은 인스턴스도 사용할 수 있게 등록해주는 것이다.

// IIFE 패턴으로 만들어보기 (즉시실행함수로 만들기 위해.  즉시실행함수-익명함수)
const PersonType3 = function personType2() {
    let age = 25;

    function innerPersonType() { }

    innerPersonType.prototype.getAge = function () {
        return age;
    }

    return innerPersonType;
}

// Q. 그럼 즉시실행 함수 내부의 PersonType2는 생략 못해줄까요??
// A. 생략 가능