"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[49904],{71362:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return r},default:function(){return u}});var t=o(87462),a=o(45987),i=(o(35776),o(3905)),s=o(91515);const d=["components"],r={},l=(c="InlineAlert",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var c;const p={_frontmatter:r},m=s.Z;function u(e){let{components:n}=e,o=(0,a.Z)(e,d);return(0,i.mdx)(m,(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"extension-coding"},"Extension coding"),(0,i.mdx)("p",null,"The coding best practices presented in this section should be known and understood by you, the developer, when creating or maintaining your extensions. This ensures that the extension you develop behaves and functions correctly within the application architecture. This guide is not only meant to educate you about coding best practices, but to also highlight some pitfalls we have seen other extension developers fall into so that you may avoid them."),(0,i.mdx)("p",null,"For in depth content about creating extensions, see the ",(0,i.mdx)("a",{parentName:"p",href:"../../development/index.md"},"PHP Developer Guide"),"."),(0,i.mdx)("p",null,"You should follow common programming best practices to reduce bugs and improve the quality and maintainability of your extensions."),(0,i.mdx)("p",null,"The following list of best practices addresses commonly reported issues in third-party extensions."),(0,i.mdx)("h3",{id:"follow-a-set-of-coding-standards"},"Follow a set of coding standards"),(0,i.mdx)("p",null,"Coding standards are a set of guidelines that describe how code should be written. These standards define coding practices that determine the style of the code. Whether you are a solo developer or part of a team, following a set of coding standards will help make your code consistent and maintainable."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"../../coding-standards/index.md"},"Coding Standards")," are based on the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"http://framework.zend.com/manual/1.12/en/coding-standard.html"},"Zend Coding standards")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"http://www.php-fig.org/psr/psr-2/"},"PSR2")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"http://www.php-fig.org/psr/psr-4/"},"PSR4"))),(0,i.mdx)("p",null,"To help you stick to coding standards, we recommend using the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/squizlabs/PHP_CodeSniffer"},"PHP_CodeSniffer tool"),"."),(0,i.mdx)("h3",{id:"write-and-utilize-reusable-code"},"Write and utilize reusable code"),(0,i.mdx)("p",null,"Avoid using redundant or duplicate code, which can be hard to maintain. Instead of copying and pasting the same code throughout your extension, create a single class or method and reference it when needed."),(0,i.mdx)("p",null,"As a general rule, reuse code as much as possible to prevent code duplication."),(0,i.mdx)("p",null,"The code you write should be small, focused, and provide a generic solution. This will help you reuse code in future development."),(0,i.mdx)("h3",{id:"design-your-code-to-be-replaceable"},"Design your code to be replaceable"),(0,i.mdx)("p",null,"Designing and writing your code to be replaceable is just as important as making it reusable. Having a replaceable design means your code is modular and loosely coupled, which makes updates and improvements easier."),(0,i.mdx)("p",null,"It is common practice to replace parts of your codebase with newer and better pieces as bugs are found or newer strategies become available. Writing replaceable code in your codebase makes this practice easier and more efficient."),(0,i.mdx)("h3",{id:"avoid-creating-helper-classes"},"Avoid creating helper classes"),(0,i.mdx)("p",null,"Helper or utility classes are classes filled with static methods that do not quite fit anywhere else. These classes are considered an anti-pattern and violate the principles of object-oriented programming."),(0,i.mdx)("p",null,"If you have ",(0,i.mdx)("inlineCode",{parentName:"p"},"ClassA")," and a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ClassAHelper")," with static functions that work on ",(0,i.mdx)("inlineCode",{parentName:"p"},"ClassA"),", you should consider refactoring those functions into ",(0,i.mdx)("inlineCode",{parentName:"p"},"ClassA"),"."),(0,i.mdx)("p",null,"A helper class that functions as a catch-all for random methods violates the single responsibility principle because it is an attempt to solve multiple problems in a single class. You should refactor your code and move those functions into the appropriate classes."),(0,i.mdx)("h3",{id:"be-consistent-with-case-and-naming-conventions"},"Be consistent with case and naming conventions"),(0,i.mdx)("p",null,"You should be consistent in your naming conventions for files, folder names, classes, and methods. Following standard conventions makes your code easier to read and look professional."),(0,i.mdx)("p",null,"Not following this practice is a code standards violation and impacts your extension's readability and  maintainability."),(0,i.mdx)("h3",{id:"composition-over-inheritance"},"Composition over inheritance"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)"},"Class inheritance")," is the object-oriented programming concept that deals with code reuse and extending the behavior of a base class, which was preferred for Magento 1 development."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object_composition"},"Object composition")," is the programming concept of combining class objects and data types to create a more complex class. The classes and data types are used together to produce a desired functionality."),(0,i.mdx)("p",null,"For Magento 2 extension development, we encourage the use of object composition over class inheritance. Using composition over inheritance makes your extension easier to maintain when class changes occur and update when new features need to be implemented."),(0,i.mdx)("h3",{id:"using-around-plugins"},"Using around plugins"),(0,i.mdx)("p",null,"Avoid using ",(0,i.mdx)("a",{parentName:"p",href:"../../development/components/plugins.md"},"around method plugins")," when they are not required because they increase stack traces and affect performance. The only use case for around method plugins is when you need to terminate the execution of all further plugins and original methods."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Access to method parameters was the primary justification for using ",(0,i.mdx)("strong",{parentName:"p"},"around")," method plugins instead of ",(0,i.mdx)("strong",{parentName:"p"},"after")," method plugins. Since 2.2, ",(0,i.mdx)("a",{parentName:"p",href:"../../development/components/plugins.md#after-methods"},"after method plugins")," give you access to method parameters. Use ",(0,i.mdx)("strong",{parentName:"p"},"after")," method plugins if you need to replace or modify function results using arguments."),(0,i.mdx)("h3",{id:"test-your-code"},"Test your code"),(0,i.mdx)("p",null,"Write testable code and follow the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/testing/guide/"},"Testing Guide")," to create tests for your code."),(0,i.mdx)("p",null,"Tests help describe what your code does under different conditions and define its functionality. Make sure your tests cover a variety of conditions to prevent the introduction of bugs when you add new code."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-best-practices-extensions-index-md-e53692159da9dafdf841.js.map