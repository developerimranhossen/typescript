// generic type

function greetings1<T>(name: T) {
    console.log(`Hello ${name}. Type of ${name} is ${typeof name}`);
}

greetings1(1234)

// or

function greetings2<T>(name: T): void {
    console.log(`Hello ${name}. Type of ${name} is ${typeof name}`);
}

greetings2(1234)

// generic type for two parameters

function greetingsTwoParameter<T, v>(params1: T, params2: v): void {
    console.log(`Hello ${params1}. Type of ${params1} is ${typeof params1}`);
    console.log(`Hello ${params2}. Type of ${params2} is ${typeof params2}`);
}

greetingsTwoParameter(1234, "imran")