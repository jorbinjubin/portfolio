<script>
    import { slide } from 'svelte/transition';
    import C1 from '../../../content/oop/1.md';
    import C2 from '../../../content/oop/2.md';
    import C3 from '../../../content/oop/3.md';
    import C4 from '../../../content/oop/4.md';
    import C5 from '../../../content/oop/5.md';
    import C6 from '../../../content/oop/6.md';
    import C7 from '../../../content/oop/7.md';
    import C8 from '../../../content/oop/8.md';
    import C9 from '../../../content/oop/9.md';
    import C10 from '../../../content/oop/10.md';
    import C11 from '../../../content/oop/11.md';


  
  
    let basicsOpen = false;
    let inher_polyOpen = false;
    let inter_abstrOpen = false;

  </script>
  
  <main class="flex flex-col flex-1 p-4">
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-3 md:gap-3 lg:gap-5">
      <h2 class="font-semibold jetbrains text-4xl sm:text-5xl md:text-6xl pb-5 border-b">
        OOP
      </h2>
  
      <p class="text-lg pb-5">
        OOP (Object Oriented Programming) is a software design philosphy centered around modeling real-world things as <b>objects</b>. When we describe a car, we say it has: <br/><br/>
            - Properties, like color, speed, make, and model<br/>
            - Actions, like start, speed up, slow down, and so on.<br/><br/>
            In a program, these properties would be represented as variables, and the actions (behaviours) as methods.<br/>
            OOP, as the name suggests, allows you to model a program around an object, rather than purely around functions and logic.<br/>
            OOP is commonly used because it can be very modular (each class/object does a simple thing but can be reused), easy to maintain, and scalable.
      </p>
  
      <div class="rounded-md bg-neutral-800 p-6 w-96">
        <h3 class="font-semibold text-2xl sm:text pb-5 text"><u>Quick Navigation</u></h3>
        <a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#basics">1. Basics of OOP</a> <br/>
        <a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#inher_polym">2. Inheritance and Polymorphism</a><br/>
        <a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#inter_abstr">3. Interfaces and Abstracts</a><br/>
        <!-- svelte-ignore element_invalid_self_closing_tag -->
        <div class="pb-3"/>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_missing_attribute -->
        <a class="text-lg text-cyan-0 hover:text-fuchsia-500 cursor-pointer" href="/tutorials"> ← Back </a>
    </div>
  
      <div class="pb-3"></div>
  
      <section id="basics">
        
        <h3 class="font-semibold jetbrains text-3xl sm:text pb-5">01. Basics</h3>
        Classes in Java are like a blueprint for creating objects. Suppose you had a car class for a garage management system. It would probably look like this:<br/>
        <C1/>
       
        <div class="pb-5"/>
        This is a fairly basic example of a Java class. It has a declaration section, a constructor, and some basic methods. As it is a class, it defines what every car should <em>have</em> and <em>do</em>, but is not a real car itself. <br/>
        Rather, to make a real car, you would have to make an object using the Car class. In other words, this is creating an <b>instance of the Car class</b>.
        To create a new object of the Car class, you could run this code in a class <em>other than</em> Car:
        <C2/>
        <div class="pb-5"/>
        The constructor is what makes object creation possible. In essence, it is a special method that is used to create and initialize objects.:<br/>
        By calling the constructor in a different class and giving it some information (make, model, etc.), you are able to create a new object of type Car and use its methods and modify its attributes.
        </section>
  
      <section id="inher_polym">
        <h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">02. Inheritance and Polymorphism</h3>
        In order to understand inheritance and polymorphism, it is important to understand how class hierarchy works.
        Suppose you had 2 classes: ClassA and ClassB. Their implementations are shown below:
        <C3/>
        <div class="pb-5"/>
        All Java classes extend the Object class by default, so when you declare ClassA and ClassB, the class hierarchy makes ClassB a subclass of ClassA, which itself is a subclass of Object.
        <b>Inheritance</b> allows subclasses to "inherit" the behaviours and attributes of the superclass. Thus, ClassB is able to use the getFoo() method, even though it is not explicitly declared in ClassB:
        <C4/>
        A class can only inherit from one class at most, but subclasses of subclasses are entirely possible.
        <div class="pb-5"/>

        <b>Polymorphism</b> allows the Java runtime to decide what method to call, based on runtime conditions. <br/>
        Say you had the following classes:
        <C5/>
        As you can see, each class has a sayHello() method associated with it, but ClassC and ClassB are both subclasses of ClassA. This means that when you run the following code:
        <C6/>
        The runtime automatically determines which method to call, based on the type of the object created. <br/>Note that there is a distinction to be made: the reference variable for obj2 is of type ClassA, even though it is technically a ClassB. As shown in the previous example, this can cause issues unless downcasting is done. However, since all three classes have a sayHello() method, downcasing is not neccessary here.
        In short, polymorphism will cause Java to run the method from the "actual" type of an object, not the reference variable type.
      <div class="pb-10"/>
      <section id="inter_abstr">
        <h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">03. Interfaces and Abstract Classes</h3>
        Interfaces are like a blueprint for classes in a similar way in which classes are a blueprint for objects. Interfaces cannot have constructors or instance variables, only methods. They are used to define common capabilities, or actions, that unrelated classes can share. A class can implement multiple interfaces.
        When a class implements an interface, it <b>must</b> implement the methods contained within.
        They are used like so:
        <C7/>
        Then, to implement those interfaces:
        <C8/>
        If a class implements an interface but methods are not present the code will fail to compile. <br/> <br/>

        Abstract classes are classes that cannot have objects created of them, and are commonly used when multiple classes share <b>some common features</b>.  <br/>
        For example, consider an animal: Most animals can sleep and make a sound. Sleeping is concrete (common to all animals), whilst making a sound is unique to each animal. This can be expressed as follows:
        <C9/>
        Now, consider a class that extends Animal, and implements the makeSound method:
        <C10/>
        When tested, the Dog class would be able to sleep and makeSound:
        <C11/>
      </section>
    </div>
  </main>
  