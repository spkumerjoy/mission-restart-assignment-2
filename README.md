# CS — Ticket System (Assignment-2)

## Q/A

- What is JSX, and why is it used?
    - Ans: JSX এর পূর্ণরূপ হলো JavaScript XML। এটি এমন একটি সিনট্যাক্স, যেটা দিয়ে আমরা JavaScript এর ভিতরে HTML এর মতো করে UI লিখতে পারি। React এ JSX ব্যবহার করলে কোড পড়তে সহজ হয় এবং UI কেমন হবে তা পরিষ্কারভাবে বোঝা যায়।
- What is the difference between State and Props?
    - Ans: Props এবং State — দুটোই ডাটা সংরক্ষণের জন্য ব্যবহার হয়, কিন্তু এদের কাজ আলাদা।
        - Props: Parent component থেকে Child component এ ডাটা পাঠাতে ব্যবহার হয়। Props কে পরিবর্তন করা যায় না (read-only)। Props বাইরে থেকে আসে।
        - State: State পরিবর্তন করা যায়। State পরিবর্তন হলে component আবার render হয়।
- What is the useState hook, and how does it work?
    - Ans: useState হলো React এর একটি Hook, যেটা দিয়ে আমরা Functional Component এ state ব্যবহার করতে পারি।
        - এটি দুইটি জিনিস রিটার্ন করে: বর্তমান state এর মান এবং state পরিবর্তন করার একটি function.
- How can you share state between components in React?
    - Ans: React এ এক component থেকে অন্য component এ state শেয়ার করার জন্য সাধারণত state কে Parent component এ রাখা হয়। তারপর সেই state এবং state পরিবর্তনের function কে Props এর মাধ্যমে Child component এ পাঠানো হয়।
- How is event handling done in React?
    - Ans: React এ event handling করা হয় JavaScript function দিয়ে। HTML এর মতো onclick না লিখে, React এ onClick (camelCase) ব্যবহার করা হয়।

## Live Site:

- https://

## About

This is a React practice site created to learn and explore React features.

## Technologies

- React
- JavaScript
- Tailwind CSS with Daisy UI
